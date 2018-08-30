import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {OddsService} from './services/odds.service';
import {DataService} from './services/data.service';
import {BetService} from './services/bets.service';
import {LeagueService} from './services/league.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/app.guards';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { LiveComponent } from './components/live/live.component';
import { AdminComponent } from './components/admin/admin.component';
import { ParlayComponent } from './components/parlay/parlay.component';
import { StraightComponent } from './components/straight/straight.component';
import { OtherComponent } from './components/other/other.component';
import { LiveMenuComponent } from './components/live-menu/live-menu.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { PropsComponent } from './components/props/props.component';
import { SlatechampComponent } from './components/slatechamp/slatechamp.component';
import { LeaguesComponent } from './components/leagues/leagues.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'menu', component: MenuComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'live', component: LiveComponent},
  {path: 'liveMenu', component: LiveMenuComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'parlay', component: ParlayComponent},
  {path: 'straight', component: StraightComponent},
  {path: 'other', component: OtherComponent},
  {path: 'teaser', component:TeaserComponent},
  {path: 'props', component:PropsComponent},
  {path: 'slatechamp', component:SlatechampComponent},
  {path: 'leagues', component:LeaguesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    MenuComponent,
    ConfirmComponent,
    LiveComponent,
    AdminComponent,
    ParlayComponent,
    StraightComponent,
    OtherComponent,
    LiveMenuComponent,
    TeaserComponent,
    PropsComponent,
    SlatechampComponent,
    LeaguesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, UserService, OddsService, AuthGuard, DataService, BetService, LeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
