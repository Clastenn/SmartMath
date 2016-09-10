'use strict';
const express = require('express');

const router = express.Router();
const database = require("../../database");

module.exports = function (app) {
    app.use('/api', router);

    router.get("/skills",function(req,res){
    	database.getSkills((err, skills)=>{
    		if (err)return res.status(400).send(err);
    		res.send(skills);
    	});
    });
    router.get("/skill/:skillName",function (req,res){
    	console.log(req.params.skillName);
    	database.getProblem(req.params.skillName)
    		.then(problem=>res.send(problem))
    		.catch(err=>res.status(400).send(err));
    })
    //router.get("")

};