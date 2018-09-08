import { Component, OnInit } from '@angular/core';
import {LeagueService} from '../../services/league.service';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {BetService} from '../../services/bets.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  leagues:any = [];
  playerIds:any = [];
  players:any = [];

  tmpBets:any = [];

  constructor(
    private leagueService:LeagueService,
    private userService:UserService,
    private betService:BetService
  ) { }

  ngOnInit() {
    this.getAllLeagues();
  }

  getAllLeagues(){
    this.leagueService.getAllLeagues().subscribe(leagues => {
      for(var i = 0; i < leagues.length; i++){
        if(leagues[i].status == 'open'){
        this.leagues.push(leagues[i]);
        for (var j = 0; j < leagues[i].participants.length; j++){
          this.playerIds.push(leagues[i].participants[j]._id);
        }
      }
      }
      this.getAllPlayers(this.playerIds);
    });
  }

  getAllPlayers(players){
    for(var i = 0; i < players.length; i++){
      this.userService.getProfileById(players[i]).then(
        (player) => {
          console.log(player);
          this.players.push(player);
          this.leagues[0].participants = this.sortPlayers(this.players);
        }
      );
    }
  }

  getPlayerBets(playerId){

    var curTime = new Date;
    var tmpEndDate = new Date('9/9/2018');
    var endDate = new Date(tmpEndDate.getTime() + (13*60*60*1000));
    console.log(curTime);
    console.log(endDate);

    if(curTime > endDate){
      this.betService.getBetsById(playerId, 'all').subscribe(bets => {
        for(var i = 0; i < bets.length; i++){
          this.tmpBets.push('Bet # ' + i + ':\n' + bets[i].betType + ': ' + bets[i].description.replace(',',' parlayed with '));
          // this.tmpBets.push(bets[i].betType + ': ' + bets[i].description.replace(',',' parlayed with ') + '\n');
        }
      }, error =>{
        console.log(error);
        return false;
      });

    } else {
      this.tmpBets.push('Bets cannot be viewed until the contest locks');
    }
  }

  closeModal(){
    this.tmpBets = [];
  }

  sortPlayers(players){
    if(players.length==1){
      return players;
    }else{
      for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length - i - 1; j++){
          if(players[j].currentBalance < players[j+1].currentBalance){
            var tmpPlayer = players[j];
            players[j] = players[j+1];
            players[j+1] = tmpPlayer;
          }
        }
      }
      return players;
    }
  }

}
