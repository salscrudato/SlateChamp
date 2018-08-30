class Bet365Soccer {
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
    this.drawOdds = 0;
    this.awayTeamML = 0;
    this.over = 0;
    this.under = 0;
    this.homeTeamRLOdds = 0;
    this.homeTeamRL = 0;
    this.awayTeamRLOdds = 0;
    this.awayTeamRL = 0;
    this.bothScoreYes = 0;
    this.bothScoreNo = 0;

    if(oddsArr != undefined){
      for(var key in oddsArr.sp){
        if(key=='full_time_result'){
          this.homeTeamML = this.constructor.convertOdds(oddsArr.sp[key][2].odds);
          this.drawOdds = this.constructor.convertOdds(oddsArr.sp[key][1].odds);
          this.awayTeamML = this.constructor.convertOdds(oddsArr.sp[key][0].odds);
        }
        // if(key=='goals_over_under'){
        //   this.over = {number: oddsArr.sp[key][0].goals, odds: this.constructor.convertOdds(oddsArr.sp[key][0].odds)};
        //   this.under = {number: oddsArr.sp[key][1].goals, odds: this.constructor.convertOdds(oddsArr.sp[key][1].odds)};
        // }
        if(key=='goal_line'){
          var tmpGoalLine = oddsArr.sp[key][0].goals.split(', ');
          if(tmpGoalLine.length > 1){
            tmpGoalLine = tmpGoalLine[1];
          } else {
            tmpGoalLine = tmpGoalLine[0];
          }
          tmpGoalLine = parseFloat(tmpGoalLine);
          this.over = {number: tmpGoalLine, odds: this.constructor.convertOdds(oddsArr.sp[key][0].odds)};
          this.under = {number: tmpGoalLine, odds: this.constructor.convertOdds(oddsArr.sp[key][1].odds)};
        }
        if(key=='handicap_result'){
          var tmpAway = oddsArr.sp[key][0].opp;
          var tmpHome = oddsArr.sp[key][2].opp;
          tmpAway = tmpAway.replace(this.awayTeam,'');
          tmpAway = this.constructor.formatRunLine(tmpAway);
          this.awayTeamRL = tmpAway;
          this.awayTeamRLOdds = this.constructor.convertOdds(oddsArr.sp[key][0].odds);
          tmpHome = tmpHome.replace(this.homeTeam,'');
          tmpHome = this.constructor.formatRunLine(tmpHome);
          this.homeTeamRL = tmpHome;
          this.homeTeamRLOdds = this.constructor.convertOdds(oddsArr.sp[key][2].odds);
        }
        if(key=='both_teams_to_score'){
          this.bothScoreYes = this.constructor.convertOdds(oddsArr.sp[key][0].odds);
          this.bothScoreNo = this.constructor.convertOdds(oddsArr.sp[key][1].odds);
        }
      }
    }

  }

  static formatRunLine(str){
    str = str.replace(' ','');
    str = str.replace('(','');
    str = str.replace(')','');
    return str;
  }

  static convertOdds(odd){
    odd = parseFloat(odd);
    if(odd >= 2){
      var tmpOdd = Math.round((odd - 1)*100);
    }else{
      var tmpOdd = Math.round((-100)/(odd-1));
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

module.exports = Bet365Soccer;
