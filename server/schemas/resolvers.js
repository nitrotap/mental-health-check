const { AuthenticationError } = require('apollo-server-express');
const { User, QuizSet, QuizResult } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('thoughts')
                    .populate('friends');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    // populate: 'QuizSet'
                });

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
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
        // todo 
        // adds quizset to user
        addQuizSet: async (parent, { quizResults }, context) => {
            // console.log(context.user)

            console.log(quizResults)
            if (context.user) {
                // creates a single quiz
                console.log(quizResults)
                const quizSet = await QuizSet.create({
                    quizResults
                });
                console.log(quizSet)
                return quizSet
            }

            //     return quizSet;
            // }

            throw new AuthenticationError('Not logged in');
        },
        // todo
        // creates new record for quiz taken
        addQuizResult: async (parent, { quizSetId, quizTaken, quizAnswer }, context) => {
            // console.log("quiz" + quizSetId)
            if (context.user) {
                // create new quiz result
                const updatedQuizSet = await QuizSet.findOneAndUpdate(
                    { _id: quizSetId },
                    { $push: { quizResults: { quizTaken, quizAnswer } } },
                    { new: true }
                );
                console.log(updatedQuizSet)
                return updatedQuizSet;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
    }
}

module.exports = resolvers;
