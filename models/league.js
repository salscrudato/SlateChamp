const mongoose = require('mongoose');
const config = require('../config/database');

//===== League model =====
//TODO - cleanup
//A league should have the following attributes: Name (or description), Sport (Baseball, Football, etc so we know what games to let you bet on)
//A start time and end time (games can only be wagered on within the start and end time, all bets must be made before the start time)
//A buyin amount
//An array of users that have joined
//A Status (open to join, closed to join)
//A credit that all users will have
//===== Can we think of anything else? =====
const LeagueSchema = mongoose.Schema({
  description:{
    type: String,
    required: true
  },
  sport: {
    type: Number,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  buyin: {
    type: Number,
    required: true
  },
  participants: {
    type: Array,
    default: []
  },
  status: {
    type: String
  }
});

const League = module.exports = mongoose.model('League', LeagueSchema);

//===== League Methods =====
//TODO - Clean up
//Need to be able to create a league
//Need to be able to expire a league
//Need to be able to add users to a league

module.exports.createLeague = function(league, callback){
  league.save(callback);
}

module.exports.closeLeague = function(leagueId, callback){
	const updatedStatus = {status: 'closed'};
	League.findByIdAndUpdate(leagueId, updatedStatus, callback);
}

module.exports.addParticipant = function(leagueId, user, callback){
  League.findById(leagueId, function(err, league){
    league.participants.push(user);
    league.save(callback);
  });
}
