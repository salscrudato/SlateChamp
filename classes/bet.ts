export class Bet {
  userId:string;
  username:string;
  source:string;
  description:any = [];
  odds:number;
  betAmount:number;
  winAmount:number;
  gameDate:string;
  gameTime:string;
  epoch:number;
  betType:string;
  subBets:any = [];
  constructor(profile, bet, source, odds, betAmount, winAmount, betType){
    this.userId = profile.user._id;
    this.username = profile.user.username;
    for (var i = 0; i < bet.length; i++){
      this.description.push(bet[i].betDetails);
      this.subBets.push(bet[i]);
    }
    this.source = source;
    this.odds = odds;
    this.betAmount = betAmount;
    this.winAmount = winAmount;

    var tmpIndex = 0;
    var tmpTime = 0;
    for (var i = 0; i < bet.length; i++){
      if(bet[i].epoch > tmpTime){
        tmpTime = bet[i].epoch;
        tmpIndex = i;
      }
    }
    this.epoch = tmpTime;
    this.gameDate = bet[tmpIndex].matchDate;
    this.gameTime = bet[tmpIndex].matchTime;
    this.betType = betType;
  }
}
