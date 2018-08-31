import {Component, OnInit} from '@angular/core';
import {BetService} from '../../services/bets.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Bet} from '../../../../../classes/bet';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit{

  bet:any = [];
  betType:string;
  betAmount:number;
  odds:number;
  clickedSubmit:boolean = false;
  user:any;
  amountPending:number = 0;
  timer:any;

  constructor(
    private dataService: DataService,
    private betService: BetService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private oddsService: OddsService,
    private authService: AuthService
  ){}

  ngOnInit(){
    this.betType = this.dataService.getBetType().toUpperCase();
    // if(this.betType != 'PROP' && this.betType != 'FUTURE'){
    this.bet = this.dataService.getBet();
    this.getProfileAndAllBets();
    this.setBetDetailsAndOdds(this.bet);
    this.odds = this.calculateOdds(this.bet);
    this.timer = setTimeout(() => {
      this.flashMessage.show('You have been re-directed due to inactivity, please try again', {cssClass: 'alert-warning'});
      this.router.navigate(['menu']);
    }, 60000);
    // } else {
    //   this.bet = this.dataService.getPropBet();
    //   this.odds = this.bet.odds;
    //   this.bet.betDetails = this.bet.details;
    //   this.getProfileAndAllBets();
    // }
  }

  //Gets current logged in user and then gets corresponding bets for that user
  getProfileAndAllBets(){
  this.authService.getProfile().subscribe(profile => {
    this.user = profile.user;
    this.betService.getBets(profile, 'all').subscribe(bets => {
      for(var i = 0; i < bets.length; i++){
        if(bets[i].status == 'open'){
          this.amountPending = this.amountPending + bets[i].betAmount;
        }
      }
    }, error =>{
      console.log(error);
      return false;
    });
  },
  error =>{
    console.log(error);
    return false;
  });
}

// placePropBet(){
//   this.clickedSubmit = true;
//   if(this.betAmount > 0){
//     let customBet = {
//       userId: this.user._id,
//       username: this.user.username,
//       description: this.bet.details,
//       odds: this.bet.odds,
//       betAmount: this.betAmount,
//       winAmount: this.calcWinAmount(this.bet.odds, this.betAmount),
//       status: 'open'
//     }
//     this.betService.placePropBet(customBet).subscribe(data => {
//       if(data){
//         this.router.navigate(['menu']);
//         this.flashMessage.show('Bet Placed', {cssClass: 'alert-success'});
//       }
//     });
//   } else {
//     this.clickedSubmit = false;
//     this.flashMessage.show('You must enter a number greater than 0', {cssClass: 'alert-warning'});
//   }
// }

placeStraightBet(){
  this.clickedSubmit = true;
  if(this.betAmount > 0){
    var profile = this.dataService.getProfile();
    var winAmount = this.calcWinAmount(this.odds, this.betAmount);
    var confirmedBet = new Bet(profile, this.bet, this.bet[0].source, this.odds, this.betAmount, winAmount, this.betType);
    this.betService.placeBet(confirmedBet).subscribe(data => {
      if(data.success){
        clearTimeout(this.timer);
        this.router.navigate(['menu']);
        this.flashMessage.show('Bet Placed', {cssClass: 'alert-success'});
      } else {
        clearTimeout(this.timer);
        this.flashMessage.show('Error placing bet - odds are expired', {cssClass: 'alert-warning'});
        this.router.navigate(['menu']);
      }
    });
  } else {
    this.clickedSubmit = false;
    this.flashMessage.show('You must enter a number greater than 0', {cssClass: 'alert-warning'});
  }
}

placeLiveBet(){
  clearTimeout(this.timer);
  this.clickedSubmit = true;
  this.flashMessage.show('To provide the best user experience, we never take lines down.  Please allow 12 seconds to confirm this bet.', {cssClass: 'alert-success', timeout: 15000});
  setTimeout(() => {
    var betIsStillGood = true;
    var tmpBet = this.bet[0];
    this.oddsService.getLiveEventOdds(tmpBet.id, tmpBet.homeTeam, tmpBet.homeTeamImage, tmpBet.awayTeam, tmpBet.awayTeamImage, tmpBet.sport, tmpBet.epoch).subscribe(data =>{
      data.betType = tmpBet.betType;

      for(var prop in data){
        if(prop == 'homeTeamML'){
          var tmpData = parseInt(data[prop]);
          if (tmpData < 0){
            tmpData = tmpData * -1;
          }
          var tmpLow = tmpData * 0.96;
          var tmpHigh = tmpData * 1.04;

          if(tmpData < tmpLow || tmpData > tmpHigh){
            betIsStillGood = false;
          }
        } else if (prop == 'awayTeamML'){
          var tmpData = parseInt(data[prop]);
          if (tmpData < 0){
            tmpData = tmpData * -1;
          }
          var tmpLow = tmpData * 0.96;
          var tmpHigh = tmpData * 1.04;
          if(tmpData < tmpLow || tmpData > tmpHigh){
            betIsStillGood = false;
          }
        }
      }
      if(betIsStillGood){
        var profile = this.dataService.getProfile();
        var winAmount = this.calcWinAmount(this.odds, this.betAmount);
        var confirmedBet = new Bet(profile, this.bet, this.bet[0].source, this.odds, this.betAmount, winAmount, this.betType);
        this.betService.placeBet(confirmedBet).subscribe(data => {
          if(data.success){
            this.router.navigate(['profile']);
          } else {
            this.flashMessage.show('Error placing bet', {cssClass: 'alert-warning'});
            this.router.navigate(['menu']);
          }
        });
      } else {
        this.flashMessage.show('Error placing bet - odds are no longer valid', {cssClass: 'alert-warning'});
        this.bet[0] = data;
        this.setBetDetailsAndOdds(this.bet);
        this.odds = this.calculateOdds(this.bet);
        this.clickedSubmit = false;
      }

    });
  }, 16000);
}

clickPlaceBet(){
  var tmpEndDate = new Date('9/1/2018');
  var endDate = new Date(tmpEndDate.getTime() + (12*60*60*1000));
  var curDate = new Date();
  console.log(endDate);
  console.log(curDate);
  var curAvail = this.user.credit + this.user.currentBalance - this.amountPending;

  if(curDate > endDate){
    this.flashMessage.show('Bets for this league cant be placed after ' + endDate, {cssClass: 'alert-warning'});
  } else if(this.betAmount < curAvail){
    if(((this.odds)/100 < 100) && this.odds != 0){
      if(this.betType=='LIVE'){
        this.placeLiveBet();
      } else {
        this.placeStraightBet();
      }
    } else {
      this.flashMessage.show('Bet exceeds maximum payout ratio', {cssClass: 'alert-warning'});
    }
  } else {
    this.flashMessage.show('Insufficient funds, available balance: $' + curAvail, {cssClass: 'alert-warning'});
  }
}

cancelBet(){
  clearTimeout(this.timer);
  this.router.navigate(['menu']);
}

setBetDetailsAndOdds(bets){
  for(var i = 0; i < bets.length; i++){
    bets[i] = this.setBetDescription(bets[i]);
  }
}

setBetDescription(bet){
  const awayTeam = bet.awayTeam;
  const homeTeam = bet.homeTeam;
  switch(bet.betType){
    case 'awayTeamRL':
    const awayTeamRL = bet.awayTeamRL;
    const awayTeamRLOdds = bet.awayTeamRLOdds;
    bet.betDetails = awayTeam + " Spread " + awayTeamRL + " " + awayTeamRLOdds;
    bet.odds = awayTeamRLOdds;
    bet.line = awayTeamRL;
    break;
    case 'homeTeamRL':
    const homeTeamRL = bet.homeTeamRL;
    const homeTeamRLOdds = bet.homeTeamRLOdds;
    bet.betDetails = homeTeam + " Spread " + homeTeamRL + " " + homeTeamRLOdds;
    bet.odds = homeTeamRLOdds;
    bet.line = homeTeamRL;
    break;
    case 'awayTeamRLTeaser':
    const awayTeamRLTeaser = bet.awayTeamRL;
    bet.betDetails = awayTeam + " Spread " + awayTeamRLTeaser;
    bet.betType = 'awayTeamRL';
    break;
    case 'homeTeamRLTeaser':
    const homeTeamRLTeaser = bet.homeTeamRL;
    bet.betDetails = homeTeam + " Spread " + homeTeamRLTeaser;
    bet.betType = 'homeTeamRL';
    break;
    case 'awayTeamML':
    const awayTeamML = bet.awayTeamML;
    bet.betDetails = awayTeam + " Money Line " + awayTeamML;
    bet.odds = awayTeamML;
    break;
    case 'homeTeamML':
    const homeTeamML = bet.homeTeamML;
    bet.betDetails = homeTeam + " Money Line " + homeTeamML;
    bet.odds = homeTeamML;
    break;
    case 'over':
    if(bet.overLine != undefined && bet.overLine != null){
      bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.totalNumber + ' ' + bet.overLine;
      bet.odds = bet.overLine;
      bet.line = bet.totalNumber;
    } else {
      bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.over.number + ' ' + bet.over.odds;
      bet.odds = bet.over.odds;
      bet.line = bet.over.number;
    }
    break;
    case 'under':
    if(bet.underLine != undefined && bet.underLine != null){
      bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.totalNumber + ' ' + bet.underLine;
      bet.odds = bet.underLine;
      bet.line = bet.underLine;
    } else {
      bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.under.number + ' ' + bet.under.odds;
      bet.odds = bet.under.odds;
      bet.line = bet.totalNumber;
    }
    break;
    // case 'draw':
    // bet.betDetails = awayTeam + " @ " + homeTeam + " Draw " + bet.drawOdds;
    // bet.odds = bet.drawOdds;
    // break;
    // case 'awayTeamFirstHalf':
    // bet.betDetails = awayTeam + ' First 5 Innings ' + bet.awayTeamFirstHalf;
    // bet.odds = bet.awayTeamFirstHalf;
    // break;
    // case 'homeTeamFirstHalf':
    // bet.betDetails = homeTeam + ' First 5 Innings ' + bet.homeTeamFirstHalf;
    // bet.odds = bet.homeTeamFirstHalf;
    // break;
    // case 'awayTeamFirstHalfFB':
    // bet.betDetails = awayTeam + ' First Half ' + bet.awayTeamFirstHalf;
    // bet.odds = bet.awayTeamFirstHalf;
    // break;
    // case 'homeTeamFirstHalfFB':
    // bet.betDetails = homeTeam + ' First Half ' + bet.homeTeamFirstHalf;
    // bet.odds = bet.homeTeamFirstHalf;
    // break;
    // case 'awayTeamFirstHalfSpread':
    // const awayTeamFirstHalfSpread = bet.awayTeamRLFirstHalf;
    // const awayTeamFirstHalfSpreadOdds = bet.awayTeamRLOddsFirstHalf;
    // bet.betDetails = awayTeam + " Spread " + awayTeamFirstHalfSpread + " " + awayTeamFirstHalfSpreadOdds;
    // bet.odds = awayTeamFirstHalfSpreadOdds;
    // bet.line = bet.awayTeamRLFirstHalf;
    // break;
    // case 'homeTeamFirstHalfSpread':
    // const homeTeamFirstHalfSpread = bet.homeTeamRLFirstHalf;
    // const homeTeamFirstHalfSpreadOdds = bet.homeTeamRLOddsFirstHalf;
    // bet.betDetails = homeTeam + " Spread " + homeTeamFirstHalfSpread + " " + homeTeamFirstHalfSpreadOdds;
    // bet.odds = homeTeamFirstHalfSpreadOdds;
    // bet.line = bet.homeTeamRLFirstHalf;
    // break;
    // case 'firstHalfOverFB':
    // bet.betDetails = awayTeam + ' @ ' + homeTeam + 'First Half Over ' + bet.firstHalfOver + ' ' +  bet.firstHalfOverOdds;
    // bet.odds = bet.firstHalfOverOdds;
    // bet.line = bet.firstHalfOver;
    // break;
    // case 'firstHalfUnderFB':
    // bet.betDetails = awayTeam + ' @ ' + homeTeam + 'First Half Under ' + bet.firstHalfUnder + ' ' +  bet.firstHalfUnderOdds;
    // bet.odds = bet.firstHalfUnderOdds;
    // bet.line = bet.firstHalfUnder;
    // break;
    // case 'homeTeamFirstHalf':
    // bet.betDetails = awayTeam + ' First 5 Innings ' + bet.homeTeamFirstHalf;
    // bet.odds = bet.homeTeamFirstHalf;
    // break;
    // case 'homeTeamOver':
    // bet.betDetails = homeTeam + ' Over ' + bet.homeTeamTotalLine;
    // bet.odds = bet.homeTeamOverOdds;
    // break;
    // case 'homeTeamUnder':
    // bet.betDetails = homeTeam + ' Under ' + bet.homeTeamTotalLine;
    // bet.odds = bet.homeTeamUnderOdds;
    // break;
    // case 'awayTeamOver':
    // bet.betDetails = awayTeam + ' Over ' + bet.awayTeamTotalLine;
    // bet.odds = bet.awayTeamOverOdds;
    // break;
    // case 'awayTeamUnder':
    // bet.betDetails = awayTeam + ' Under ' + bet.awayTeamTotalLine;
    // bet.odds = bet.awayTeamUnderOdds;
    // break;
    // case 'runInFirst':
    // bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Run In First';
    // bet.odds = bet.runInFirst;
    // break;
    // case 'noRunInFirst':
    // bet.betDetails = awayTeam + ' @ ' + homeTeam + ' No Runs In First';
    // bet.odds = bet.noRunInFirst;
    // break;
    // case 'bothScoreYes':
    // bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Both Score - Yes ' + bet.bothScoreYes;
    // bet.odds = bet.bothScoreYes;
    // break;
    // case 'bothScoreNo':
    // bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Both Score - No ' + bet.bothScoreNo;
    // bet.odds = bet.bothScoreNo;
    // break;
    // case 'golf':
    // bet.betDetails = bet.participant.name + ' (' + bet.participant.odds + ')' + ' To win the ' + bet.eventName;
    // bet.odds = bet.participant.odds;
    // break;
    // case 'overUFC':
    // bet.betDetails = bet.awayTeam + ' @ ' + bet.homeTeam + ' Over ' + bet.totalNumber + ' ' + bet.overLine;
    // bet.odds = bet.overLine;
    // break;
    // case 'underUFC':
    // bet.betDetails = bet.awayTeam + ' @ ' + bet.homeTeam + ' Under ' + bet.totalNumber + ' ' + bet.underLine;
    // bet.odds = bet.underLine;
    // break;
    case 'underTeaser':
    bet.betDetails = bet.awayTeam + ' @ ' + bet.homeTeam + ' Under ' + bet.totalNumberTeaserUnder;
    bet.totalNumber = bet.totalNumberTeaserUnder;
    bet.betType = 'under';
    break;
    case 'overTeaser':
    bet.betDetails = bet.awayTeam + ' @ ' + bet.homeTeam + ' Over ' + bet.totalNumberTeaserOver;
    bet.totalNumber = bet.totalNumberTeaserOver;
    bet.betType = 'over'
    break;
    default:
    break;
  }
  return bet;
}

placeBet(bet){
  this.betService.placeBet(bet).subscribe(data => {
    if(data.success){
      this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
      this.router.navigate(['profile']);
    } else {
      this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      this.router.navigate(['menu']);
    }
  })
}

calcWinAmount(odds, betAmount){
  if(odds > 0){
    return this.round((odds/100) * betAmount);
  } else {
    return this.round(betAmount / (odds*-1) * 100);
  }
}

round(amount){
  return Math.round(amount);
}

addPlus(odd){
  if(odd > 0){
    return "+" + odd;
  } else {
    return odd;
  }
}

calculateOdds(bets){
  if(bets.length == 1){
    return parseInt(bets[0].odds);
  } else if (this.betType == 'TEASER'){
    return -120;
  } else {
    var oddsArray = [];
    for(var i = 0; i < bets.length; i++){
      var tempOdds = parseInt(bets[i].odds);
      if(tempOdds > 0){
        oddsArray.push((100+tempOdds)/100);
      } else {
        oddsArray.push((100+(tempOdds*-1))/(tempOdds*-1));
      }
    }
    return this.round((oddsArray.reduce(function(a,b){return a*b;}) -1 ) * 100);
  }
}

}
