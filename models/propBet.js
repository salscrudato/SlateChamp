const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Bet schema
const BetSchema = mongoose.Schema({
  userId : {
    type: String
  },
  username: {
    type: String
  },
  description: {
    type: String
  },
  odds: {
    type: Number
  },
  betAmount: {
    type: Number
  },
  winAmount: {
    type: Number
  },
  status: {
    type: String
  }
});

const PropBet = module.exports = mongoose.model('PropBet', BetSchema);

module.exports.placeBet = function(bet, callback){
  bet.save(callback);
}
