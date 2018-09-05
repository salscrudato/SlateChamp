const express = require('express');
const router = express.Router();
const request = require('request');
const apicache = require('apicache');
const Action = require('../classes/action.js');

let cache = apicache.middleware;

//router.get('/all', cache('20 minutes'), function(req, res, next){
  router.get('/all', function(req, res, next){
  var headers = {
    //'x-api-key':'c3eeb8e5-339c-4c38-9cf5-9aa6255969e5'
    'x-api-key': process.env.JSON_API_KEY
  }
  console.log(headers);
  var actions = [];
  var options = {
    url: 'https://jsonodds.com/api/odds',
    method: 'GET',
    headers: headers
  }
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      for(var i = 0; i < data.length; i++){
        var action = new Action(
          data[i].ID,
          data[i].Details,
          data[i].MatchTime,
          data[i].Odds,
          data[i].HomeTeam,
          data[i].AwayTeam,
          data[i].HomePitcher,
          data[i].AwayPitcher,
          data[i].Sport,
          data[i].League
        );
        actions.push(action);
      }
      res.send(actions);
    } else {
      res.send({success:false, msg: 'Failed to get odds'});
    }
  });
});



module.exports = router;
