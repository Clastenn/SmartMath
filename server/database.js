'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');
const Problem = mongoose.model('Problem');

exports.getSkills = callback => {
    User.findOne({name: 'Anton'})
        .select('-name -skills.solvedProblems')
        .exec((err, user)=> {
            if (err)return callback(err);
            if (!user) return callback({message: 'no user'});
            return callback(null, user.skills);
        });
};

exports.getProblem = skill =>
    new Promise((resolve, reject)=>
        getFullUser('Anton', skill)
            .then(getUnsolvedProblems)
            .then(resolve)
            .catch(reject)
    );


function getFullUser(name, skill) {
    return new Promise((resolve, reject)=> {
        console.log(skill);
        User.findOne({name: name})
            .select('skills')
            .exec((err, user)=> {
                console.log('error4', err);
                if (err)reject(err);
                if (!user)reject('no user');
                resolve({user, skill});
            });
    });
}

function getUnsolvedProblems(props) {
    var user = props.user;
    var skill = props.skill;
    return new Promise((resolve, reject)=> {
        console.log('one', user, skill);
        Problem.aggregate([
                {$match: {category: skill, _id: {'$nin': [user.solvedProblems]}}},
                {$project: {diff: {$subtract: ['$difficulty', user.skills.progress]}}},
                {$sort: {diff: 1}},
                {$limit: 1}
            ], (err, problems) => {
                console.log('Closest Problem ');
                console.log(problems);
                if (err)reject(err);
                if (problems == undefined || problems.length === 0)reject({message: 'nothing to solve'});
                resolve(problems);
            }
        );
    });
}