const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//===== User Model =====
//
const UserSchema = mongoose.Schema({
	name: {
		type: String
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	credit: {
		type: Number
	},
	currentBalance:{
		type: Number
	},
	playerPoints:{
		type: Number
	},
	league: {
		type: Array,
		default: []
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
	const query = {username: username}
	User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(newUser.password, salt, function(err, hash){
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch){
		if(err) throw err;
		callback(null, isMatch);
	});
}

module.exports.updateBalance = function(userId, amount, callback){
	const updatedBalance = {currentBalance: amount};
	User.findByIdAndUpdate(userId, updatedBalance, callback);
}

module.exports.updateLeague = function(userId, league, callback){
	const updatedLeague = {league: league};
	User.findByIdAndUpdate(userId, updatedLeague, callback);
}
