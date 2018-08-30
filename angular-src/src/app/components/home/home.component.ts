import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:String;
  password:String;
  termsOfServiceClicked:boolean = false;

  constructor(
    private authService:AuthService,
    private userService:UserService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ){}

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.router.navigate(['profile']);
    }
  }

  onLoginSubmit(){
    const user = {
      username: this.username.toLowerCase(),
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['profile']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
    });

  }

}
