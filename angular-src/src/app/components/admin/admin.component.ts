import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {BetService} from '../../services/bets.service';
import {UserService} from '../../services/user.service';
import {LeagueService} from '../../services/league.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:any;
  showUsers:boolean = false;
  userBalArray:any = [];
  showCreateLeague:boolean = false;
  leagueArray:any = [];

  //for custom bets
  name:string;
  sport:number;
  date:any;
  buyin:number;

  constructor(
    private authService:AuthService,
    private router:Router,
    private betService:BetService,
    private userService:UserService,
    private leagueService:LeagueService
  ){}

  ngOnInit() {
    this.getAllUsers();
    this.getLeagues();
  }

  //Gets all users and then gets their balance
  getAllUsers(){
  this.userService.getAllUsers().subscribe(users => {
    this.users = users;
    this.getCurrentBalance();
  },
  err =>{
    return false;
  });
}

getCurrentBalance(){
  for(var i = 0; i < this.users.length; i++){
    this.userBalArray.push({username:this.users[i].username, curBal:this.users[i].currentBalance});
  }
}

showHideUsers(){
  if (this.showUsers){
    this.showUsers = false;
  } else {
    this.showUsers = true;
  }
}

clickMethod() {
  if(confirm("Are you sure you want to clear all balances?")) {
    this.clearAllBalances();
  }
}

getLeagues(){
  this.leagueService.getAllLeagues().subscribe(leagues => {
    for(var i = 0; i < leagues.length; i++){
      if(leagues[i].status == 'open'){
        this.leagueArray.push(leagues[i]);
      }
    }
  });
}

clearAllBalances(){
  for(var i = 0; i < this.userBalArray.length; i++){
    const updatedAmount = {
      userId: this.userBalArray[i].id,
      amount: this.userBalArray[i].curBal * -1
    }
    console.log(updatedAmount);
    this.userService.updateBalance(updatedAmount).subscribe(data => {
      if(data){
        console.log(data);
      }else {
        // console.log(err);
      }
    });
  }
}

closeLeague(league){
  this.leagueService.closeLeague(league).subscribe(res => {
    this.leagueArray = [];
    this.getLeagues();
  });
}

createLeague(){
  let league = {
    name: this.name,
    sport: this.sport,
    date: this.date,
    buyin: this.buyin,
    status: 'open'
  }
  this.leagueService.createLeague(league).subscribe(res => {
    if(res.sucess){
      this.name = null;
      this.sport = null;
      this.date = null;
      this.buyin = null;
      this.getLeagues();
    }
  });
}

}
