const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

router.post('/register', function(req, res, next){
	let newUser = new User({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password,
		credit: req.body.credit,
		currentBalance: 0,
		playerPoints: 0
	});

	User.addUser(newUser, function(err,user){
		if(err){
			res.json({success: false, msg: 'Failed to register user'});
		} else {
			res.json({success: true, msg: 'User registered'});
		}
	});
});

router.post('/updateBalance', function(req, res, next){
	const userId = req.body.userId;
	const amount = req.body.amount;
	User.getUserById(userId, function(err, user){
		const curBal = user.currentBalance;
		const newBal = curBal + amount;
		User.updateBalance(userId, newBal, function(err, user){
			res.json({success: true, msg: 'Balance Updated'});
		});
	});
});

router.post('/updateLeague', function(req, res, next){
	const userId = req.body.userId;
	const leagueId = req.body.league;
	const leagueName = req.body.leagueName;
	const leagueSport = req.body.leagueSport;
	let league = {
		id: leagueId,
		name: leagueName,
		sport: leagueSport
	}
	User.updateLeague(userId, league, function(err, user){
		if(err){
			res.send({success:false});
		} else {
			res.send({success:true});
		}
	})
});

router.post('/authenticate', function(req, res, next){
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, function(err, user){
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}
		User.comparePassword(password, user.password, function(err, isMatch){
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign({data: user}, config.secret, {
					expiresIn: 604800
				});
				res.json({
					success: true,
					token: 'JWT '+token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}
				});
			} else {
				return res.json({success: false, msg: 'Wrong Password'});
			}
		});
	});
});

router.get('/profile', passport.authenticate('jwt', {session:false}), function(req, res, next){
	res.json({user: req.user});
});

router.get('/allProfiles', function(req, res){
	User.find(function(err, user) {
    	var userMap = [];
    	user.forEach(function(oneUser) {
      		userMap.push(oneUser);
    	});
    	res.send(userMap);
  });
});

module.exports = router;
