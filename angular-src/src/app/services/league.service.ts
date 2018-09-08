import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LeagueService {

  constructor(private http:Http) { }

  createLeague(league) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/league/create', league, {headers: headers})
      return this.http.post('league/create', league, {headers: headers})
        .map(res => res.json());
  }

  closeLeague(league) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/league/close', league, {headers: headers})
      return this.http.post('league/close', league, {headers: headers})
        .map(res => res.json());
  }

  getAllLeagues(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:8080/league/getAll', {headers: headers})
    return this.http.get('league/getAll', {headers: headers})
      .map(res => res.json());
  }

  addParticipant(leagueId, user) {
    let body = {
      id: leagueId,
      user: user
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/league/addParticipant', body, {headers: headers})
      return this.http.post('league/addParticipant', body, {headers: headers})
        .map(res => res.json())
        .toPromise();
  }

}
