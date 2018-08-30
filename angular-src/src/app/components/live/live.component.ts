import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  eventsArray:any = [];
  eventOddsArray:any = [];
  sport:any;
  interval:any;

  constructor(
    private userService:UserService,
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    this.sport = this.dataService.getSports();
    var league = this.dataService.getLeague();
    this.getLiveEvents(this.sport, league);

    this.interval = setInterval(() => {
      this.refreshLiveEventOdds(this.eventsArray);
      console.log('Getting Live Odds for ' + this.sport);
    }, 10000);

  }

  ngOnDestroy(){
    clearInterval(this.interval);
    console.log('Destroyed');
  }

  getLiveEvents(sportId, leagueId){
    this.oddsService.getLiveEvents(sportId, leagueId).then(
      (events) => {
        this.eventsArray = events;
        this.getLiveEventOdds(this.eventsArray);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getLiveEventOdds(events){
    for(var i = 0; i < events.length; i++){
      this.oddsService.getLiveEventOdds(events[i].id, events[i].homeTeam, events[i].homeTeamImage, events[i].awayTeam, events[i].awayTeamImage, events[i].sport, events[i].epoch).subscribe(data =>{
        this.eventOddsArray.push(data);
        this.eventOddsArray = this.sortEventOdds(this.eventOddsArray);
        console.log(this.eventOddsArray);
      });
    }
  }

  refreshLiveEventOdds(events){
    for(var i = 0; i < events.length; i++){
      this.oddsService.getLiveEventOdds(events[i].id, events[i].homeTeam, events[i].homeTeamImage, events[i].awayTeam, events[i].awayTeamImage, events[i].sport, events[i].epoch).subscribe(data =>{
        for(var i = 0; i < this.eventOddsArray.length; i++){
          if(this.eventOddsArray[i].id == data.id){
            this.eventOddsArray[i] = data;
          }
        }
      });
    }
  }

  sortEventOdds(odds:any []){
    if(odds.length == 1){
      return odds;
    } else {
      for(var i = 0; i < odds.length; i++){
        for(var j = 0; j < odds.length - 1 - i; j++){
          if(odds[j].epoch > odds[j+1].epoch){
            var tmpOdds = odds[j];
            odds[j] = odds[j+1];
            odds[j+1] = tmpOdds;
          }
        }
      }
      return odds;
    }
  }

  placeBet(action,type){
    action.betType = type;
    this.authService.getProfile().subscribe(profile => {
      this.dataService.addStraightBet(action, profile, 'live');
      this.router.navigate(['confirm']);
    },
    err =>{
      this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
      return false;
    });
  }

  placeBetWithIndex(action, type, oddsArray, i){
    var oddsArrNum = oddsArray[i].number;
    var oddsArrOdds = oddsArray[i].odds;
    if(type == 'homeTeamRL'){
      action.homeTeamRL = oddsArrNum;
      action.homeTeamRLOdds = oddsArrOdds;
    } else if(type == 'awayTeamRL'){
      action.awayTeamRL = oddsArrNum;
      action.awayTeamRLOdds = oddsArrOdds;
    } else if(type == 'over'){
      action.over.number = oddsArrNum;
      action.over.odds = oddsArrOdds;
    } else if(type == 'under'){
      action.under.number = oddsArrNum;
      action.under.odds = oddsArrOdds;
    }
    this.placeBet(action, type);
  }

  addPlus(odds){
    odds = parseFloat(odds);

    if(odds>0){
      return '+';
    }else{
      return '';
    }
  }

  showOdds(odds){
    console.log(odds);
    odds = parseFloat(odds);

    if(odds != 0 && odds != null && odds != undefined && odds > -400 && odds < 400){
      return true;
    } else {
      return false;
    }
  }

}
