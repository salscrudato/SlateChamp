import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAllUsers(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/users/allProfiles', {headers: headers})
    //return this.http.get('users/allProfiles', {headers: headers})
      .map(res => res.json());
  }

  updateBalance(updatedAmount) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8080/users/updateBalance', updatedAmount, {headers: headers})
      //return this.http.post('users/updateBalance', updatedAmount, {headers: headers})
        .map(res => res.json());
  }

  updateLeague(body) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8080/users/updateLeague', body, {headers: headers})
      //return this.http.post('users/updateLeague', body, {headers: headers})
        .map(res => res.json());
  }

  getProfileById(userId){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/users/getProfileById?userId=' + userId)
    //return this.http.get('users/getProfileById?userId=' + userId)
    .map(res => res.json())
    .toPromise();
  }



}
