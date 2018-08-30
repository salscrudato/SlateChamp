class Action {
  constructor(id, details, matchTime,
    odds, homeTeam, awayTeam, homePitcher, awayPitcher, sport, league) {

      this.id = id;
      this.source = 'jsonOdds';
      this.details = details;

      this.homeTeamML = 0;
      this.awayTeamML = 0;
      this.homeTeamRL = 0;
      this.homeTeamRLOdds = 0;
      this.awayTeamRL = 0;
      this.awayTeamRLOdds = 0;
      this.totalNumber = 0;
      this.overLine = 0;
      this.underLine = 0;

      //==========Time==========
      var tempEpoch = new Date(matchTime).getTime();
      var offset = -240;
      this.epoch = (tempEpoch + offset*60*1000);
      var humanDate = new Date(this.epoch);
      this.humanDate = humanDate;
      var months = {0:'Jan', 1:'Feb', 2:'Mar', 3:'Apr', 4:'May', 5:'Jun', 6:'Jul', 7:'Aug', 8:'Sep', 9:'Oct', 10:'Nov', 11:'Dec'};
      var month = months[humanDate.getMonth()];
      var day = humanDate.getDate();
      this.matchDate = month + " " + day;
      this.matchTime = this.constructor.formatAMPM(humanDate);

      if (sport == 0){
        this.homeTeam = homeTeam + ' [' + homePitcher + ']';
        this.awayTeam = awayTeam + ' [' + awayPitcher + ']';
      } else {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
      }

      for(var i = 0; i < odds.length; i++){
        if(odds[i].OddType=='Game'){
          this.homeTeamML = odds[i].MoneyLineHome;
          this.awayTeamML = odds[i].MoneyLineAway;
          this.homeTeamRL = odds[i].PointSpreadHome;
          this.homeTeamRLOdds = odds[i].PointSpreadHomeLine;
          this.awayTeamRL = odds[i].PointSpreadAway;
          this.awayTeamRLOdds = odds[i].PointSpreadAwayLine;
          this.totalNumber = odds[i].TotalNumber;
          this.overLine = odds[i].OverLine;
          this.underLine = odds[i].UnderLine;
        }
      }

        this.homeTeamML = this.constructor.addPlus(this.homeTeamML);
        this.awayTeamML = this.constructor.addPlus(this.awayTeamML);
        this.homeTeamRL = this.constructor.addPlus(this.homeTeamRL);
        this.awayTeamRL = this.constructor.addPlus(this.awayTeamRL);
        this.homeTeamRLOdds = this.constructor.addPlus(this.homeTeamRLOdds);
        this.awayTeamRLOdds = this.constructor.addPlus(this.awayTeamRLOdds);
        this.overLine = this.constructor.addPlus(this.overLine);
        this.underLine = this.constructor.addPlus(this.underLine);

      //==========Golf==========
      if(sport==21){
        this.eventName = league.Name;
        this.participant = [];
        for(var i = 0; i < odds.length; i++){
          this.participant.push({name: odds[i].Participant.Name, odds: odds[i].MoneyLineHome});
        }
      }

      this.homeImagePath = this.constructor.setHomeAndAwayImages(homeTeam);
      this.awayImagePath = this.constructor.setHomeAndAwayImages(awayTeam);
      this.sport = sport;

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

    static addPlus(odds){
      if (odds > 0){
        return '+' + odds;
      } else {
        return odds;
      }
    }

    static setHomeAndAwayImages(team){
      switch (team){
        case 'New York Mets':
        return '/assets/images/mets.png';
        break;
        case 'Minnesota Twins':
        return '/assets/images/twins.png';
        break;
        case 'Baltimore Orioles':
        return '/assets/images/orioles.png';
        break;
        case 'Pittsburgh Pirates':
        return '/assets/images/pirates.png';
        break;
        case 'Detroit Tigers':
        return '/assets/images/tigers.png';
        break;
        case 'Kansas City Royals':
        return '/assets/images/royals.png';
        break;
        case 'Seattle Mariners':
        return '/assets/images/mariners.png';
        break;
        case 'Arizona Diamondbacks':
        return '/assets/images/diamondbacks.png';
        break;
        case 'San Francisco Giants':
        return '/assets/images/giants.png';
        break;
        case 'Tampa Bay Rays':
        return '/assets/images/rays.png';
        break;
        case 'Texas Rangers':
        return '/assets/images/rangers.png';
        break;
        case 'Milwaukee Brewers':
        return '/assets/images/brewers.png';
        break;
        case 'New York Yankees':
        return '/assets/images/yankees.png';
        break;
        case 'Washington Nationals':
        return '/assets/images/nationals.png';
        break;
        case 'Houston Astros':
        return '/assets/images/astros.png';
        break;
        case 'Los Angeles Dodgers':
        return '/assets/images/dodgers.png';
        break;
        case 'Atlanta Braves':
        return '/assets/images/braves.png';
        break;
        case 'Chicago Cubs':
        return '/assets/images/cubs.png';
        break;
        case 'Miami Marlins':
        return '/assets/images/marlins.png';
        break;
        case 'Boston Red Sox':
        return '/assets/images/redsox.png';
        break;
        case 'Los Angeles Angels':
        return '/assets/images/angels.png';
        break;
        case 'Oakland Athletics':
        return '/assets/images/athletics.png';
        break;
        case 'Cincinnati Reds':
        return '/assets/images/reds.png';
        break;
        case 'San Diego Padres':
        return '/assets/images/padres.png';
        break;
        case 'Toronto Blue Jays':
        return '/assets/images/bluejays.png';
        break;
        case 'Cleveland Indians':
        return '/assets/images/indians.png';
        break;
        case 'Colorado Rockies':
        return '/assets/images/rockies.png';
        break;
        case 'Philadelphia Phillies':
        return '/assets/images/phillies.png';
        break;
        case 'St. Louis Cardinals':
        return '/assets/images/cardinals.png';
        break;
        case 'Chicago White Sox':
        return '/assets/images/whitesox.png';
        break;
        case 'Philadelphia Eagles':
        return '/assets/images/Eagles.png';
        break;
        case 'New York Giants':
        return '/assets/images/nygiants.png';
        break;
        case 'Washington Redskins':
        return '/assets/images/Redskins.png';
        break;
        case 'Dallas Cowboys':
        return '/assets/images/Cowboys.png';
        break;
        case 'New Orleans Saints':
        return '/assets/images/Saints.png';
        break;
        case 'Atlanta Falcons':
        return '/assets/images/Falcons.png';
        break;
        case 'Carolina Panthers':
        return '/assets/images/Panthers.png';
        break;
        case 'Tampa Bay Buccaneers':
        return '/assets/images/Buccaneers.png';
        break;
        case 'Green Bay Packers':
        return '/assets/images/Packers.png';
        break;
        case 'Minnesota Vikings':
        return '/assets/images/Vikings.png';
        break;
        case 'Chicago Bears':
        return '/assets/images/bears.png';
        break;
        case 'Detroit Lions':
        return '/assets/images/Lions.png';
        break;
        case 'Seattle Seahawks':
        return '/assets/images/Seahawks.png';
        break;
        case 'Los Angeles Rams':
        return '/assets/images/Rams.png';
        break;
        case 'San Francisco 49ers':
        return '/assets/images/49ers.png';
        break;
        case 'Arizona Cardinals':
        return '/assets/images/CardinalsNFL.png';
        break;
        case 'New York Jets':
        return '/assets/images/Jets.png';
        break;
        case 'New England Patriots':
        return '/assets/images/Patriots.png';
        break;
        case 'Miami Dolphins':
        return '/assets/images/Dolphins.png';
        break;
        case 'Buffalo Bills':
        return '/assets/images/Bills.png';
        break;
        case 'Tennessee Titans':
        return '/assets/images/Titans.png';
        break;
        case 'Jacksonville Jaguars':
        return '/assets/images/Jaguars.png';
        break;
        case 'Houston Texans':
        return '/assets/images/Texans.png';
        break;
        case 'Indianapolis Colts':
        return '/assets/images/Colts.png';
        break;
        case 'Pittsburgh Steelers':
        return '/assets/images/Steelers.png';
        break;
        case 'Baltimore Ravens':
        return '/assets/images/Ravens.png';
        break;
        case 'Cincinnati Bengals':
        return '/assets/images/Bengals.png';
        break;
        case 'Cleveland Browns':
        return '/assets/images/Browns.png';
        break;
        case 'Los Angeles Chargers':
        return '/assets/images/Chargers.png';
        break;
        case 'Kansas City Chiefs':
        return '/assets/images/Chiefs.png';
        break;
        case 'Oakland Raiders':
        return '/assets/images/Raiders.png';
        break;
        case 'Denver Broncos':
        return '/assets/images/Broncos.png';
        break;
        case 'Boston College':
        return '/assets/images/BC Eagles.png';
        break;
        case 'Clemson':
        return '/assets/images/Clemson tigers.png';
        break;
        case 'Florida State':
        return '/assets/images/FSU.png';
        break;
        case 'NC State':
        return '/assets/images/NC State.png';
        break;
        case 'Syracuse':
        return '/assets/images/syracuse orange.png';
        break;
        case 'Wake Forest':
        return '/assets/images/wake forest demon deacons.png';
        break;
        case 'Duke':
        return '/assets/images/duke blue devils.png';
        break;
        case 'Georgia Tech':
        return '/assets/images/GT.png';
        break;
        case 'Louisville':
        return '/assets/images/louisville cardinals.png';
        break;
        case 'Miami Florida':
        return '/assets/images/miami hurricanes.png';
        break;
        case 'North Carolina':
        return '/assets/images/UNC Tar Heels.png';
        break;
        case 'Pittsburgh':
        return '/assets/images/Pitt Panthers.png';
        break;
        case 'Virginia':
        return '/assets/images/UVA.png';
        break;
        case 'Virginia Tech':
        return '/assets/images/VT hokies.png';
        break;
        case 'Cincinnati':
        return '/assets/images/cincinnati bearcats.jpg';
        break;
        case 'East Carolina':
        return '/assets/images/ECU Pirates.png';
        break;
        case 'Houston':
        return '/assets/images/houston cougars.png';
        break;
        case 'Memphis':
        return '/assets/images/memphis tigers.png';
        break;
        case 'Navy':
        return '/assets/images/navy midshipmen.png';
        break;
        case 'SMU':
        return '/assets/images/smu.png';
        break;
        case 'Temple':
        return '/assets/images/temple-owls.png';
        break;
        case 'Tulane':
        return '/assets/images/tulane green wave.png';
        break;
        case 'Tulsa':
        return '/assets/images/tulsa golden hurricane.png';
        break;
        case 'Central Florida':
        return '/assets/images/UCF.png';
        break;
        case 'Connecticut':
        return '/assets/images/uconn huskies.jpg';
        break;
        case 'South Florida':
        return '/assets/images/USF.png';
        break;
        case 'Illinois':
        return '/assets/images/illinois fighting illini.png';
        break;
        case 'Indiana':
        return '/assets/images/indiana hoosiers.png';
        break;
        case 'Iowa':
        return '/assets/images/iowa-hawkeyes-logo.png';
        break;
        case 'Maryland':
        return '/assets/images/maryland-terps-logo.png';
        break;
        case 'Michigan':
        return '/assets/images/michigan wolverines.png';
        break;
        case 'Michigan State':
        return '/assets/images/michigan-state-university-logo.png';
        break;
        case 'Minnesota':
        return '/assets/images/Minnesota.png';
        break;
        case 'Nebraska':
        return '/assets/images/nebraska.png';
        break;
        case 'Northwestern':
        return '/assets/images/Northwestern.png';
        break;
        case 'Ohio State':
        return '/assets/images/OSU.jpg';
        break;
        case 'Penn State':
        return '/assets/images/PSU logo.png';
        break;
        case 'Purdue':
        return '/assets/images/purdue logo.png';
        break;
        case 'Rutgers':
        return '/assets/images/Rutgers.png';
        break;
        case 'Wisconsin':
        return '/assets/images/Wisconsin logo.png';
        break;
        case 'Baylor':
        return '/assets/images/baylor bears.png';
        break;
        case 'Iowa State':
        return '/assets/images/iowa state.png';
        break;
        case 'Kansas':
        return '/assets/images/Kansas.png';
        break;
        case 'Kansas State':
        return '/assets/images/Kansas State.png';
        break;
        case 'Oklahoma State':
        return '/assets/images/oklahoma state.png';
        break;
        case 'Oklahoma':
        return '/assets/images/Oklahoma.png';
        break;
        case 'TCU':
        return '/assets/images/TCU.png';
        break;
        case 'Texas':
        return '/assets/images/texas longhorns.png';
        break;
        case 'Texas Tech':
        return '/assets/images/Texas Tech.png';
        break;
        case 'West Virginia':
        return '/assets/images/WVU.jpg';
        break;
        case 'Charlotte':
        return '/assets/images/charlotte-49ers-logo.png';
        break;
        case 'Florida Atlantic':
        return '/assets/images/FAU.png';
        break;
        case 'Florida Intl':
        return '/assets/images/FIU.jpg';
        break;
        case 'Louisiana Tech':
        return '/assets/images/latech2.jpg';
        break;
        case 'Marshall':
        return '/assets/images/marshall.png';
        break;
        case 'Middle Tenn St':
        return '/assets/images/middle tennessee.jpg';
        break;
        case 'Old Dominion':
        return '/assets/images/old dominion.png';
        break;
        case 'Rice':
        return '/assets/images/rice owls.png';
        break;
        case 'Southern Miss':
        return '/assets/images/southern miss.png';
        break;
        case 'UAB':
        return '/assets/images/UAB blazers.png';
        break;
        case 'North Texas':
        return '/assets/images/UNT Mean green.png';
        break;
        case 'Texas El Paso':
        return '/assets/images/utep-miners-4-logo.png';
        break;
        case 'Tex San Antonio':
        return '/assets/images/UTSA.png';
        break;
        case 'Western Kentucky':
        return '/assets/images/wku.png';
        break;
        case 'Army':
        return '/assets/images/army black knights.png';
        break;
        case 'BYU':
        return '/assets/images/BYU.jpg';
        break;
        case 'Liberty':
        return '/assets/images/liberty flames.jpg';
        break;
        case 'New Mexico St':
        return '/assets/images/New Mexico State.jpeg';
        break;
        case 'Notre Dame':
        return '/assets/images/Notre-Dame-logo.png';
        break;
        case 'Massachusetts':
        return '/assets/images/umass-logo.png';
        break;
        case 'Akron':
        return '/assets/images/Akron.png';
        break;
        case 'Ball State':
        return '/assets/images/Ball state.png';
        break;
        case 'Bowling Green':
        return '/assets/images/bowling green.png';
        break;
        case 'Buffalo':
        return '/assets/images/buffalo bulls.png';
        break;
        case 'Central Michigan':
        return '/assets/images/cmu.png';
        break;
        case 'Eastern Michigan':
        return '/assets/images/EMU.png';
        break;
        case 'Kent State':
        return '/assets/images/kent state.jpg';
        break;
        case 'Miami Ohio':
        return '/assets/images/Miami university.png';
        break;
        case 'Northern Illinois':
        return '/assets/images/niu-huskies-1-logo.png';
        break;
        case 'Ohio':
        return '/assets/images/ohio-bobcats-logo.png';
        break;
        case 'Toledo':
        return '/assets/images/Toledo.png';
        break;
        case 'Western Michigan':
        return '/assets/images/wmu-broncos-1-logo.png';
        break;
        case 'Air Force':
        return '/assets/images/air force.png';
        break;
        case 'Boise State':
        return '/assets/images/boise state.png';
        break;
        case 'Colorado State':
        return '/assets/images/Colorado State.jpg';
        break;
        case 'Fresno State':
        return '/assets/images/Fresno State.png';
        break;
        case 'Hawaii':
        return '/assets/images/hawaii.png';
        break;
        case 'Nevada':
        return '/assets/images/Nevada.png';
        break;
        case 'New Mexico':
        return '/assets/images/New Mexico.png';
        break;
        case 'San Jose State':
        return '/assets/images/San Jose State.png';
        break;
        case 'San Diego State':
        return '/assets/images/SDSU.png';
        break;
        case 'UNLV':
        return '/assets/images/unlv.png';
        break;
        case 'Utah State':
        return '/assets/images/utah state.png';
        break;
        case 'Wyoming':
        return '/assets/images/Wyoming.png';
        break;
        case 'Arizona':
        return '/assets/images/Arizona.png';
        break;
        case 'Arizona State':
        return '/assets/images/ASU.png';
        break;
        case 'California':
        return '/assets/images/Cal.png';
        break;
        case 'Colorado':
        return '/assets/images/Colorado.png';
        break;
        case 'Oregon':
        return '/assets/images/Oregon.png';
        break;
        case 'Oregon State':
        return '/assets/images/osu beavers.png';
        break;
        case 'Stanford':
        return '/assets/images/stanford-cardinals-logo.png';
        break;
        case 'UCLA':
        return '/assets/images/ucla-bruins-1-logo.png';
        break;
        case 'USC':
        return '/assets/images/USC.png';
        break;
        case 'Utah':
        return '/assets/images/Utah utes.png';
        break;
        case 'Washington':
        return '/assets/images/washington huskies.png';
        break;
        case 'Washington State':
        return '/assets/images/washington state.png';
        break;
        case 'Alabama':
        return '/assets/images/alabama.png';
        break;
        case 'Arkansas':
        return '/assets/images/Arkansas.png';
        break;
        case 'Auburn':
        return '/assets/images/auburn.png';
        break;
        case 'Florida':
        return '/assets/images/florida-gators-logo.png';
        break;
        case 'Georgia':
        return '/assets/images/georgia logo.png';
        break;
        case 'Kentucky':
        return '/assets/images/kentucky.png';
        break;
        case 'LSU':
        return '/assets/images/lsu-tigers-logo.png';
        break;
        case 'Missouri':
        return '/assets/images/Missouri-tigers-logo.png';
        break;
        case 'Mississippi State':
        return '/assets/images/MSU bulldogs.png';
        break;
        case 'Mississippi':
        return '/assets/images/Ole Miss.png';
        break;
        case 'South Carolina':
        return '/assets/images/south carolina.jpg';
        break;
        case 'Texas A&M':
        return '/assets/images/TAMU Aggies.png';
        break;
        case 'Tennessee':
        return '/assets/images/UT Vols.png';
        break;
        case 'Vanderbilt':
        return '/assets/images/Vandy.jpg';
        break;
        case 'Appalachian St':
        return '/assets/images/app state.jpg';
        break;
        case 'Arkansas State':
        return '/assets/images/arkansas state.png';
        break;
        case 'Coastal Carolina':
        return '/assets/images/coastal carolina.jpg';
        break;
        case 'Georgia State':
        return '/assets/images/georgia state.png';
        break;
        case 'Georgia Southern':
        return '/assets/images/georgia-southern-logo.png';
        break;
        case 'LA Lafayette':
        return '/assets/images/la-lafayette-ragin-cajuns-3-logo.png';
        break;
        case 'South Alabama':
        return '/assets/images/south alabama.png';
        break;
        case 'Texas State':
        return '/assets/images/texas state.jpg';
        break;
        case 'Troy':
        return '/assets/images/troy trojans.jpg';
        break;
        case 'Louisiana Monroe':
        return '/assets/images/ulm war hawks.png';
        break;
        default:
        return '/assets/images/ncaaf.jpg';
      }
    }
  }

  module.exports = Action;

  // static setDate(gameTime){
  //   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //   var year = Number(gameTime.substr(0,4));
  //   var month = Number(gameTime.substr(5,2));
  //   var day = Number(gameTime.substr(8,2));
  //   var hour = Number(gameTime.substr(11,2));
  //   if(hour < 4){
  //     day = day - 1;
  //   }
  //   return months[month - 1] + ' ' + day + ' ' + year;
  // }
  //
  // static setTime(gameTime){
  //   var amOrPm;
  //   var hour = Number(gameTime.substr(11,2));
  //   //Move to EST
  //   var hour = hour - 4;
  //   if(hour < 0){
  //     hour = 24 + hour;
  //   }
  //   if(hour > 12){
  //     hour = hour-12;
  //     amOrPm = 'PM';
  //   } else if(hour == 12) {
  //     amOrPm = 'PM';
  //   } else {
  //     amOrPm = 'AM';
  //   }
  //   return hour + gameTime.substr(13,3) + ' ' + amOrPm;
  // }
