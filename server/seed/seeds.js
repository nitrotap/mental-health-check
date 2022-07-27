const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User, QuizResult, QuizSet } = require('../models');

const possibleNegatives = [
    {
        quizTaken: 'depression',
        quizAnswer: 'negative for depression'
    },
    {
        quizTaken: 'anxiety',
        quizAnswer: 'negative for anxiety'
    },
    {
        quizTaken: 'ptsd',
        quizAnswer: 'negative for ptsd'
    },
    {
        quizTaken: 'schizophrenia',
        quizAnswer: 'negative for schizophrenia'
    },
    {
        quizTaken: 'addiction',
        quizAnswer: 'negative for addiction'
    },
];

const possiblePositives = [
    {
        quizTaken: 'depression',
        quizAnswer: 'positive for depression'
    },
    {
        quizTaken: 'anxiety',
        quizAnswer: 'positive for anxiety'
    },
    {
        quizTaken: 'ptsd',
        quizAnswer: 'positive for ptsd'
    },
    {
        quizTaken: 'schizophrenia',
        quizAnswer: 'positive for schizophrenia'
    },
    {
        quizTaken: 'addiction',
        quizAnswer: 'positive for addiction'
    },
];

// todo create seeds for QuizResults (quizTaken, quizAnswer), QuizSets (quizResults)
db.once('open', async () => {
    await User.deleteMany({});
    await QuizSet.deleteMany({});

    // create user data
    const createdUsers = []
    for (let i = 0; i < 5; i += 1) {
        const email = faker.internet.email().toLowerCase();
        const password = 'password123';

        const userData = await User.create({ email, password });
        createdUsers.push(userData);
    }

    // create user QuizSet

    // populate QuizSet with multiple QuizResults

    // const updatedUser = await User.findOneAndUpdate(
    //     { _id: context.user._id },
    //     { $addToSet: { quizzes: quizSet } },
    //     { new: true }

    // )

    // const { data } = await addQuizResult({
    //     variables: {
    //         quizSetId: currentQuizSetId,
    //         quizTaken: currentQuizName,
    //         quizAnswer: currentQuizResult
    //     }

    // const updatedQuizSet = await QuizSet.findOneAndUpdate(
    //    { _id: quizSetId },
    //    { $push: { quizResults: { quizTaken, quizAnswer } } },
    //    { new: true }
    // );

    // create results

    for (let i = 0; i < 20; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
        const { _id: userId } = createdUsers[randomUserIndex]._id;
        const createdResult = await QuizSet.create({});

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { quizzes: createdResult } },
            { new: true }
        );

        //quizzes taken, 1-5
        const numberQuizzesTaken = Math.floor(Math.random() * 4) + 1;
        const nums = new Set();
        while (nums.size !== numberQuizzesTaken) {
            nums.add(Math.floor(Math.random() * 4) + 1);
        };

        for (index of nums) {
            const categorySelector = Math.floor(Math.random() * 2) + 1;
            let category;
            if (categorySelector === 1) {
                category = possiblePositives
            } else if (categorySelector === 2) {
                category = possibleNegatives
            };
            const quizTaken = category[index].quizTaken;
            const quizAnswer = category[index].quizAnswer;
            const updatedQuizSet = await QuizSet.findOneAndUpdate(
                { _id: createdResult },
                { $push: { quizResults: { quizTaken, quizAnswer } } },
                { new: true }
            );
        };

        // const updatedUser = await User.updateOne(
        // { _id: userId },
        // { $push: { Results: createdResult._id } }
        // );
    };


    console.log('Database Seeded!');
    process.exit(0);
})
