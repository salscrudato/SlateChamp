import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {OddsService} from '../../services/odds.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-live-menu',
  templateUrl: './live-menu.component.html',
  styleUrls: ['./live-menu.component.css']
})
export class LiveMenuComponent implements OnInit {

  soccer:any = [];
  soccerLeagues:any = [];

  constructor(
    private router:Router,
    private dataService:DataService,
    private oddsService:OddsService
  ) {}

  ngOnInit() {
    this.soccer = [{league:'England Premier League', id:94}, {league:'England League 1', id:587}, {league:'UEFA', id:6542}, {league:'UEFA Europe League Qualifying', id:5823},
    {league:'Italy Serie A', id:199}, {league:'Spain Primera Liga', id:207}, {league:'Spain Copa Federacion', id:429},
    {league:'Germany Bundesliga 1', id:123}, {league:'France Ligue 1', id:99}, {league:'USA MLS', id:242}, {league:'Elite Cup Friendlies', id:631},
    {league:'Europe Friendlies', id:363}, {league:'Russia Premier League', id:153}, {league:'Republic of Ireland Premier Division', id:398},
    {league:'Copa Sudamericano', id:445}, {league:'Brazil Serie A', id:155}];
    this.getLiveEvents(1,0);
  }

  navigate(sport, league){
    this.dataService.addSport(sport);
    this.dataService.setLeague(league);
    this.router.navigate(['/live']);
  }

  getLiveEvents(sportId, leagueId){
    this.oddsService.getLiveEvents(sportId, leagueId).then(
      (events) => {
        this.soccerLeagues = events;
        for (var i = 0; i < this.soccer.length; i++){
          var live = false;
          for(var j = 0; j < this.soccerLeagues.length; j++){
            if(this.soccer[i].id == this.soccerLeagues[j].league){
              live = true;
            }
          }
          this.soccer[i].live = live;
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
