import { Component, OnInit } from '@angular/core';
import {LeagueService} from '../../services/league.service';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
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

  constructor(
    private leagueService:LeagueService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.getAllLeagues();
  }

  getAllLeagues(){
    this.leagueService.getAllLeagues().subscribe(leagues => {
      for(var i = 0; i < leagues.length; i++){
        this.leagues.push(leagues[i]);
        for (var j = 0; j < leagues[i].participants.length; j++){
          this.playerIds.push(leagues[i].participants[j]._id);
        }
      }
      this.getAllPlayers(this.playerIds);
    });
  }

  getAllPlayers(players){
    for(var i = 0; i < players.length; i++){
      this.userService.getProfileById(players[i]).then(
        (player) => {
          this.players.push(player);
          this.leagues[0].participants = this.sortPlayers(this.players);
        }
      );
    }
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