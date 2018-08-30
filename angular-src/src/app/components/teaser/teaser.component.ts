import { Component, OnInit } from '@angular/core';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css']
})
export class TeaserComponent implements OnInit {

  odds:any = [];
  teaser:any = [];
  sport:number;
  teaserNum:number;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private oddsService:OddsService,
    private dataService:DataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.teaserNum = this.dataService.getTeaser();
    this.sport = this.dataService.getSports();
    var tmpOdds = this.dataService.getJsonOddsEvents();
    if(tmpOdds.length>0){
      this.setUpActions(tmpOdds, this.sport);
    } else {
      this.getOdds();
    }
  }

  setUpActions(tempActions, sport){
    for (var i = 0; i < tempActions.length; i++){
      if(tempActions[i].sport == sport){
        if(this.teaserNum == 2){
          tempActions[i].homeTeamRL = this.addPlus(parseFloat(tempActions[i].homeTeamRL) + 6);
          tempActions[i].awayTeamRL = this.addPlus(parseFloat(tempActions[i].awayTeamRL) + 6);
          tempActions[i].totalNumberTeaserOver = parseFloat(tempActions[i].totalNumber) - 6;
          tempActions[i].totalNumberTeaserUnder = parseFloat(tempActions[i].totalNumber) + 6;
        } else {
          tempActions[i].homeTeamRL = this.addPlus(parseFloat(tempActions[i].homeTeamRL) + 10);
          tempActions[i].awayTeamRL = this.addPlus(parseFloat(tempActions[i].awayTeamRL) + 10);
          tempActions[i].totalNumberTeaserOver = parseFloat(tempActions[i].totalNumber) - 10;
          tempActions[i].totalNumberTeaserUnder = parseFloat(tempActions[i].totalNumber) + 10;
        }
        this.odds.push(tempActions[i]);
      }
    }
  }

  addPlus(odd){
    if (odd > 0){
      return '+' + odd;
    } else {
      return odd;
    }
  }

  teaserCheckboxClick(event, odd, type){
    if(event.target.checked==true){
      odd.betType = type;
      if(this.duplicateCheck(odd.id)){
        this.flashMessage.show('Only one bet is allowed per game', {cssClass: 'alert-danger', timeout:2000});
        event.target.checked=false;
      } else {
        this.teaser.push(odd);
      }
    } else {
      this.removeTeaserItem(odd.id);
    }
    console.log(this.teaser);
  }

  removeTeaserItem(oddsId){
    for(var i = 0; i < this.teaser.length; i++){
      if (this.teaser[i].id === oddsId){
        this.teaser.splice(i,1);
      }
    }
  }

  duplicateCheck(oddsId){
    for(var i = 0; i < this.teaser.length; i++){
      if (this.teaser[i].id == oddsId){
        return true;
      }
    }
    return false;
  }

  placeBet(){
    if(this.teaser.length != this.teaserNum){
      this.flashMessage.show('Please select ' + this.teaserNum + ' bets', {cssClass: 'alert-danger'});
    } else {
      this.authService.getProfile().subscribe(profile => {
        this.dataService.addMultipleBet(this.teaser, profile, 'teaser');
        this.router.navigate(['confirm']);
      },
      err =>{
        this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
        return false;
      });
    }
  }

  getOdds(){
    var tempArrId = [];
    var tempArr = [];
    this.oddsService.getOdds().subscribe(data =>{
      for (var i = 0; i < data.length; i++) {
        if(data[i].sport == this.sport){
          tempArr.push(data[i]);
          tempArr = this.dataService.sortBets(tempArr);
          this.setUpActions(tempArr, this.sport);
        }
      }
    });
  }

}
