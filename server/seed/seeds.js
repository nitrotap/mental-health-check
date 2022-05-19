const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User } = require('../models');


db.once('open', async () => {
    await User.deleteMany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);




    console.log('all done!');
    process.exit(0);
})
