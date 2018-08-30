import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  bet:any = [];
  profile:any;
  type:string;
  sport:number;
  league:number;
  jsonOddsEvents = [];
  teaserNum:number;
  propSport:string;
  propBet:any;

  constructor() { }

  addSport(sport){
    this.sport = sport;
  }

  addPropSport(sport){
    this.propSport = sport;
  }

  addCustomBet(bet){
    this.type = bet.type;
    this.propBet = bet;
  }

  getPropBet(){
    return this.propBet;
  }

  getPropSport(){
    var tmp = this.propSport
    this.propSport = null;
    return tmp;
  }

  getSports(){
    var tempSport = this.sport;
    this.sport = null;
    return tempSport;
  }

  setLeague(league){
    this.league = league;
  }

  getLeague(){
    var tempLeague = this.league;
    this.league = null;
    return tempLeague;
  }

  setTeaser(teaser){
    this.teaserNum = teaser;
  }

  getTeaser(){
    return this.teaserNum;
  }

  setJsonOddsEvents(events){
    this.jsonOddsEvents = events;
  }

  getJsonOddsEvents(){
    return this.jsonOddsEvents;
  }

  addStraightBet(bet, profile, type){
    this.bet.push(bet);
    this.profile = profile;
    this.type = type;
  }

  addMultipleBet(bet, profile, type){
    for(var i = 0; i < bet.length; i++){
      this.bet.push(bet[i]);
    }
    this.profile = profile;
    this.type = type;
  }

  getBet(){
    var tempBet = this.bet;
    this.bet = [];
    return tempBet;
  }

  getProfile(){
    return this.profile;
  }

  getBetType(){
    var tempBetType = this.type;
    this.type = null;
    return tempBetType;
  }

  // sortBets(unsorted){
  //   for(var i = 0; i < unsorted.length; i++){
  //     var year = unsorted[i].gameDate.substr(0,3);
  //     var month = unsorted[i].gameDate.substr(0,3);
  //     var day = unsorted[i].gameDate.substr(0,3);
  //   }
  // }

  sortBets(bets){
    if(bets == undefined || bets.length == undefined){
      return bets;
    }
    if(bets.length == 1){
      return bets;
    } else {
      for(var i = 0; i < bets.length; i++){
        for(var j = 0; j < bets.length - 1 - i; j++){
          if(bets[j].subBets[0].epoch < bets[j+1].subBets[0].epoch){
            var tmpBet = bets[j];
            bets[j] = bets[j+1];
            bets[j+1] = tmpBet;
          }
        }
      }
      return bets;
    }
  }

  sortBetsReverse(bets){
    if(bets.length == 1){
      return bets;
    } else {
      for(var i = 0; i < bets.length; i++){
        for(var j = 0; j < bets.length - 1 - i; j++){
          if(bets[j].subBets[0].epoch > bets[j+1].subBets[0].epoch){
            var tmpBet = bets[j];
            bets[j] = bets[j+1];
            bets[j+1] = tmpBet;
          }
        }
      }
      return bets;
    }
  }


}
