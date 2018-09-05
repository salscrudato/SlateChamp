import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OddsService {

  constructor(private http: Http) {

  }

  //==========Get JSON Odds==========
  getOdds(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:8080/odds/all')
    return this.http.get('odds/all')
    .map(res => res.json());
  }

  //==========Live Events from Bet365==========
  getLiveEvents(sportId, leagueId){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/odds/events?sportId=' + sportId + '&leagueId=' + leagueId)
    //return this.http.get('odds/events?sportId=' + sportId + '&leagueId=' + leagueId)
    .map(res => res.json())
    .toPromise();
  }

  //==========Live Event Odds from Bet365==========
  getLiveEventOdds(eventId, homeTeam, homeTeamImage, awayTeam, awayTeamImage, sportId, epoch){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/odds/eventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + "&awayTeamImage=" + awayTeamImage + '&homeTeamImage=' + homeTeamImage + '&sportId=' + sportId + '&epoch=' + epoch)
    //return this.http.get('odds/eventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + "&awayTeamImage=" + awayTeamImage + '&homeTeamImage=' + homeTeamImage + '&sportId=' + sportId + '&epoch=' + epoch)
    .map(res => res.json());
  }

  //==========Upcoming Events from Bet365==========
  getUpcomingEvents(sportId, leagueId){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/odds/upcomingEvents?sportId=' + sportId + '&leagueId=' + leagueId)
    //return this.http.get('odds/upcomingEvents?sportId=' + sportId + '&leagueId=' + leagueId)
    .map(res => res.json())
    .toPromise();
  }

  //==========Upcoming Event Odds from Bet365==========
  getUpcomingEventOdds(eventId, homeTeam, awayTeam, time, sport){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/odds/upcomingEventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + '&gameTime=' + time + '&sport=' + sport)
    //return this.http.get('odds/upcomingEventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + '&gameTime=' + time + '&sport=' + sport)
    .map(res => res.json());
  }

  //==========Upcoming Tennis Events from Bet365==========
  getUpcomingTennisEvents(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/odds/upcomingTennisLeagues')
    //return this.http.get('odds/upcomingTennisLeagues')
    .map(res => res.json());
  }

}
