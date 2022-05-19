const mongoose = require('mongoose');

const { Schema } = mongoose;
const quizNames = ['anxiety', 'depression', 'ptsd', 'schizophrenia', 'addiction']
const dateFormat = require('../utils/dateFormat')


const quizResultSchema = new Schema({
    quizTaken: {
        type: String,
        required: true,
        // enum: quizNames
    },
    quizResult: {
        type: String,
        required: true,
        // enum: quizNames
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
})

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;
