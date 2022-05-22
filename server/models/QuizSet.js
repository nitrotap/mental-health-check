const mongoose = require('mongoose');
const QuizResult = require('./QuizResult');
const dateFormat = require('../utils/dateFormat')

const { Schema } = mongoose;

const quizSetSchema = new Schema({
    dateTaken: {
        type: Date,
        default: Date.now
    },
    //todo add working timestamp
    // for each quiz taken, have a result
    // quizzes taken on this record
    quizResults: [QuizResult.schema]
});


const QuizSet = mongoose.model('QuizSet', quizSetSchema);

module.exports = QuizSet;