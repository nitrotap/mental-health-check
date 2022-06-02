const { faker }  = require('@faker-js/faker');

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
]

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
]

// todo create seeds for QuizResults (quizTaken, quizAnswer), QuizSets (quizResults)
db.once('open', async () => {
    await User.deleteMany({});
    await QuizSet.deleteMany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 5; i += 1) {
        const email = faker.internet.email();
        const password = 'password123';

        userData.push({ email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);

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
    
    for (let i = 0; i < 10; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * Object.keys(createdUsers.insertedIds).length);
        const { _id: userId } = createdUsers.insertedIds[randomUserIndex];

        const createdResult = await QuizSet.create({});
        // console.log(createdResult._id)

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { quizzes: createdResult } },
            { new: true }
        );

        //quizzes taken, 1-5
        // const numberQuizzesTaken = (Math.floor(Math.random() * 5) + 1)
        // const nums = new Set();
        // while (nums.size !== numberQuizzesTaken) {
        //     nums.add(Math.floor(Math.random() * 5) + 1)
        // };
        // console.log(nums);

        // const updatedUser = await User.updateOne(
        // { _id: userId },
        // { $push: { Results: createdResult._id } }
        // );
    }


    console.log('all done! ', createdUsers);
    process.exit(0);
})
