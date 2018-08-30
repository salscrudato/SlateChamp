const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Bet schema
const BetSchema = mongoose.Schema({
  source: {
    type: String
  },
  details: {
    type: String
  },
  odds: {
    type: Number
  },
  sport: {
    type: String
  },
  type: {
    type: String
  },
  expired: Boolean
});

const CustomBet = module.exports = mongoose.model('CustomBet', BetSchema);

module.exports.createBet = function(customBet, callback){
  customBet.save(callback);
}

module.exports.expireBet = function(betId, callback){
	const updatedStatus = {expired: true};
	CustomBet.findByIdAndUpdate(betId, updatedStatus, callback);
}
