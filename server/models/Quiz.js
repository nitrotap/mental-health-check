const mongoose = require('mongoose');
const QuizResult = require('./QuizResult');
const dateFormat = require('../utils/dateFormat')

const { Schema } = mongoose;

const quizSchema = new Schema({
    dateTaken: {
        type: Date,
        default: Date.now
    },
    timeTaken: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    // for each quiz taken, have a result
    // quizzes taken on this record
    quizResults: [QuizResult.schema]

});


const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;