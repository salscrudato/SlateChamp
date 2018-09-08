import { Component, OnInit } from '@angular/core';
import {LeagueService} from '../../services/league.service';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  cfbLeagues:any = [];
  nflLeagues:any = [];
  user:any = null;

  constructor(
    private leagueService: LeagueService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getNflLeagues();
  }

  getNflLeagues(){
    this.leagueService.getAllLeagues().subscribe(leagues => {
      for(var i = 0; i < leagues.length; i++){
        if(leagues[i].status != 'closed' && leagues[i].sport==4){
          this.nflLeagues.push(leagues[i]);
        }
      }
    });
  }

  joinLeague(league){
    if(this.user != null && this.user.league.length < 1){
      this.leagueService.addParticipant(league._id, this.user).then(
        (res) => {
          if(res.success){
            var body = {
              userId: this.user._id,
              league: league._id,
              leagueName: league.name,
              leagueSport: league.sport
            }
            this.userService.updateLeague(body).subscribe(res => {
              if(res.success){
                this.flashMessage.show('Successfully Joined ' + league.name, {cssClass: 'alert-success'});
                this.router.navigate(['profile']);
              }
            });

          }
        });
      } else if (this.user == null) {
        this.flashMessage.show('You must be logged in to enter a league', {cssClass: 'alert-warning'});
      } else {
        this.flashMessage.show('You can only enter one league at a time.', {cssClass: 'alert-warning'});
      }
    }

    getProfile(){
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err =>{
        this.flashMessage.show('Please log in to enter leagues', {cssClass: 'alert-warning'});
      });
    }

  }
