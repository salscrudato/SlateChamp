const express = require('express');
const router = express.Router();
const request = require('request');
const apicache = require('apicache');
const Action = require('../classes/action.js');
const Bet365Upcoming = require('../classes/Bet365Upcoming.js');
const Bet365Live = require('../classes/Bet365Live.js');
const Bet365LiveFootball = require('../classes/Bet365LiveFootball.js');
const Bet365Soccer = require('../classes/Bet365Soccer.js');
const Bet365Football = require('../classes/Bet365Football.js');
const Bet365Tennis = require('../classes/Bet365Tennis.js');

var bet365Calls = 0;

let cache = apicache.middleware;

router.get('/all', cache('20 minutes'), function(req, res, next){
  //router.get('/all', function(req, res, next){
  var headers = {
    'x-api-key':'c3eeb8e5-339c-4c38-9cf5-9aa6255969e5'
  }
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

//Live Events
router.get('/events', cache(60000), function(req, res, next){
  var sportId = req.query.sportId;
  var leagueId = req.query.leagueId;
  if(leagueId == 0){
    leagueId = '';
  }
  var apiKey = '11194-fFJWf4UUW1tZhK';
  var eventsUrl = 'https://api.betsapi.com/v1/bet365/inplay_filter?token='
  + apiKey + '&sport_id=' + sportId + '&league_id=' + leagueId;
  var options = {
    url:eventsUrl,
    method: 'GET'
  }
  var tempEventsArray = [];
  request(options, function (error, response, body) {
    bet365Calls = bet365Calls + 1;
    console.log('==========Bet 365========== Getting Live Events: ' + bet365Calls);
    if (!error && response.statusCode == 200) {
      var events = JSON.parse(body);
      if(events != undefined && events.results != undefined){
        for(var i = 0; i < events.results.length; i++){

          if(sportId!=1){
            tempEventsArray.push({
              id: events.results[i].id,
              time: events.results[i].time,
              homeTeam: events.results[i].away.name,
              homeTeamImage: events.results[i].away.image_id,
              awayTeam: events.results[i].home.name,
              awayTeamImage: events.results[i].home.image_id,
              epoch: events.results[i].time,
              sport: sportId,
              league: parseInt(events.results[i].league.id)
            });
          } else{
            tempEventsArray.push({
              id: events.results[i].id,
              time: events.results[i].time,
              homeTeam: events.results[i].home.name,
              homeTeamImage: events.results[i].home.image_id,
              awayTeam: events.results[i].away.name,
              awayTeamImage: events.results[i].away.image_id,
              epoch: events.results[i].time,
              sport: sportId,
              league: parseInt(events.results[i].league.id)
            });
          }

        }
      }
      res.send(tempEventsArray);
    } else {
      res.send({success:false, msg:'Failed to get events'});
    }
  });
});

//Live Odds by Event
router.get('/eventOdds', cache(2000), function(req, res, next){
  var eventId = req.query.eventId;
  var homeTeam = req.query.homeTeam;
  var homeTeamImage = req.query.homeTeamImage;
  var awayTeam = req.query.awayTeam;
  var awayTeamImage = req.query.awayTeamImage;
  var sportId = req.query.sportId;
  var epoch = req.query.epoch;
  var apiKey = '11194-fFJWf4UUW1tZhK';
  var oddsUrl = 'https://api.betsapi.com/v1/bet365/event?token=' + apiKey + '&FI=' + eventId;
  var oddsOptions = {
    url: oddsUrl,
    method: 'GET'
  }
  request(oddsOptions, function (error, response, body){
    bet365Calls = bet365Calls + 1;
    console.log('==========Bet 365 Live Odds==========' + bet365Calls);
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      if(data != undefined && data.results != undefined){
        var oddsArr = data.results[0];
        if(sportId==16 || sportId==1){
          var liveEventOdds = new Bet365Live(eventId, homeTeam, awayTeam, oddsArr, sportId, epoch);
        } else if (sportId==12){
          var liveEventOdds = new Bet365LiveFootball(eventId, homeTeam, awayTeam, oddsArr, sportId, epoch);
        }
      }
      res.send(liveEventOdds);
    }
  });
});

//Upcoming Events
router.get('/upcomingEvents', cache(60000), function(req, res, next){
  var sportId = req.query.sportId;
  var leagueId = req.query.leagueId;
  var apiKey = '11194-fFJWf4UUW1tZhK';
  var eventsUrl = 'https://api.betsapi.com/v1/bet365/upcoming?token='
  + apiKey + '&sport_id=' + sportId + '&league_id=' + leagueId;
  var options = {
    url:eventsUrl,
    method: 'GET'
  }
  var tempEventsArray = [];
  request(options, function (error, response, body) {
    bet365Calls = bet365Calls + 1;
    console.log('==========Bet 365 Getting Upcoming Events: ' + bet365Calls);
    if (!error && response.statusCode == 200) {
      var events = JSON.parse(body);
      if(events.results != undefined){
        for(var i = 0; i < events.results.length; i++){
          tempEventsArray.push({
            id: events.results[i].id,
            league: events.results[i].league.name,
            leagueId: events.results[i].league.id,
            time: events.results[i].time,
            homeTeam: events.results[i].away.name,
            homeTeamImage: events.results[i].home.image_id,
            awayTeam: events.results[i].home.name,
            awayTeamImage: events.results[i].away.image_id,
            sport: sportId
          });
        }
        res.send(tempEventsArray);
      }
    } else {
      res.send({success:false, msg:'Failed to get events'});
    }
  });
});

//Get all upcoming leagues (Tennis)
router.get('/upcomingTennisLeagues', cache('59 minutes'), function(req, res, next){
  var sportId = 13;
  var apiKey = '11194-fFJWf4UUW1tZhK';
  var baseUrl = 'https://api.betsapi.com/v1/bet365/upcoming?token='
  + apiKey + '&sport_id=' + sportId;
  var options = {
    url:baseUrl,
    method: 'GET'
  }

  getNumberOfEvents(options, function(numEvents){
    var leagueArray = [];
    numCalls = 0;
    if(numEvents != false){
      for(var i = 1; i < numEvents + 1; i++){
        getLeagues(i, function(leagues){
          numCalls = numCalls + 1;
          for (var i = 0; i < leagues.length; i++){
            if(leagueArray.indexOf(leagues[i]) < 0){
              leagueArray.push(leagues[i]);
            }
          }
          if(numCalls == numEvents){
            res.send(leagueArray);
          }
        });
      }
    } else {
      res.send({results: 'none'})
    }
  });

});

var getLeagues = function(page, callback){
  var sportId = 13;
  var apiKey = '11194-fFJWf4UUW1tZhK';
  var baseUrl = 'https://api.betsapi.com/v1/bet365/upcoming?token='
  + apiKey + '&sport_id=' + sportId + '&page=' + page;
  var options = {
    url:baseUrl,
    method: 'GET'
  }
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var tmpLeagues = [];
      var events = JSON.parse(body);
      if(events.results.length>0){
        for(var i = 0; i < events.results.length; i++){
          var id = events.results[i].league.id;
          var leagueName = events.results[i].league.name;
          tmpLeagues.push(id + '/' + leagueName);
        }
        callback(tmpLeagues);
      }
    } else {
      //need else here
    }
  });
}

var getNumberOfEvents = function(options, callback){
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var events = JSON.parse(body);
      if(events.pager.total != undefined){
        var numCalls = Math.round(parseFloat(events.pager.total)/50);
        callback(numCalls);
      }
    } else {
      callback(false);
    }
  });
}

//Upcoming Odds by Event
//Add cache back in
router.get('/upcomingEventOdds', cache('5 minutes'), function(req, res, next){
  var eventId = req.query.eventId;
  var homeTeam = req.query.homeTeam;
  var awayTeam = req.query.awayTeam;
  var gameTime = req.query.gameTime;
  var sport = req.query.sport;
  var apiKey = '11194-fFJWf4UUW1tZhK';
  var oddsUrl = 'https://api.betsapi.com/v1/bet365/start_sp?token=' + apiKey + '&FI=' + eventId;
  var oddsOptions = {
    url: oddsUrl,
    method: 'GET'
  }
  request(oddsOptions, function (error, response, body){
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      if(data.results != undefined && data.success){
        bet365Calls = bet365Calls + 1;
        console.log('==========Bet 365 Getting Odds for upcoming: ' + bet365Calls);
        var oddsArr = data.results[0].main;
        if(sport==16){
          var eventOdds = new Bet365Upcoming(eventId, gameTime, oddsArr, sport, homeTeam, awayTeam);
        } else if(sport==1){
          var eventOdds = new Bet365Soccer(eventId, gameTime, oddsArr, sport, homeTeam, awayTeam);
        } else if(sport==12){
          var eventOdds = new Bet365Football(eventId, gameTime, oddsArr, sport, homeTeam, awayTeam);
        } else if(sport==13){
          var eventOdds = new Bet365Tennis(eventId, gameTime, oddsArr, sport, homeTeam, awayTeam);
        }
      } else {
        var oddsArr = undefined;
      }
      res.send(eventOdds);
    } else {
      res.send({success:false, msg:'Failed to get odds'});
    }
  });
});

module.exports = router;
