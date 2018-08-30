const express = require('express');
const router = express.Router();
const League = require('../models/league');
const config = require('../config/database');

router.post('/create', function(req, res, next){
	let newLeague = new League({
		name: req.body.name,
		sport: req.body.sport,
		date: req.body.date,
		buyin: req.body.buyin,
		status: 'open'
	});
	League.createLeague(newLeague, function(err, league){
		if(!err){
			res.send({sucess:true});
		}
	});
});

router.post('/close', function(req, res, next){
		League.closeLeague(req.body._id, function(err, league){
			if(err){
				res.json({success: false});
			} else {
				res.json({success: true});
			}
		});
});

router.get('/getAll', function(req, res){
	League.find(function(err, league) {
    	var leagueArray = [];
    	league.forEach(function(oneLeague) {
      		leagueArray.push(oneLeague);
    	});
    	res.send(leagueArray);
  });
});

router.post('/addParticipant', function(req, res, next){
		League.addParticipant(req.body.id, req.body.user, function(err, league){
			if(err){
				res.json({success: false});
			} else {
				res.json({success: true});
			}
		});
});

module.exports = router;
