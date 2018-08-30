import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {BetService} from '../../services/bets.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css']
})
export class PropsComponent implements OnInit {

  sport:string;
  propArr:any = [];
  futureArr:any =[];

  constructor(
    private dataService:DataService,
    private betService:BetService,
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.sport = this.dataService.getPropSport();
    this.getProps();
  }

  getProps(){
    this.betService.getAllCustomBets().subscribe(bets => {
      for (var i = 0; i < bets.length; i++){
        if(bets[i].sport==this.sport && bets[i].type == 'future' && bets[i].expired == false){
          this.futureArr.push(bets[i]);
        } else if (bets[i].sport==this.sport && bets[i].type == 'prop' && bets[i].expired == false){
          this.propArr.push(bets[i]);
        }
      }
    });
  }

  placeBet(action){
    action.betType = 'custom';
    this.authService.getProfile().subscribe(profile => {
      this.dataService.addCustomBet(action);
      this.router.navigate(['confirm']);
    },
    err =>{
      this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
      return false;
    });
  }

}
