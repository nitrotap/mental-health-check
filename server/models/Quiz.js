const mongoose = require('mongoose');

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
    // for each quiz taken, have a result
    // quizzes taken on this record
    quizResults: [
        {
            type: Schema.Types.ObjectId,
            ref: 'QuizResult'
        }
    ]

});


const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;