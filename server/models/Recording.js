const mongoose = require('mongoose');

const { Schema } = mongoose;

const recordingSchema = new Schema(
    {
        dateTaken: {
            type: Date,
            default: Date.now
        },
        // for each quiz taken, have a result
        // quizzes taken on this record
        audio: {
            type: String,
            required: true
        },
        title: {
            type: String,
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    });


const Recording = mongoose.model('Recording', recordingSchema);

module.exports = Recording;