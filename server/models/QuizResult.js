const mongoose = require('mongoose');

const { Schema } = mongoose;
const quizNames = ['anxiety', 'depression', 'ptsd', 'schizophrenia', 'addiction']
const dateFormat = require('../utils/dateFormat')

//todo add validation to quizTaken/quizAnswer

const quizResultSchema = new Schema(
    {
        quizTaken: {
            type: String,
            required: true,
            // enum: quizNames
        },
        quizAnswer: {
            type: String,
            required: true,
            // enum: quizNames
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;
