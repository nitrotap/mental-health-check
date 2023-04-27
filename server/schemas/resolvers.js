const { AuthenticationError } = require('apollo-server-express');
const { User, QuizSet, QuizResult, TherapyNote } = require('../models');
const Recording = require('../models/Recording');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // user should return each quizSet with it's results
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById({ _id: context.user._id })
                    .populate('quizzes')
                    .populate('therapyNotes');

                // console.log(user)
                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        quizSet: async (parent, { quizSetId }, context) => {
            // if (context.user) {
            const quizSet = await QuizSet.findById(
                { _id: quizSetId }
            )
            return quizSet
            // }
        },
        therapyNote: async (parent, { therapyNoteId }, context) => {
            if (context.user) {
                const therapyNote = await TherapyNote.findById(
                    { _id: therapyNoteId }
                )
                return therapyNote
            }
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        // creates a single quiz set
        addQuizSet: async (parent, args, context) => {
            try {
                // creates a single quiz
                const quizSet = await QuizSet.create({
                    // null uses context
                    args
                });
                if (context.user) {
                    // add quizSet to user
                    const updatedUser = await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $addToSet: { quizzes: quizSet } },
                        { new: true }
                    )
                }
                return quizSet
            } catch (err) {
                throw new AuthenticationError('Not logged in');
            }
        },
        // creates new record for quiz taken
        addQuizResult: async (parent, { quizSetId, quizTaken, quizAnswer }, context) => {
            // if (context.user) {
            // create new quiz result
            const updatedQuizSet = await QuizSet.findOneAndUpdate(
                { _id: quizSetId },
                { $push: { quizResults: { quizTaken, quizAnswer } } },
                { new: true }
            );
            return updatedQuizSet;
            // }

            throw new AuthenticationError('You need to be logged in!');
        },
        // delete a QuizSet
        removeQuizSet: async (parent, { quizSetId }, context) => {
            if (context.user) {
                const deletedQuizSet = await QuizSet.findByIdAndDelete(
                    { _id: quizSetId },
                )
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { quizzes: deletedQuizSet } }
                )
                return deletedQuizSet;
            }

            throw new AuthenticationError('You need to be logged in!');

        },
        addRecording: async (parent, { audio, title }, context) => {
            if (context.user) {
                const newRecording = await Recording.create({
                    audio,
                    title
                })

                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { recordings: newRecording } }
                )


                return newRecording
            }
            throw new AuthenticationError('You need to be logged in!');

        },
        // delete a Recording
        removeRecording: async (parent, { recordingId }, context) => {
            if (context.user) {
                const deletedRecording = await Recording.findByIdAndDelete(
                    { _id: recordingId },
                )
                // console.log(recordingId)
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { recordings: deletedRecording } }
                )
                return deletedRecording;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addTherapyNote: async (parent, { doingQuestion, feelingQuestion, nextQuestion, feelingRating, helpfulRating, notes }, context) => {
            if (context.user) {
                const newTherapyNote = await TherapyNote.create({
                    doingQuestion, feelingQuestion, nextQuestion, feelingRating, helpfulRating, notes
                });

                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { therapyNotes: newTherapyNote } },
                    { new: true }

                )

                return newTherapyNote;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeTherapyNote: async (parent, { therapyNoteId }, context) => {
            if (context.user) {
                const deletedTherapyNote = await TherapyNote.findByIdAndDelete(
                    { _id: therapyNoteId }
                )

                // console.log(therapyNoteId)
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { therapyNotes: therapyNoteId } },
                    { new: true }
                )
                // console.log(updatedUser)
                return deletedTherapyNote;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}

module.exports = resolvers;
