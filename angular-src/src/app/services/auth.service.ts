import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  environment: string;
  urlPrefix = '';

  constructor(private http: Http) {

      }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      const url = this.urlPrefix + 'users/register';
      return this.http.post('http://localhost:8080/users/register', user, {headers: headers})
      //return this.http.post(url, user, {headers: headers})
        .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      const url = this.urlPrefix + 'users/authenticate';
      return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
      //return this.http.post(url, user, {headers: headers})
        .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
      const url = this.urlPrefix + 'users/profile';
      return this.http.get('http://localhost:8080/users/profile', {headers: headers})
      //return this.http.get(url, {headers: headers})
        .map(res => res.json());
  }

  getProfilePromise(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
      const url = this.urlPrefix + 'users/profile';
      return this.http.get('http://localhost:8080/users/profile', {headers: headers})
      //return this.http.get(url, {headers: headers})
        .map(res => res.json()).toPromise();
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getUsername(){
    return localStorage.getItem('user');
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  loggedInAdmin(){
    if(tokenNotExpired('id_token')){
      var user = JSON.parse(localStorage.getItem('user'));
      return user.username == 'actionplusadmin';
    } else {
      return false;
    }
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


}
