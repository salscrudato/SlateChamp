class Bet365LiveFootball {
  constructor(id, homeTeam, awayTeam, oddsArray, sport, epoch) {
    this.id = id;

    //=====Setup Time=====
    var tempEpoch = parseInt(epoch)*1000;
    var offset = -240;
    this.epoch = (tempEpoch + offset*60*1000);
    var humanDate = new Date(this.epoch);
    var months = {0:'Jan', 1:'Feb', 2:'Mar', 3:'Apr', 4:'May', 5:'Jun', 6:'Jul', 7:'Aug', 8:'Sep', 9:'Oct', 10:'Nov', 11:'Dec'};
    var month = months[humanDate.getMonth()];
    var day = humanDate.getDate();
    this.matchDate = month + " " + day;
    this.matchTime = this.constructor.formatAMPM(humanDate);

    this.sport = sport;
    this.source = 'bet365';
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;

    this.homeTeamML = 0;
    this.homeTeamML = 0;
    this.homeTeamRL = 0;
    this.awayTeamRL = 0;
    this.homeTeamRLOdds = 0;
    this.awayTeamRLOdds = 0;
    this.over = 0;
    this.overOdds = 0;
    this.under = 0;
    this.underOdds = 0;

    //Initialize varants
    var mlStartIndex = 0;
    var mlEndIndex = 0;
    var rlStartIndex = 0;
    var rlEndIndex = 0;
    var totalStartIndex = 0;
    var totalEndIndex = 0;

    //Set event details
    var score = this.constructor.setScore(oddsArray[0]);
    score = score.split('-');
    this.homeScore = parseFloat(score[1]);
    this.awayScore = parseFloat(score[0]);
    this.details = this.constructor.setDetails(oddsArray[0]);

    //=====Set indexes=====
    for(var i = 0; i < oddsArray.length; i++){
      if(oddsArray[i].type == 'MA'){
        if(oddsArray[i].NA == 'Match Winner 2-Way'){
          mlStartIndex = i + 2;
          mlEndIndex = this.constructor.findEnd(mlStartIndex, oddsArray);
        } else if(oddsArray[i].NA == 'Handicap 2-Way'){
          rlStartIndex = i + 2;
          rlEndIndex = this.constructor.findEnd(rlStartIndex, oddsArray);
        } else if(oddsArray[i].NA == 'Total 2-Way'){
          totalStartIndex = i + 2;
          totalEndIndex = this.constructor.findEnd(totalStartIndex, oddsArray);
        }
      }
    }

    //=====Set Values from Index=====
    this.homeTeamML = this.constructor.setML(homeTeam, mlStartIndex, mlEndIndex, oddsArray);
    this.homeTeamML = this.constructor.convertOdds(this.homeTeamML);
    this.awayTeamML = this.constructor.setML(awayTeam, mlStartIndex, mlEndIndex, oddsArray);
    this.awayTeamML = this.constructor.convertOdds(this.awayTeamML);

    this.homeTeamRL = this.constructor.setRL(homeTeam, rlStartIndex, rlEndIndex, oddsArray);
    this.awayTeamRL = this.constructor.setRL(awayTeam, rlStartIndex, rlEndIndex, oddsArray);
    this.homeTeamRLOdds = this.constructor.setRLOdds(homeTeam, rlStartIndex, rlEndIndex, oddsArray);
    this.homeTeamRLOdds = this.constructor.convertOdds(this.homeTeamRLOdds);
    this.awayTeamRLOdds = this.constructor.setRLOdds(awayTeam, rlStartIndex, rlEndIndex, oddsArray);
    this.awayTeamRLOdds = this.constructor.convertOdds(this.awayTeamRLOdds);

    this.under = this.constructor.setTotal('Under', totalStartIndex, totalEndIndex, oddsArray);
    this.over = this.constructor.setTotal('Over', totalStartIndex, totalEndIndex, oddsArray);

  }

  static convertOdds(odd){
    if(odd != null && odd != undefined && typeof odd == 'string'){
      odd = odd.split('/');
      if(odd.length>0){
        odd[0] = parseInt(odd[0]);
        odd[1] = parseInt(odd[1]);
        var decOdd = (odd[0]/odd[1]) + 1.00;
        if(decOdd >= 2){
          var tmpOdd = Math.round((decOdd - 1)*100);
          if(tmpOdd > 500){
            return 0;
          } else if(tmpOdd > 0){
            return '+' + tmpOdd;
          } else if(tmpOdd < -500){
            return 0;
          } else {
            return tmpOdd;
          }
        }else{
          var tmpOdd = Math.round((-100)/(decOdd-1));
          if(tmpOdd > 500){
            return 0;
          } else if(tmpOdd > 0){
            return '+' + tmpOdd;
          } else if(tmpOdd < -500){
            return 0;
          } else {
            return tmpOdd;
          }
        }
      }
    }
    return odd;
  }

  static setScore(event){
    return event.SS;
  }

  static setDetails(event){
    return event.CT + ' - ' + event.UC;
  }

  static setML(team, start, length, oddsArray){
    for(var i = start; i < length + 1; i++){
      if(oddsArray[i].NA == team){
        return oddsArray[i].OD;
      }
    }
  }

  static setRL(team, start, length, oddsArray){
    for(var i = start; i < length + 1; i++){
      if(oddsArray[i].NA == team){
        return oddsArray[i].HA;
      }
    }
  }

  static setRLOdds(team, start, length, oddsArray){
    for(var i = start; i < length + 1; i++){
      if(oddsArray[i].NA == team){
        return oddsArray[i].OD;
      }
    }
  }

  static setTotal(type, start, length, oddsArray){
    var tempArr = [];
    for(var i = start; i < length + 1; i++){
      if(oddsArray[i].NA.trim() == type){
        return {number: oddsArray[i].HA, odds: this.convertOdds(oddsArray[i].OD)};
      }
    }
    return tempArr;
  }

  static findEnd(start, oddsArr){
    var found = 0;
    var count = start;
    while(found == 0){
      if(oddsArr[count].type != 'PA' || count == oddsArr.length){
        found = 1;
      } else {
        count = count + 1;
      }
    }
    return count - 1;
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

module.exports = Bet365LiveFootball;
