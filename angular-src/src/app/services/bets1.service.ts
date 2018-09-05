import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BetService {

  constructor(private http: Http) {

      }

  placeBet(bet) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/bets/placeBet', bet, {headers: headers})
      return this.http.post('bets/placeBet', bet, {headers: headers})
        .map(res => res.json());
  }

  closeBet(betId, result) {
    let headers = new Headers();
    const bet = {
      betId: betId,
      status: result
    }
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/bets/closePending', bet, {headers: headers})
      return this.http.post('bets/closePending', bet, {headers: headers})
        .map(res => res.json());
  }

  getBetsById(profileId, status) {
    let headers = new Headers();
    const userId = profileId;
    const url = 'bets/getBets?userId=' + userId + '&status=' + status;
    const url2 = 'http://localhost:8080/bets/getBets?userId=' + userId + '&status=' + status;
    headers.append('Content-Type', 'application/json');
      //return this.http.get(url2, {headers: headers})
      return this.http.get(url, {headers: headers})
        .map(res => res.json());
  }

  getBets(profile, status) {
    let headers = new Headers();
    const userId = profile.user._id;
    const url = 'bets/getBets?userId=' + userId + '&status=' + status;
    const url2 = 'http://localhost:8080/bets/getBets?userId=' + userId + '&status=' + status;
    headers.append('Content-Type', 'application/json');
      //return this.http.get(url2, {headers: headers})
      return this.http.get(url, {headers: headers})
        .map(res => res.json());
  }

  getAllPendings() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.get('http://localhost:8080/bets/getAllPendings', {headers: headers})
      return this.http.get('bets/getAllPendings', {headers: headers})
        .map(res => res.json());
  }

  createCustom(bet) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/bets/createCustom', bet, {headers: headers})
      return this.http.post('bets/createCustom', bet, {headers: headers})
        .map(res => res.json());
  }

  getAllCustomBets() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.get('http://localhost:8080/bets/allCustomBets', {headers: headers})
      return this.http.get('bets/allCustomBets', {headers: headers})
        .map(res => res.json());
  }

  placePropBet(bet) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/bets/placePropBet', bet, {headers: headers})
      return this.http.post('bets/placePropBet', bet, {headers: headers})
        .map(res => res.json());
  }

  getPropBets(profile, status) {
    let headers = new Headers();
    const userId = profile.user._id;
    //const url = 'http://localhost:8080/bets/getPropBets?userId=' + userId + '&status=' + status;
    const url = 'bets/getPropBets?userId=' + userId + '&status=' + status;
    headers.append('Content-Type', 'application/json');
      return this.http.get(url, {headers: headers})
        .map(res => res.json());
  }

  expireCustomBet(bet) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/bets/closeCustomBet', bet, {headers: headers})
      return this.http.post('bets/closeCustomBet', bet, {headers: headers})
        .map(res => res.json());
  }

}
