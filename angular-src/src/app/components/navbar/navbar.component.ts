import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router,
              private dataService:DataService
  ) {}

  onLogoutClick(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  route(route){
    this.router.navigate([route]);
  }

  // showAdmin(){
  //   return JSON.parse(this.authService.getUsername()).name == 'admin'
  // }

  ngOnInit() {
  }

}
