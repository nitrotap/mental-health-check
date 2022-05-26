const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User } = require('../models');

// todo create seeds for QuizResults (quizTaken, quizAnswer), QuizSets (quizResults)
db.once('open', async () => {
    await User.deleteMany({});

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




    console.log('all done!');
    process.exit(0);
})
