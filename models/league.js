const mongoose = require('mongoose');
const config = require('../config/database');

//Bet schema
const BetSchema = mongoose.Schema({
  name: {
    type: String
  },
  sport: {
    type: Number
  },
  date: {
    type: Date
  },
  buyin: {
    type: Number
  },
  participants: {
    type: Array,
    default: []
  },
  status: {
    type: String
  }
});

const League = module.exports = mongoose.model('League', BetSchema);

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
