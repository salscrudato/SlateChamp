class JsonOdds {
  constructor(id, homeTeam, awayTeam, sport,
    matchTime, homePitcher, awayPitcher, oddsArr){

      this.source = 'jsonOdds';
      this.id = id;
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      this.sport = sport;
      if (sport === 0){
        this.homePitcher = homePitcher;
        this.awayPitcher = awayPitcher;
      }

      //=====Time=====
      this.epoch = JsonOdds.setEpoch(matchTime);
      this.humanDate = JsonOdds.setHumanDate(this.epoch);
      this.matchDate = JsonOdds.setMonthAndDate(this.humanDate);
      this.matchTime = JsonOdds.setTime(this.humanDate);

      //=====Set Odds=====
      //Loops through the odds array passed in to find the game odds
      var i;
      for(i = 0; i < oddsArr.length; i++){
        if(oddsArr[i].OddType=='Game'){
          this.homeTeamML = JsonOdds.formatOdds(oddsArr[i].MoneyLineHome);
          this.awayTeamML = JsonOdds.formatOdds(oddsArr[i].MoneyLineAway);
          //!!!!!!!!!!TODO - Replace RL with Spread which will require updates throughout the application
          this.homeTeamRL = JsonOdds.formatOdds(oddsArr[i].PointSpreadHome);
          this.homeTeamRLOdds = JsonOdds.formatOdds(oddsArr[i].PointSpreadHomeLine);
          this.awayTeamRL = JsonOdds.formatOdds(oddsArr[i].PointSpreadAway);
          this.awayTeamRLOdds = JsonOdds.formatOdds(oddsArr[i].PointSpreadAwayLine);
          this.totalNumber = oddsArr[i].TotalNumber;
          this.overLine = JsonOdds.formatOdds(oddsArr[i].OverLine);
          this.underLine = JsonOdds.formatOdds(oddsArr[i].UnderLine);
        }
      }

      if(homeTeam != null && awayTeam != null){
        homeTeam = homeTeam.toLowerCase().replace(' ','').replace(' ','');
        awayTeam = awayTeam.toLowerCase().replace(' ','').replace(' ','');
      }
      //Team image paths
      if(sport==0){
        // this.homeImagePath = JsonOdds.setMLBTeamImage(homeTeam);
        // this.awayImagePath = JsonOdds.setMLBTeamImage(awayTeam);
      } else if (sport==3){
        this.homeImagePath = JsonOdds.setCollegeTeamImage(homeTeam);
        this.awayImagePath = JsonOdds.setCollegeTeamImage(awayTeam);
      } else if (sport==4){
        this.homeImagePath = JsonOdds.setNFLTeamImage(homeTeam);
        this.awayImagePath = JsonOdds.setNFLTeamImage(awayTeam);
      }

    }


    //===============Class Methods===============
    //This method takes in a string date, and converts it to an epoch EST date
    static setEpoch(date){
      const rawEpoch = new Date(date).getTime();
      const offset = -240;
      return (rawEpoch + offset*60*1000);
    }

    //This method takes in an epoch time and returns a human date
    static setHumanDate(epoch){
      const humanDate = new Date(epoch);
      return humanDate;
    }

    //This method takes in a human date and sets the date in 'MMM DD' format
    static setMonthAndDate(humanDate){
      const months = {0:'Jan', 1:'Feb', 2:'Mar', 3:'Apr', 4:'May', 5:'Jun', 6:'Jul', 7:'Aug', 8:'Sep', 9:'Oct', 10:'Nov', 11:'Dec'};
      const month = months[humanDate.getMonth()];
      const day = humanDate.getDate();
      return month + " " + day;
    }

    //This method takes in a humanDate and returns the time in 'HH:MM AM/PM' format
    static setTime(humanDate){
      let hours = humanDate.getHours();
      let minutes = humanDate.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      return hours + ':' + minutes + ' ' + ampm;
    }

    //This method takes in odds and formats them
    static formatOdds(odd){
      if(odd === undefined){
        return 0;
      } else if(odd > 0) {
        return '+' + odd;
      } else {
        return odd;
      }
    }

    //This method takes in a team name and returns the path to the team image
    //Use for NFL only
    static setNFLTeamImage(team){
      switch (team){
        case 'sanfrancisco49ers':
        return '/assets/images/NFL/49ers.svg';
        break;
        case 'chicagobears':
        return '/assets/images/NFL/bears.svg';
        break;
        case 'cincinnatibengals':
        return '/assets/images/NFL/bengals.svg';
        break;
        case 'buffalobills':
        return '/assets/images/NFL/bills.svg';
        break;
        case 'philadelphiaeagles':
        return '/assets/images/NFL/eagles.svg';
        break;
        case 'newyorkgiants':
        return '/assets/images/NFL/giants.svg';
        break;
        case 'washingtonredskins':
        return '/assets/images/NFL/redskins.svg';
        break;
        case 'dallascowboys':
        return '/assets/images/NFL/cowboys.svg';
        break;
        case 'neworleanssaints':
        return '/assets/images/NFL/saints.svg';
        break;
        case 'atlantafalcons':
        return '/assets/images/NFL/falcons.svg';
        break;
        case 'carolinapanthers':
        return '/assets/images/NFL/panthers.svg';
        break;
        case 'tampabaybuccaneers':
        return '/assets/images/NFL/buccaneers.svg';
        break;
        case 'greenbaypackers':
        return '/assets/images/NFL/packers.svg';
        break;
        case 'minnesotavikings':
        return '/assets/images/NFL/vikings.svg';
        break;
        case 'detroitlions':
        return '/assets/images/NFL/lions.svg';
        break;
        case 'seattleseahawks':
        return '/assets/images/NFL/seahawks.svg';
        break;
        case 'losangelesrams':
        return '/assets/images/NFL/rams.svg';
        break;
        case 'arizonacardinals':
        return '/assets/images/NFL/cardinals.svg';
        break;
        case 'newyorkjets':
        return '/assets/images/NFL/jets.svg';
        break;
        case 'newenglandpatriots':
        return '/assets/images/NFL/patriots.svg';
        break;
        case 'miamidolphins':
        return '/assets/images/NFL/dolphins.svg';
        break;
        case 'tennesseetitans':
        return '/assets/images/NFL/titans.svg';
        break;
        case 'jacksonvillejaguars':
        return '/assets/images/NFL/jaguars.svg';
        break;
        case 'houstontexans':
        return '/assets/images/NFL/texans.svg';
        break;
        case 'indianapoliscolts':
        return '/assets/images/NFL/colts.svg';
        break;
        case 'pittsburghsteelers':
        return '/assets/images/NFL/steelers.svg';
        break;
        case 'baltimoreravens':
        return '/assets/images/NFL/ravens.svg';
        break;
        case 'clevelandbrowns':
        return '/assets/images/NFL/browns.svg';
        break;
        case 'losangeleschargers':
        return '/assets/images/NFL/chargers.svg';
        break;
        case 'kansascitychiefs':
        return '/assets/images/NFL/chiefs.svg';
        break;
        case 'oaklandraiders':
        return '/assets/images/NFL/raiders.svg';
        break;
        case 'denverbroncos':
        return '/assets/images/NFL/broncos.svg';
        break;
        default:
        return '/assets/images/nfl.svg';
      }
    }

    //This method takes in a team name and returns the path to the team image
    //Use for College only
    static setCollegeTeamImage(team){
      switch (team){
        case 'airforce':
        return '/assets/images/COLLEGE/airforce.svg';
        break;
        case 'alabama':
        return '/assets/images/COLLEGE/alabama.svg';
        break;
        case 'appalachianst':
        return '/assets/images/COLLEGE/appalachianstate.svg';
        break;
        case 'arizona':
        return '/assets/images/COLLEGE/arizona.svg';
        break;
        case 'arizonastate':
        return '/assets/images/COLLEGE/arizonastate.svg';
        break;
        case 'arkansas':
        return '/assets/images/COLLEGE/arkansas.svg';
        break;
        case 'arkansasstate':
        return '/assets/images/COLLEGE/arkansasstate.svg';
        break;
        case 'army':
        return '/assets/images/COLLEGE/army.svg';
        break;
        case 'auburn':
        return '/assets/images/COLLEGE/auburn.jpg';
        break;
        case 'ballstate':
        return '/assets/images/COLLEGE/ballstate.svg';
        break;
        case 'baylor':
        return '/assets/images/COLLEGE/baylor.svg';
        break;
        case 'boisestate':
        return '/assets/images/COLLEGE/boisestate.svg';
        break;
        case 'bostoncollege':
        return '/assets/images/COLLEGE/bostoncollege.svg';
        break;
        case 'bowlinggreen':
        return '/assets/images/COLLEGE/bowlinggreen.svg';
        break;
        case 'buffalo':
        return '/assets/images/COLLEGE/buffalo.svg';
        break;
        case 'byu':
        return '/assets/images/COLLEGE/byu.svg';
        break;
        case 'california':
        return '/assets/images/COLLEGE/california.svg';
        break;
        case 'centralmichigan':
        return '/assets/images/COLLEGE/centralmichigan.svg';
        break;
        case 'charlotte':
        return '/assets/images/charlotte.svg';
        break;
        case 'cincinnati':
        return '/assets/images/COLLEGE/cincinnati.svg';
        break;
        case 'clemson':
        return '/assets/images/COLLEGE/clemson.svg';
        break;
        case 'coastalcarolina':
        return '/assets/images/COLLEGE/coastalcarolina.svg';
        break;
        case 'colorado':
        return '/assets/images/COLLEGE/colorado.svg';
        break;
        case 'coloradostate':
        return '/assets/images/COLLEGE/coloradostate.svg';
        break;
        case 'connecticut':
        return '/assets/images/COLLEGE/connecticut.svg';
        break;
        case 'duke':
        return '/assets/images/COLLEGE/duke.svg';
        break;
        case 'eastcarolina':
        return '/assets/images/COLLEGE/ecu.svg';
        break;
        case 'easternmichigan':
        return '/assets/images/COLLEGE/emu.svg';
        break;
        case 'floridaatlantic':
        return '/assets/images/COLLEGE/fau.svg';
        break;
        case 'floridaintl':
        return '/assets/images/COLLEGE/fiu.svg';
        break;
        case 'florida':
        return '/assets/images/COLLEGE/florida.svg';
        break;
        case 'fresnostate':
        return '/assets/images/COLLEGE/fresnostate.svg';
        break;
        case 'floridastate':
        return '/assets/images/COLLEGE/fsu.svg';
        break;
        case 'georgia':
        return '/assets/images/COLLEGE/georgia.svg';
        break;
        case 'georgiasouthern':
        return '/assets/images/COLLEGE/georgiasouthern.svg';
        break;
        case 'georgiatech':
        return '/assets/images/COLLEGE/georgiatech.svg';
        break;
        case 'hawaii':
        return '/assets/images/COLLEGE/hawaii.svg';
        break;
        case 'houston':
        return '/assets/images/COLLEGE/houston.svg';
        break;
        case 'indiana':
        return '/assets/images/COLLEGE/indiana.svg';
        break;
        case 'illinois':
        return '/assets/images/COLLEGE/illinois.svg';
        break;
        case 'iowa':
        return '/assets/images/COLLEGE/iowa.svg';
        break;
        case 'iowastate':
        return '/assets/images/COLLEGE/iowastate.svg';
        break;
        case 'kansas':
        return '/assets/images/COLLEGE/kansas.svg';
        break;
        case 'kansasstate':
        return '/assets/images/COLLEGE/kansasstate.svg';
        break;
        case 'kentucky':
        return '/assets/images/COLLEGE/kentucky.svg';
        break;
        case 'liberty':
        return '/assets/images/COLLEGE/liberty.svg';
        break;
        case 'louisville':
        return '/assets/images/louisville.svg';
        break;
        case 'lsu':
        return '/assets/images/COLLEGE/lsu.svg';
        break;
        case 'maryland':
        return '/assets/images/COLLEGE/maryland.svg';
        break;
        case 'massachusetts':
        return '/assets/images/COLLEGE/massachusetts.svg';
        break;
        case 'memphis':
        return '/assets/images/COLLEGE/memphis.svg';
        break;
        case 'miamiflorida':
        return '/assets/images/COLLEGE/miami.svg';
        break;
        case 'miamiohio':
        return '/assets/images/COLLEGE/miamiohio.svg';
        break;
        case 'michigan':
        return '/assets/images/COLLEGE/michigan.svg';
        break;
        case 'michiganstate':
        return '/assets/images/COLLEGE/michiganstate.svg';
        break;
        case 'minnesota':
        return '/assets/images/COLLEGE/minnesota.svg';
        break;
        case 'mississippistate':
        return '/assets/images/COLLEGE/mississippistate.svg';
        break;
        case 'missouri':
        return '/assets/images/COLLEGE/missouri.svg';
        break;
        case 'navy':
        return '/assets/images/COLLEGE/navy.svg';
        break;
        case 'northcarolinastate':
        return '/assets/images/COLLEGE/ncstate.svg';
        break;
        case 'nebraska':
        return '/assets/images/COLLEGE/nebraska.svg';
        break;
        case 'nevada':
        return '/assets/images/COLLEGE/nevada.svg';
        break;
        case 'newmexico':
        return '/assets/images/COLLEGE/newmexico.svg';
        break;
        case 'newmexicost':
        return '/assets/images/COLLEGE/newmexicostate.svg';
        break;
        case 'northernillinois':
        return '/assets/images/COLLEGE/niu.svg';
        break;
        case 'northwestern':
        return '/assets/images/COLLEGE/northwestern.svg';
        break;
        case 'notredame':
        return '/assets/images/COLLEGE/notredame.svg';
        break;
        case 'olddominion':
        return '/assets/images/COLLEGE/odu.svg';
        break;
        case 'ohiostate':
        return '/assets/images/COLLEGE/ohiostate.svg';
        break;
        case 'oklahoma':
        return '/assets/images/COLLEGE/oklahoma.svg';
        break;
        case 'mississippi':
        return '/assets/images/olemiss.svg';
        break;
        case 'oregon':
        return '/assets/images/COLLEGE/oregon.svg';
        break;
        case 'oregonstate':
        return '/assets/images/COLLEGE/oregonstate.svg';
        break;
        case 'oklahomastate':
        return '/assets/images/COLLEGE/osu.svg';
        break;
        case 'pennstate':
        return '/assets/images/COLLEGE/pennstate.svg';
        break;
        case 'pittsburgh':
        return '/assets/images/COLLEGE/pitt.svg';
        break;
        case 'purdue':
        return '/assets/images/COLLEGE/purdue.svg';
        break;
        case 'rice':
        return '/assets/images/COLLEGE/rice.svg';
        break;
        case 'rutgers':
        return '/assets/images/COLLEGE/rutgers.svg';
        break;
        case 'sanjosestate':
        return '/assets/images/COLLEGE/sanjosestate.svg';
        break;
        case 'smu':
        return '/assets/images/COLLEGE/smu.svg';
        break;
        case 'southalabama':
        return '/assets/images/COLLEGE/southalabama.svg';
        break;
        case 'southcarolina':
        return '/assets/images/COLLEGE/southcarolina.svg';
        break;
        case 'southernmiss':
        return '/assets/images/COLLEGE/southernmiss.svg';
        break;
        case 'southflorida':
        return '/assets/images/COLLEGE/southflorida.svg';
        break;
        case 'stanford':
        return '/assets/images/COLLEGE/stanford.svg';
        break;
        case 'syracuse':
        return '/assets/images/COLLEGE/syracuse.svg';
        break;
        case 'tcu':
        return '/assets/images/COLLEGE/tcu.svg';
        break;
        case 'temple':
        return '/assets/images/COLLEGE/temple.svg';
        break;
        case 'tennessee':
        return '/assets/images/COLLEGE/tennessee.svg';
        break;
        case 'texas':
        return '/assets/images/COLLEGE/texas.svg';
        break;
        case 'texasa&m':
        return '/assets/images/COLLEGE/texasam.svg';
        break;
        case 'texastech':
        return '/assets/images/ttu.svg';
        break;
        case 'tulane':
        return '/assets/images/COLLEGE/tulane.svg';
        break;
        case 'tulsa':
        return '/assets/images/COLLEGE/tulsa.svg';
        break;
        case 'uab':
        return '/assets/images/COLLEGE/uab.svg';
        break;
        case 'centralflorida':
        return '/assets/images/COLLEGE/ucf.svg';
        break;
        case 'ucla':
        return '/assets/images/COLLEGE/ucla.svg';
        break;
        case 'northcarolina':
        return '/assets/images/COLLEGE/unc.svg';
        break;
        case 'unlv':
        return '/assets/images/COLLEGE/unlv.svg';
        break;
        case 'usc':
        return '/assets/images/COLLEGE/usc.svg';
        break;
        case 'utah':
        return '/assets/images/COLLEGE/utah.svg';
        break;
        case 'utahstate':
        return '/assets/images/COLLEGE/utahstate.svg';
        break;
        case 'texaselpaso':
        return '/assets/images/COLLEGE/utep.svg';
        break;
        case 'texsanantonio':
        return '/assets/images/COLLEGE/utsa.svg';
        break;
        case 'vanderbilt':
        return '/assets/images/COLLEGE/vanderbilt.svg';
        break;
        case 'virginia':
        return '/assets/images/COLLEGE/virginia.svg';
        break;
        case 'virginiatech':
        return '/assets/images/virginiatech.svg';
        break;
        case 'wakeforest':
        return '/assets/images/COLLEGE/wakeforest.svg';
        break;
        case 'washington':
        return '/assets/images/COLLEGE/washington.svg';
        break;
        case 'washingtonstate':
        return '/assets/images/COLLEGE/washingtonstate.svg';
        break;
        case 'westernmichigan':
        return '/assets/images/COLLEGE/westernmichigan.svg';
        break;
        case 'wisconsin':
        return '/assets/images/COLLEGE/wisconsin.svg';
        break;
        case 'westvirginia':
        return '/assets/images/COLLEGE/wvu.svg';
        break;
        case 'wyoming':
        return '/assets/images/COLLEGE/wyoming.svg';
        break;
        default:
        return '/assets/images/COLLEGE/ncaaf.svg';
      }
    }

    //This method takes in a team name and returns the path to the team image
    //Use for MLB only
    // static setMLBTeamImage(team){
    //   switch (team){
    //     case 'New York Mets':
    //     return '/assets/images/mets.png';
    //     break;
    //     case 'Minnesota Twins':
    //     return '/assets/images/twins.png';
    //     break;
    //     case 'Baltimore Orioles':
    //     return '/assets/images/orioles.png';
    //     break;
    //     case 'Pittsburgh Pirates':
    //     return '/assets/images/pirates.png';
    //     break;
    //     case 'Detroit Tigers':
    //     return '/assets/images/tigers.png';
    //     break;
    //     case 'Kansas City Royals':
    //     return '/assets/images/royals.png';
    //     break;
    //     case 'Seattle Mariners':
    //     return '/assets/images/mariners.png';
    //     break;
    //     case 'Arizona Diamondbacks':
    //     return '/assets/images/diamondbacks.png';
    //     break;
    //     case 'San Francisco Giants':
    //     return '/assets/images/giants.png';
    //     break;
    //     case 'Tampa Bay Rays':
    //     return '/assets/images/rays.png';
    //     break;
    //     case 'Texas Rangers':
    //     return '/assets/images/rangers.png';
    //     break;
    //     case 'Milwaukee Brewers':
    //     return '/assets/images/brewers.png';
    //     break;
    //     case 'New York Yankees':
    //     return '/assets/images/yankees.png';
    //     break;
    //     case 'Washington Nationals':
    //     return '/assets/images/nationals.png';
    //     break;
    //     case 'Houston Astros':
    //     return '/assets/images/astros.png';
    //     break;
    //     case 'Los Angeles Dodgers':
    //     return '/assets/images/dodgers.png';
    //     break;
    //     case 'Atlanta Braves':
    //     return '/assets/images/braves.png';
    //     break;
    //     case 'Chicago Cubs':
    //     return '/assets/images/cubs.png';
    //     break;
    //     case 'Miami Marlins':
    //     return '/assets/images/marlins.png';
    //     break;
    //     case 'Boston Red Sox':
    //     return '/assets/images/redsox.png';
    //     break;
    //     case 'Los Angeles Angels':
    //     return '/assets/images/angels.png';
    //     break;
    //     case 'Oakland Athletics':
    //     return '/assets/images/athletics.png';
    //     break;
    //     case 'Cincinnati Reds':
    //     return '/assets/images/reds.png';
    //     break;
    //     case 'San Diego Padres':
    //     return '/assets/images/padres.png';
    //     break;
    //     case 'Toronto Blue Jays':
    //     return '/assets/images/bluejays.png';
    //     break;
    //     case 'Cleveland Indians':
    //     return '/assets/images/indians.png';
    //     break;
    //     case 'Colorado Rockies':
    //     return '/assets/images/rockies.png';
    //     break;
    //     case 'Philadelphia Phillies':
    //     return '/assets/images/phillies.png';
    //     break;
    //     case 'St. Louis Cardinals':
    //     return '/assets/images/cardinals.png';
    //     break;
    //     case 'Chicago White Sox':
    //     return '/assets/images/whitesox.png';
    //     break;
    //     default:
    //     return '/assets/images/mlb.svg';
    //   }
    // }

  }

  module.exports = JsonOdds;
