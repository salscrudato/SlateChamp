class Bet365Tennis {
  constructor(id, gameTime, oddsArr, sport, homeTeam, awayTeam){
    this.id = id;
    this.source = 'bet365';
    var tempEpoch = parseInt(gameTime)*1000;
    var offset = -240;
    this.epoch = (tempEpoch + offset*60*1000);
    var humanDate = new Date(this.epoch);
    var months = {0:'Jan', 1:'Feb', 2:'Mar', 3:'Apr', 4:'May', 5:'Jun', 6:'Jul', 7:'Aug', 8:'Sep', 9:'Oct', 10:'Nov', 11:'Dec'};
    var month = months[humanDate.getMonth()];
    var day = humanDate.getDate();
    this.matchDate = month + " " + day;
    this.matchTime = this.constructor.formatAMPM(humanDate);
    this.sport = sport;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeTeamML = 0;
    this.awayTeamML = 0;
    this.over = 0;
    this.under = 0;

    if(oddsArr != undefined){
      for(var key in oddsArr.sp){
        if(key=='to_win_match'){
          if(this.homeTeam == oddsArr.sp[key][0].opp){
            this.homeTeamML = oddsArr.sp[key][0].odds;
          }
          if(this.homeTeam == oddsArr.sp[key][1].opp){
            this.homeTeamML = oddsArr.sp[key][1].odds;
          }
          if(this.awayTeam == oddsArr.sp[key][0].opp){
            this.awayTeamML = oddsArr.sp[key][0].odds;
          }
          if(this.awayTeam == oddsArr.sp[key][1].opp){
            this.awayTeamML = oddsArr.sp[key][1].odds;
          }
        }
        if(key=='total_games_2_way'){
          var tmpTotal = oddsArr.sp[key][0].opp.replace('Under ', '');
          tmpTotal = parseFloat(tmpTotal);
          if(tmpTotal > 0){
            this.under = {number: tmpTotal, odds: oddsArr.sp[key][0].odds}
            this.over = {number: tmpTotal, odds: oddsArr.sp[key][1].odds}
          }
        }
      }
    }

    this.homeTeamML = this.constructor.convertOdds(this.homeTeamML);
    this.awayTeamML = this.constructor.convertOdds(this.awayTeamML);
    if(this.over != 0){
      this.under.odds = this.constructor.convertOdds(this.under.odds);
      this.over.odds = this.constructor.convertOdds(this.over.odds);
    }

  }


  static convertOdds(odd){
    var tmpOdd;
    if(odd >= 2 && odd != 0){
      tmpOdd = Math.round((odd - 1)*100);
    }else{
      tmpOdd = Math.round((-100)/(odd-1));
    }
    if(tmpOdd > 0){
      return '+' + tmpOdd;
    } else {
      return tmpOdd;
    }
  }

  static formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

}

module.exports = Bet365Tennis;
