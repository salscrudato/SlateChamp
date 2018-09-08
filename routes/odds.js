const express = require('express');
const router = express.Router();
const request = require('request');
const apicache = require('apicache');
let cache = apicache.middleware;
const JsonOdds = require('../classes/JsonOdds.js');


//The 'all' endpoint retrieves all odds from JSONOdds
//This was done because only a limited number of calls can be made per month, and caching is added to reduce the overall number of hits
//The body returns several nodes, with each node corresponding to one game
//Each game is made into a JsonOdds object to ensure the responses to the front end are uniform
router.get('/all', cache('20 minutes'), function(req, res, next){
  const headers = {
    'x-api-key': process.env.JSON_API_KEY || 'c3eeb8e5-339c-4c38-9cf5-9aa6255969e5'
  }
  const options = {
    url: 'https://jsonodds.com/api/odds',
    method: 'GET',
    headers: headers
  }
  request(options, function(error, response, body){
    if(!error && response.statusCode == 200){
      const data = JSON.parse(body);
      let jsonOdds = [];
      var i;
      for(i = 0; i < data.length; i++){
        let jsonOdd = new JsonOdds(
          data[i].ID,
          data[i].HomeTeam,
          data[i].AwayTeam,
          data[i].Sport,
          data[i].MatchTime,
          data[i].HomePitcher,
          data[i].AwayPitcher,
          data[i].Odds
        );
        jsonOdds.push(jsonOdd);
      }
      res.send(jsonOdds);
    } else {
      res.send({success: false, msg: 'Failed to retrieve odds data.'});
    }
  });
});

module.exports = router;
