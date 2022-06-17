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
        },
        feelingQuestion: {
            type: String,
        },
        nextQuestion: {
            type: String,
        },
        feelingRating: {
            type: String
        },
        helpfulRating: {
            type: String
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