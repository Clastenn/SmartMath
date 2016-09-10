'use strict';

const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    difficulty: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    answer: {
        type: String,
        required: true
    },

    hints: [
        {
            type: String
        }
    ]
});

const Problem = mongoose.model('Problem', problemSchema);