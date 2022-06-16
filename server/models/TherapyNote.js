const mongoose = require('mongoose');

const { Schema } = mongoose;

const therapyNoteSchema = new Schema(
    {
        dateTaken: {
            type: Date,
            default: Date.now
        },
        doingQuestion: {
            type: String,
            // default: 'Since the last appointment, I have done the following:',
        },
        feelingQuestion: {
            type: String,
            // default: 'I am feeling: '
        },
        nextQuestion: {
            type: String,
            // default: 'Next, I want to do the following: ',
        },
        feelingRating: {
            type: Number
        },
        helpfulRating: {
            type: Number
        },
        notes: {
            type: String,
        }

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    });


const TherapyNote = mongoose.model('TherapyNote', therapyNoteSchema);

module.exports = TherapyNote;