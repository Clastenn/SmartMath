'use strict';
const express = require('express');

const router = express.Router();
const database = require("../database.js");

module.exports = function (app) {
    app.use('/api', router);
    router.get("/skills",function(req,res){
    	database.getSkills((err, skills)=>{
    		if (err)return res.status(400).send(err);
    		res.send(skills);
    	});
    });
    router.get("/:skillName",function (req,res){
    	database.getProblem(req.params.skillName);
    })

};