import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  eventsArray:any = [];
  eventOddsArray:any = [];
  sport:number = 0;

  constructor(
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    this.eventsArray = [];
    this.sport = this.dataService.getSports();
    var league = this.dataService.getLeague();
    this.getEvents(this.sport, league);
  }

  getEvents(sportId, leagueId){
    this.oddsService.getUpcomingEvents(sportId, leagueId).then(
      (events) => {
        for(var i = 0; i < events.length; i++){
          this.eventsArray.push(events[i]);
        }
        this.getUpcomingEventOdds(this.eventsArray);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUpcomingEventOdds(events){
    for(var i = 0; i < events.length; i++){
      this.oddsService.getUpcomingEventOdds(events[i].id, events[i].homeTeam, events[i].awayTeam, events[i].time, events[i].sport).subscribe(data =>{
        if(data.id != undefined){
          this.eventOddsArray.push(data);
          this.eventOddsArray = this.sortEventOdds(this.eventOddsArray);
        }
        console.log(this.eventOddsArray);
      });
    }
  }

  sortEventOdds(odds){
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

  showBaseballDetails(action){
    if(action.awayTeamFirstHalf != 0 || action.homeTeamFirstHalf != 0 || action.awayTeamTotalLine != 0 || action.homeTeamTotalLine != 0 || action.awayTeamRL.length > 0 || action.homeTeamRL.length > 0 || action.runInFirst != 0){
      return true;
    } else {
      return false;
    }
  }

  showFootballDetails(action){
    if(action.awayTeamFirstHalf != 0 || action.homeTeamFirstHalf != 0 || action.awayTeamRLFirstHalf != 0 || action.homeTeamRLFirstHalf || action.firstHalfOver != 0 || action.firstHalfUnder){
      return true;
    } else {
      return false;
    }
  }

  placeBet(action,type){
    action.betType = type;
    this.authService.getProfile().subscribe(profile => {
      this.dataService.addStraightBet(action, profile, 'straight');
      this.router.navigate(['confirm']);
    },
    err =>{
      this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
      return false;
    });
  }

  placeBetWithIndex(action, type, oddsArray, i){
    action.betType = type;
    if(type='awayTeamRL'){
      action.awayTeamRL = oddsArray[i].number;
      action.awayTeamRLOdds = oddsArray[i].odds;
    }
    if(type='homeTeamRL'){
      action.homeTeamRL = oddsArray[i].number;
      action.homeTeamRLOdds = oddsArray[i].odds;
    }
    this.authService.getProfile().subscribe(profile => {
      this.dataService.addStraightBet(action, profile, 'straight');
      this.router.navigate(['confirm']);
    },
    err =>{
      this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
      return false;
    });
  }

}
