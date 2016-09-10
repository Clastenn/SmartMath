'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skills:[{
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category'
        },
        solvedProblems: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Problem'
        }],
        velocity: {
            type: Number,
            default: 3
        },
        progress:{
            type:Number,
            min:0,
            max:10,
            default:0
        }
    }]
   
});

const User = mongoose.model('User', userSchema);