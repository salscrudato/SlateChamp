class Bet365Football {
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
    this.homeTeamFirstHalf = 0;
    this.awayTeamFirstHalf = 0;
    this.firstHalfOver = 0;
    this.firstHalfOverOdds = 0;
    this.firstHalfUnder = 0;
    this.firstHalfUnderOdds = 0;
    this.homeTeamRLOddsFirstHalf = 0;
    this.homeTeamRLFirstHalf = 0;
    this.awayTeamRLOddsFirstHalf = 0;
    this.awayTeamRLFirstHalf = 0;

    if(oddsArr != undefined){
      for(var key in oddsArr.sp){
        if(key=='1st_half_money_line_2_way'){
          this.awayTeamFirstHalf = this.constructor.convertOdds(oddsArr.sp[key][0].odds);
          this.homeTeamFirstHalf = this.constructor.convertOdds(oddsArr.sp[key][1].odds);
        }
        if(key=='1st_half_point_spread_2_way'){
          this.awayTeamRLOddsFirstHalf = this.constructor.convertOdds(oddsArr.sp[key][0].odds);
          this.homeTeamRLOddsFirstHalf = this.constructor.convertOdds(oddsArr.sp[key][1].odds);
          this.awayTeamRLFirstHalf = oddsArr.sp[key][0].opp.replace(this.awayTeam + ' ','');
          this.homeTeamRLFirstHalf = oddsArr.sp[key][1].opp.replace(this.homeTeam + ' ','');
        }
        if(key=='1st_half_total_2_way'){
          this.firstHalfOverOdds = this.constructor.convertOdds(oddsArr.sp[key][0].odds);
          this.firstHalfUnderOdds = this.constructor.convertOdds(oddsArr.sp[key][1].odds);
          this.firstHalfOver = oddsArr.sp[key][0].opp.replace('Over ','');
          this.firstHalfUnder = oddsArr.sp[key][1].opp.replace('Under ','');
        }
      }
    }

    this.homeTeamFirstHalf = this.constructor.addPlus(this.homeTeamFirstHalf);
    this.awayTeamFirstHalf = this.constructor.addPlus(this.awayTeamFirstHalf);
    this.firstHalfOver = this.constructor.addPlus(this.firstHalfOver);
    this.firstHalfOverOdds = this.constructor.addPlus(this.firstHalfOverOdds);
    this.firstHalfUnder = this.constructor.addPlus(this.firstHalfUnder);
    this.firstHalfUnderOdds = this.constructor.addPlus(this.firstHalfUnderOdds);
    this.homeTeamRLOddsFirstHalf = this.constructor.addPlus(this.homeTeamRLOddsFirstHalf);
    this.homeTeamRLFirstHalf = this.constructor.addPlus(this.homeTeamRLFirstHalf);
    this.awayTeamRLOddsFirstHalf = this.constructor.addPlus(this.awayTeamRLOddsFirstHalf);
    this.awayTeamRLFirstHalf = this.constructor.addPlus(this.awayTeamRLFirstHalf);

  }

  static addPlus(odds){
    odds = parseFloat(odds);
    if (odds > 0){
      return '+' + odds;
    } else {
      return odds;
    }
  }

  static formatRunLine(str){
    str = str.replace(' ','');
    str = str.replace('(','');
    str = str.replace(')','');
    return str;
  }

  static convertOdds(odd){
    if(odd >= 2){
      return Math.round((odd - 1)*100);
    }else{
      return Math.round((-100)/(odd-1));
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

module.exports = Bet365Football;
