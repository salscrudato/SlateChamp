const express = require('express');
const router = express.Router();
const Bet = require('../models/bet');
const CustomBet = require('../models/customBet');
const PropBet = require('../models/propBet');
const config = require('../config/database');
const request = require('request');

var getAllOddsIds = function(callback){
	var headers = {
		'x-api-key':'c3eeb8e5-339c-4c38-9cf5-9aa6255969e5'
	}
	var tempActionIds = [];
	var options = {
		url: 'https://jsonodds.com/api/odds',
		method: 'GET',
		headers: headers
	}
	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			for(var i = 0; i < data.length; i++){
				tempActionIds.push(data[i].ID);
			}
			callback(tempActionIds);
		} else {
			callback({success: false});
		}
	});
}

router.post('/placeBet', function(req, res, next){

	let bet = new Bet({
		userId: req.body.userId,
		username: req.body.username,
		oddsId: req.body.oddsId,
		source: req.body.source,
		description: req.body.description,
		odds: req.body.odds,
		betAmount: req.body.betAmount,
		betType: req.body.betType,
		winAmount: req.body.winAmount,
		status: 'open',
		epoch: req.body.epoch,
		gameDate: req.body.gameDate,
		gameTime: req.body.gameTime,
		subBets: req.body.subBets
	});

	if(bet.source=='jsonOdds'){
		var containsExpiredBet = false;
		getAllOddsIds(function(oddsIds){
			for(var i = 0; i < bet.subBets.length; i++){
				if (oddsIds.length != undefined || oddsIds.length != 0){
					if(oddsIds.indexOf(bet.subBets[i].id) < 0){
						containsExpiredBet = true;
					}
				}
			}
			if(!containsExpiredBet){
				Bet.placeBet(bet, function(err, placedBet){
					if(err){
						res.json({success: false, msg: 'Failed to place bet'});
					} else {
						res.json({success: true, msg: 'Bet placed'});
					}
				});
			} else {
				res.json({success: false, msg: 'One or more bets are expired'});
			}
		});
	} else if(bet.source=='bet365'){
		Bet.placeBet(bet, function(err, placedBet){
			if(err){
				res.json({success: false, msg: 'Failed to place bet'});
			} else {
				res.json({success: true, msg: 'Bet placed'});
			}
		});
	}
});


router.get('/getBets', function(req, res, next){
	const userId = req.query.userId;
	const status = req.query.status;
	if(status=='all'){
		var query = {userId: userId};
	} else {
		var query = {userId: userId, status: status};
	}
	Bet.find(query, function(err, bet) {
		if(err){
			res.json({sucess:false, msg: 'Could not retrieve bets'});
		} else {
			var bets = [];
			bet.forEach(function(oneBet){
				bets.push(oneBet);
			});
			res.send(bets);
		}
	});
});

router.post('/closePending', function(req, res, next){
	const betId = req.body.betId;
	const status = req.body.status;
	Bet.closeBet(betId, status, function(err, bet) {
		if(err){
			res.json({sucess:false, msg: 'Failed to close bet'});
		} else {
			res.json({sucess:true, msg: 'Bet successfully closed'});
		}
	});
});

router.get('/getAllPendings', function(req, res, next){
	var query = {status: 'open'};
	Bet.find(query, function(err, bet) {
		if(err){
			res.json({success:false, msg: 'Could not retrieve all bets'});
		} else {
			var pendingBets = [];
			bet.forEach(function(oneBet) {
				pendingBets.push(oneBet);
			});
			res.send(pendingBets);
		}
	});
});

router.post('/createCustom', function(req, res, next){
	let newBet = new CustomBet({
		source: 'custom',
		details: req.body.details,
		odds: req.body.odds,
		sport: req.body.sport,
		type: req.body.type,
		expired: false
	});

	CustomBet.createBet(newBet, function(err,user){
		if(err){
			res.json({success: false, msg: 'Failed to create bet'});
		} else {
			res.json({success: true, msg: 'Created'});
		}
	});
});

router.get('/allCustomBets', function(req, res){
	CustomBet.find(function(err, bet) {
		var betMap = [];
		bet.forEach(function(oneBet) {
			betMap.push(oneBet);
		});
		res.send(betMap);
	});
});


router.post('/placePropBet', function(req, res, next){

	let propBet = new PropBet({
		userId: req.body.userId,
		username: req.body.username,
		description: req.body.description,
		odds: req.body.odds,
		betAmount: req.body.betAmount,
		winAmount: req.body.winAmount,
		status: 'open'
	});

		PropBet.placeBet(propBet, function(err, placedBet){
			if(err){
				res.json({success: false, msg: 'Failed to place bet'});
			} else {
				res.json({success: true, msg: 'Bet placed'});
			}
		});
});

router.get('/getPropBets', function(req, res, next){
	const userId = req.query.userId;
	const status = req.query.status;
	if(status=='all'){
		var query = {userId: userId};
	} else {
		var query = {userId: userId, status: status};
	}
	PropBet.find(query, function(err, bet) {
		if(err){
			res.json({sucess:false, msg: 'Could not retrieve bets'});
		} else {
			var bets = [];
			bet.forEach(function(oneBet){
				bets.push(oneBet);
			});
			res.send(bets);
		}
	});
});

router.post('/closeCustomBet', function(req, res, next){
		CustomBet.expireBet(req.body._id, function(err, placedBet){
			if(err){
				res.json({success: false, msg: 'Failed to remove'});
			} else {
				res.json({success: true, msg: 'Bet removed'});
			}
		});
});

module.exports = router;
