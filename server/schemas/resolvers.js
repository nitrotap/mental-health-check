const { AuthenticationError } = require('apollo-server-express');
const { User, Quiz, QuizResult } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    // populate: 'Quiz'
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
        addQuiz: async (parent, args, context) => {
            if (context.user) {
                const quiz = await Quiz.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { quizzes: quiz._id, } },
                    { new: true }
                );

                return quiz;
            }

            throw new AuthenticationError('Not logged in');

        },
        addQuizResult: async (parent, { quizId, quizResult }, context) => {
            if (context.user) {
                const updatedQuiz = await Quiz.findByIdAndUpdate(
                    { _id: quizId },
                    { $push: { quizResults: { quizTaken, quizResult, createdAt, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedQuiz;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
    }
}

module.exports = resolvers;
