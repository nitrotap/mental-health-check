const mongoose = require('mongoose');
const QuizResult = require('./QuizResult');
const dateFormat = require('../utils/dateFormat')

const { Schema } = mongoose;

const quizSetSchema = new Schema(
    {
        dateTaken: {
            type: Date,
            default: Date.now
        },
        // for each quiz taken, have a result
        // quizzes taken on this record
        quizResults: [QuizResult.schema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);


const QuizSet = mongoose.model('QuizSet', quizSetSchema);

module.exports = QuizSet;