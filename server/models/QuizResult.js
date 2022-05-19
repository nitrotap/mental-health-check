const mongoose = require('mongoose');

const { Schema } = mongoose;
const quizNames = ['anxiety', 'depression', 'ptsd', 'schizophrenia', 'addiction']


const quizResultSchema = new Schema({
    quizTaken: {
        type: String,
        required: true,
        enum: quizNames
    },
    quizResult: {
        type: String,
        required: true,
        enum: quizNames
    }
})

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;
