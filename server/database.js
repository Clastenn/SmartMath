const mongoose = require("mongoose");
const User = mongoose.model("User");
const Problem = mongoose.model("Problem");
export function getSkills(callback){
	User.find({name:"Anton"})
		.select("skills -skills.solvedProblems")
		.exec((err,user)=>{
			if (err)return callback(err);
			if (!user) return callback("no user");
			return callback(null,user.skills);
		});
}
export function getProblem(skill){
	return new Promise((resolve,reject)=>{
		User.find({name:"Anton"})
			.select("skills")
			.exec((err,user)=>{
				if (err)reject(err);
				if (!user)reject("no user");
				Problem.find({category:skill, _id:{"$nin":user.solvedProblems}})
				.exec((err,problems)=>{
					if (err)reject(err);
					if (problems.length === 0)reject("everyting solved");
					
				});
			});
	});
}