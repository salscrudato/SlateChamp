import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-straight',
  templateUrl: './straight.component.html',
  styleUrls: ['./straight.component.css']
})
export class StraightComponent implements OnInit {

  actions:any = [];
  sport:number;

  constructor(
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    var tempActions = this.dataService.getJsonOddsEvents();
    this.sport = this.dataService.getSports();
    if(tempActions.length>0){
      this.setUpActions(tempActions, this.sport);
    } else {
      this.getOdds();
    }
    console.log(this.actions);
  }

  getOdds(){
    var tempArr = [];
    this.oddsService.getOdds().subscribe(data =>{
      for (var i = 0; i < data.length; i++) {
        if(data[i].sport == this.sport){
          var tmpGameDate = new Date(data[i].epoch).getDate();
          //Add logic to get league date here and only add games that occur on that date
          // if(tmpGameDate == 9){
          this.actions.push(data[i]);
          this.actions = this.sortEventOdds(this.actions);
        }
        // }
      }
    });
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

  setUpActions(tempActions, sport){
    for (var i = 0; i < tempActions.length; i++){
      if(tempActions[i].sport == sport){
        this.actions.push(tempActions[i]);
      }
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

  // placeGolf(tourn, part){
  //   tourn.betType = 'golf';
  //   tourn.participant = part;
  //   this.authService.getProfile().subscribe(profile => {
  //     this.dataService.addStraightBet(tourn, profile, 'straight');
  //     this.router.navigate(['confirm']);
  //   },
  //   err =>{
  //     this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
  //     return false;
  //   });
  // }

  addPlus(odds){
    odds = parseFloat(odds);

    if(odds>0){
      return '+';
    }else{
      return odds;
    }
  }

}
