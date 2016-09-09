'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    solvedProblems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Problem'
        }
    ]

});

const User = mongoose.model('User', userSchema);