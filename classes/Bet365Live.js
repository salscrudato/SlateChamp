class Bet365Live {
  constructor(id, homeTeam, awayTeam, oddsArray, sport, epoch) {
    this.id = id;
    var tempEpoch = parseInt(epoch)*1000;
    var offset = -240;
    this.epoch = (tempEpoch + offset*60*1000);
    var humanDate = new Date(this.epoch);
    var months = {0:'Jan', 1:'Feb', 2:'Mar', 3:'Apr', 4:'May', 5:'Jun', 6:'Jul', 7:'Aug', 8:'Sep', 9:'Oct', 10:'Nov', 11:'Dec'};
    var month = months[humanDate.getMonth()];
    var day = humanDate.getDate();
    this.matchDate = month + " " + day;
    this.matchTime = this.constructor.formatAMPM(humanDate);
    this.source = 'bet365';
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.overArray = [];
    this.underArray = [];
    this.homeTeamRLArray = [];
    this.awayTeamRLArray = [];
    this.homeTeamML = 0;
    this.awayTeamML = 0;
    this.homeTeamRL = 0;
    this.awayTeamRL = 0;
    this.sport = sport;

    //Initialize varants
    var mlStartIndex = 0;
    var mlEndIndex = 0;
    var rlStartIndex = 0;
    var rlEndIndex = 0;
    var altStartIndex = 0;
    var altEndIndex = 0;
    var totalStartIndex = 0;
    var totalEndIndex = 0;
    var altTotalStartIndex = 0;
    var altTotalEndIndex = 0;

    //Set event details
    this.constructor.setDescription(oddsArray[0]);
    var score = this.constructor.setScore(oddsArray[0]);
    score = score.split('-');
    this.homeScore = parseFloat(score[1]);
    this.awayScore = parseFloat(score[0]);
    this.details = this.constructor.setDetails(oddsArray[0], sport);

    //==========For Baseball==========
    if(sport==16){
      //Set indexes
      for(var i = 0; i < oddsArray.length; i++){
        if(oddsArray[i].type == 'MA'){
          if(oddsArray[i].NA == 'Money Line'){
            mlStartIndex = i + 2;
            mlEndIndex = this.constructor.findEnd(mlStartIndex, oddsArray);
          } else if(oddsArray[i].NA == 'Run Line'){
            rlStartIndex = i + 2;
            rlEndIndex = this.constructor.findEnd(rlStartIndex, oddsArray);
          } else if(oddsArray[i].NA == 'Alternative Run Lines'){
            altStartIndex = i + 2;
            altEndIndex = this.constructor.findEnd(altStartIndex, oddsArray);
          } else if(oddsArray[i].NA == 'Game Total'){
            totalStartIndex = i + 2;
            totalEndIndex = this.constructor.findEnd(totalStartIndex, oddsArray);
          } else if(oddsArray[i].NA == 'Alternative Game Totals'){
            altTotalStartIndex = i + 2;
            altTotalEndIndex = this.constructor.findEnd(altTotalStartIndex, oddsArray);
          }
        }
      }

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
      this.homeTeamRLArray = this.constructor.setAltLines(homeTeam, altStartIndex, altEndIndex, oddsArray);
      this.awayTeamRLArray = this.constructor.setAltLines(awayTeam, altStartIndex, altEndIndex, oddsArray);
      this.under = this.constructor.setTotal('Under', totalStartIndex, totalEndIndex, oddsArray);
      this.over = this.constructor.setTotal('Over', totalStartIndex, totalEndIndex, oddsArray);
      this.overArray = this.constructor.setAltLines('Over', altTotalStartIndex, altTotalEndIndex, oddsArray);
      this.underArray = this.constructor.setAltLines('Under', altTotalStartIndex, altTotalEndIndex, oddsArray);

      //==========For Soccer==========
    } else if (sport==1){
      for(var i = 0; i < oddsArray.length; i++){
        if(oddsArray[i].type == 'MA'){
          if(oddsArray[i].NA == 'Fulltime Result'){
            mlStartIndex = i + 2;
            mlEndIndex = this.constructor.findEnd(mlStartIndex, oddsArray);
          } else if(oddsArray[i].NA == 'Match Goals'){
            totalStartIndex = i + 2;
            totalEndIndex = this.constructor.findEnd(totalStartIndex, oddsArray);
          }
        }
      }

      //==========Get Odds==========
      this.homeTeamML = this.constructor.setML(homeTeam, mlStartIndex, mlEndIndex, oddsArray);
      this.homeTeamML = this.constructor.convertOdds(this.homeTeamML);
      this.awayTeamML = this.constructor.setML(awayTeam, mlStartIndex, mlEndIndex, oddsArray);
      this.awayTeamML = this.constructor.convertOdds(this.awayTeamML);
      this.drawOdds = this.constructor.setML("Draw", mlStartIndex, mlEndIndex, oddsArray);
      this.drawOdds = this.constructor.convertOdds(this.drawOdds);
      this.under = this.constructor.setTotal('Under', totalStartIndex, totalEndIndex, oddsArray);
      this.over = this.constructor.setTotal('Over', totalStartIndex, totalEndIndex, oddsArray);

    }
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

  static setDescription(event){
    return event.NA;
  }

  static setScore(event){
    return event.SS;
  }

  static setDetails(event, sport){
    if(sport==16){
      return event.ED;
    } else if(sport==1){
      return event.CT;
    }
  }

  static setML(team, start, length, oddsArray){
    for(var i = start; i < length + 1; i++){
      if(oddsArray[i].NA == team){
        return oddsArray[i].OD;
      }
    }
  }

  static setRL(team, start, length, oddsArray){
    if(start==length){
      return 0;
    }
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


  static setAltLines(team, start, length, oddsArray){
    var tempArr = [];
    for(var i = start; i < length + 1; i++){
      if(oddsArray[i].NA == team){
        tempArr.push({number: oddsArray[i].HA, odds: this.convertOdds(oddsArray[i].OD)});
      }
    }
    return tempArr;
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

module.exports = Bet365Live;
