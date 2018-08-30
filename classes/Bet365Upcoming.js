class Bet365Upcoming {
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
    this.runInFirst = 0;
    this.noRunInFirst = 0;
    this.homeTeamFirstHalf = 0;
    this.awayTeamFirstHalf = 0;
    this.homeTeamRL = [];
    this.awayTeamRL = [];
    this.homeTeamTotalLine = 0;
    this.homeTeamOverOdds = 0;
    this.homeTeamUnderOdds = 0;
    this.awayTeamTotalLine = 0;
    this.awayTeamOverOdds = 0;
    this.awayTeamUnderOdds = 0;

    if(oddsArr != undefined){
      for(var key in oddsArr.sp){
        if(key == 'a_run_in_the_1st_innings' && this.sport == 16){
          //Run in first lines
          if(oddsArr.sp.a_run_in_the_1st_innings[0].opp == 'Yes'){
            this.runInFirst = this.constructor.convertOdds(oddsArr.sp.a_run_in_the_1st_innings[0].odds);
          }
          if(oddsArr.sp.a_run_in_the_1st_innings[1].opp == 'No'){
            this.noRunInFirst = this.constructor.convertOdds(oddsArr.sp.a_run_in_the_1st_innings[1].odds);
          }
        }
        if(key == '5_innings_line' && this.sport == 16){
          //First 5 innings line
          var fiveInnArr = oddsArr.sp["5_innings_line"];
          if(fiveInnArr[0].opp.includes(this.homeTeam)){
            this.homeTeamFirstHalf = this.constructor.convertOdds(fiveInnArr[0].odds);
          } else if(fiveInnArr[0].opp.includes(this.awayTeam)){
            this.awayTeamFirstHalf = this.constructor.convertOdds(fiveInnArr[0].odds);
          }
          if(fiveInnArr[1].opp.includes(this.homeTeam)){
            this.homeTeamFirstHalf = this.constructor.convertOdds(fiveInnArr[1].odds);
          } else if(fiveInnArr[1].opp.includes(this.awayTeam)){
            this.awayTeamFirstHalf = this.constructor.convertOdds(fiveInnArr[1].odds);
          }
        }
        if(key == 'alternative_run_line' && this.sport == 16){
          //Alternate Run lines
          var altLines = oddsArr.sp["alternative_run_line"];
          for(var i = 0; i < altLines.length; i++){
            var line = parseFloat(altLines[i].opp);
            var team = altLines[i].header;
            var odds = this.constructor.convertOdds(parseFloat(altLines[i].odds));
            if (line > -3 && line < 3){
              if(team == this.homeTeam){
                this.homeTeamRL.push({number: line, odds: odds});
              } else if(team == this.awayTeam){
                this.awayTeamRL.push({number: line, odds: odds});
              }
            }
          }
        }
        if(key == 'team_totals' && this.sport == 16){
          //Set Team Totals
          var teamTotals = oddsArr.sp["team_totals"];
          for(var i = 0; i < teamTotals.length; i++){
            if(teamTotals[i].opp.length > 3){
              var team = teamTotals[i].header;
              var type = teamTotals[i].opp.substring(0,1);
              var number = teamTotals[i].opp.substring(2);
              var odds = this.constructor.convertOdds(teamTotals[i].odds);
              if(this.homeTeam == team){
                if(type == 'O'){
                  this.homeTeamTotalLine = number;
                  this.homeTeamOverOdds = odds;
                } else {
                  this.homeTeamUnderOdds = odds;
                }
              } else if(this.awayTeam == team){
                if(type == 'O'){
                  this.awayTeamTotalLine = number;
                  this.awayTeamOverOdds = odds;
                } else {
                  this.awayTeamUnderOdds = odds;
                }
              }
            }
          }
        }
      }
    }
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

  static addPlus(odd){
    odd = parseFloat(odd);
    if(odd > 0){
      return '+' + odd;
    } else {
      return odd;
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

module.exports = Bet365Upcoming;
