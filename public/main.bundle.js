webpackJsonp([1,4],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeagueService = (function () {
    function LeagueService(http) {
        this.http = http;
    }
    LeagueService.prototype.createLeague = function (league) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/league/create', league, {headers: headers})
        return this.http.post('league/create', league, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LeagueService.prototype.closeLeague = function (league) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/league/close', league, {headers: headers})
        return this.http.post('league/close', league, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LeagueService.prototype.getAllLeagues = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/league/getAll', {headers: headers})
        return this.http.get('league/getAll', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LeagueService.prototype.addParticipant = function (leagueId, user) {
        var body = {
            id: leagueId,
            user: user
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/league/addParticipant', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    LeagueService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], LeagueService);
    return LeagueService;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/league.service.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.urlPrefix = '';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.urlPrefix + 'users/register';
        return this.http.post('http://localhost:8080/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.urlPrefix + 'users/authenticate';
        //return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
        return this.http.post(url, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var url = this.urlPrefix + 'users/profile';
        //return this.http.get('http://localhost:8080/users/profile', {headers: headers})
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfilePromise = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var url = this.urlPrefix + 'users/profile';
        //return this.http.get('http://localhost:8080/users/profile', {headers: headers})
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); }).toPromise();
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUsername = function () {
        return localStorage.getItem('user');
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.loggedInAdmin = function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token')) {
            var user = JSON.parse(localStorage.getItem('user'));
            return user.username == 'actionplusadmin';
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/auth.service.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
        this.bet = [];
        this.jsonOddsEvents = [];
    }
    DataService.prototype.addSport = function (sport) {
        this.sport = sport;
    };
    DataService.prototype.addPropSport = function (sport) {
        this.propSport = sport;
    };
    DataService.prototype.addCustomBet = function (bet) {
        this.type = bet.type;
        this.propBet = bet;
    };
    DataService.prototype.getPropBet = function () {
        return this.propBet;
    };
    DataService.prototype.getPropSport = function () {
        var tmp = this.propSport;
        this.propSport = null;
        return tmp;
    };
    DataService.prototype.getSports = function () {
        var tempSport = this.sport;
        this.sport = null;
        return tempSport;
    };
    DataService.prototype.setLeague = function (league) {
        this.league = league;
    };
    DataService.prototype.getLeague = function () {
        var tempLeague = this.league;
        this.league = null;
        return tempLeague;
    };
    DataService.prototype.setTeaser = function (teaser) {
        this.teaserNum = teaser;
    };
    DataService.prototype.getTeaser = function () {
        return this.teaserNum;
    };
    DataService.prototype.setJsonOddsEvents = function (events) {
        this.jsonOddsEvents = events;
    };
    DataService.prototype.getJsonOddsEvents = function () {
        return this.jsonOddsEvents;
    };
    DataService.prototype.addStraightBet = function (bet, profile, type) {
        this.bet.push(bet);
        this.profile = profile;
        this.type = type;
    };
    DataService.prototype.addMultipleBet = function (bet, profile, type) {
        for (var i = 0; i < bet.length; i++) {
            this.bet.push(bet[i]);
        }
        this.profile = profile;
        this.type = type;
    };
    DataService.prototype.getBet = function () {
        var tempBet = this.bet;
        this.bet = [];
        return tempBet;
    };
    DataService.prototype.getProfile = function () {
        return this.profile;
    };
    DataService.prototype.getBetType = function () {
        var tempBetType = this.type;
        this.type = null;
        return tempBetType;
    };
    // sortBets(unsorted){
    //   for(var i = 0; i < unsorted.length; i++){
    //     var year = unsorted[i].gameDate.substr(0,3);
    //     var month = unsorted[i].gameDate.substr(0,3);
    //     var day = unsorted[i].gameDate.substr(0,3);
    //   }
    // }
    DataService.prototype.sortBets = function (bets) {
        if (bets == undefined || bets.length == undefined) {
            return bets;
        }
        if (bets.length == 1) {
            return bets;
        }
        else {
            for (var i = 0; i < bets.length; i++) {
                for (var j = 0; j < bets.length - 1 - i; j++) {
                    if (bets[j].subBets[0].epoch < bets[j + 1].subBets[0].epoch) {
                        var tmpBet = bets[j];
                        bets[j] = bets[j + 1];
                        bets[j + 1] = tmpBet;
                    }
                }
            }
            return bets;
        }
    };
    DataService.prototype.sortBetsReverse = function (bets) {
        if (bets.length == 1) {
            return bets;
        }
        else {
            for (var i = 0; i < bets.length; i++) {
                for (var j = 0; j < bets.length - 1 - i; j++) {
                    if (bets[j].subBets[0].epoch > bets[j + 1].subBets[0].epoch) {
                        var tmpBet = bets[j];
                        bets[j] = bets[j + 1];
                        bets[j + 1] = tmpBet;
                    }
                }
            }
            return bets;
        }
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/data.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.password == undefined || user.credit == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/validate.service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 399;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(518);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/main.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OddsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OddsService = (function () {
    function OddsService(http) {
        this.http = http;
    }
    //==========Get JSON Odds==========
    OddsService.prototype.getOdds = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/odds/all')
        return this.http.get('odds/all')
            .map(function (res) { return res.json(); });
    };
    //==========Live Events from Bet365==========
    OddsService.prototype.getLiveEvents = function (sportId, leagueId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/odds/events?sportId=' + sportId + '&leagueId=' + leagueId)
        return this.http.get('odds/events?sportId=' + sportId + '&leagueId=' + leagueId)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    //==========Live Event Odds from Bet365==========
    OddsService.prototype.getLiveEventOdds = function (eventId, homeTeam, homeTeamImage, awayTeam, awayTeamImage, sportId, epoch) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/odds/eventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + "&awayTeamImage=" + awayTeamImage + '&homeTeamImage=' + homeTeamImage + '&sportId=' + sportId + '&epoch=' + epoch)
        return this.http.get('odds/eventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + "&awayTeamImage=" + awayTeamImage + '&homeTeamImage=' + homeTeamImage + '&sportId=' + sportId + '&epoch=' + epoch)
            .map(function (res) { return res.json(); });
    };
    //==========Upcoming Events from Bet365==========
    OddsService.prototype.getUpcomingEvents = function (sportId, leagueId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/odds/upcomingEvents?sportId=' + sportId + '&leagueId=' + leagueId)
        return this.http.get('odds/upcomingEvents?sportId=' + sportId + '&leagueId=' + leagueId)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    //==========Upcoming Event Odds from Bet365==========
    OddsService.prototype.getUpcomingEventOdds = function (eventId, homeTeam, awayTeam, time, sport) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/odds/upcomingEventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + '&gameTime=' + time + '&sport=' + sport)
            .map(function (res) { return res.json(); });
    };
    //==========Upcoming Tennis Events from Bet365==========
    OddsService.prototype.getUpcomingTennisEvents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/odds/upcomingTennisLeagues')
            .map(function (res) { return res.json(); });
    };
    OddsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], OddsService);
    return OddsService;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/odds.service.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(716),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/app.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_odds_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_bets_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_league_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_app_guards__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_confirm_confirm_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_live_live_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_admin_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_parlay_parlay_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_straight_straight_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_other_other_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_live_menu_live_menu_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_teaser_teaser_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_props_props_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_slatechamp_slatechamp_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_leagues_leagues_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_leaderboard_leaderboard_component__ = __webpack_require__(522);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_app_guards__["a" /* AuthGuard */]] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_20__components_confirm_confirm_component__["a" /* ConfirmComponent */] },
    { path: 'live', component: __WEBPACK_IMPORTED_MODULE_21__components_live_live_component__["a" /* LiveComponent */] },
    { path: 'liveMenu', component: __WEBPACK_IMPORTED_MODULE_26__components_live_menu_live_menu_component__["a" /* LiveMenuComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_22__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'parlay', component: __WEBPACK_IMPORTED_MODULE_23__components_parlay_parlay_component__["a" /* ParlayComponent */] },
    { path: 'straight', component: __WEBPACK_IMPORTED_MODULE_24__components_straight_straight_component__["a" /* StraightComponent */] },
    { path: 'other', component: __WEBPACK_IMPORTED_MODULE_25__components_other_other_component__["a" /* OtherComponent */] },
    { path: 'teaser', component: __WEBPACK_IMPORTED_MODULE_27__components_teaser_teaser_component__["a" /* TeaserComponent */] },
    { path: 'props', component: __WEBPACK_IMPORTED_MODULE_28__components_props_props_component__["a" /* PropsComponent */] },
    { path: 'slatechamp', component: __WEBPACK_IMPORTED_MODULE_29__components_slatechamp_slatechamp_component__["a" /* SlatechampComponent */] },
    { path: 'leagues', component: __WEBPACK_IMPORTED_MODULE_30__components_leagues_leagues_component__["a" /* LeaguesComponent */] },
    { path: 'leaderboard', component: __WEBPACK_IMPORTED_MODULE_31__components_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_live_live_component__["a" /* LiveComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_parlay_parlay_component__["a" /* ParlayComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_straight_straight_component__["a" /* StraightComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_other_other_component__["a" /* OtherComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_live_menu_live_menu_component__["a" /* LiveMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_teaser_teaser_component__["a" /* TeaserComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_props_props_component__["a" /* PropsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_slatechamp_slatechamp_component__["a" /* SlatechampComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_leagues_leagues_component__["a" /* LeaguesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__services_odds_service__["a" /* OddsService */], __WEBPACK_IMPORTED_MODULE_13__guards_app_guards__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_10__services_bets_service__["a" /* BetService */], __WEBPACK_IMPORTED_MODULE_11__services_league_service__["a" /* LeagueService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/app.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bets_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_league_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminComponent = (function () {
    function AdminComponent(authService, router, betService, userService, leagueService) {
        this.authService = authService;
        this.router = router;
        this.betService = betService;
        this.userService = userService;
        this.leagueService = leagueService;
        this.showUsers = false;
        this.userBalArray = [];
        this.showCreateLeague = false;
        this.leagueArray = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
        this.getLeagues();
    };
    //Gets all users and then gets their balance
    AdminComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (users) {
            _this.users = users;
            _this.getCurrentBalance();
        }, function (err) {
            return false;
        });
    };
    AdminComponent.prototype.getCurrentBalance = function () {
        for (var i = 0; i < this.users.length; i++) {
            this.userBalArray.push({ username: this.users[i].username, curBal: this.users[i].currentBalance });
        }
    };
    AdminComponent.prototype.showHideUsers = function () {
        if (this.showUsers) {
            this.showUsers = false;
        }
        else {
            this.showUsers = true;
        }
    };
    AdminComponent.prototype.clickMethod = function () {
        if (confirm("Are you sure you want to clear all balances?")) {
            this.clearAllBalances();
        }
    };
    AdminComponent.prototype.getLeagues = function () {
        var _this = this;
        this.leagueService.getAllLeagues().subscribe(function (leagues) {
            for (var i = 0; i < leagues.length; i++) {
                if (leagues[i].status == 'open') {
                    _this.leagueArray.push(leagues[i]);
                }
            }
        });
    };
    AdminComponent.prototype.clearAllBalances = function () {
        for (var i = 0; i < this.userBalArray.length; i++) {
            var updatedAmount = {
                userId: this.userBalArray[i].id,
                amount: this.userBalArray[i].curBal * -1
            };
            console.log(updatedAmount);
            this.userService.updateBalance(updatedAmount).subscribe(function (data) {
                if (data) {
                    console.log(data);
                }
                else {
                }
            });
        }
    };
    AdminComponent.prototype.closeLeague = function (league) {
        var _this = this;
        this.leagueService.closeLeague(league).subscribe(function (res) {
            _this.leagueArray = [];
            _this.getLeagues();
        });
    };
    AdminComponent.prototype.createLeague = function () {
        var _this = this;
        var league = {
            name: this.name,
            sport: this.sport,
            date: this.date,
            buyin: this.buyin,
            status: 'open'
        };
        this.leagueService.createLeague(league).subscribe(function (res) {
            if (res.sucess) {
                _this.name = null;
                _this.sport = null;
                _this.date = null;
                _this.buyin = null;
                _this.getLeagues();
            }
        });
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(717),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_league_service__["a" /* LeagueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_league_service__["a" /* LeagueService */]) === 'function' && _e) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/admin.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bets_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_bet__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_odds_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfirmComponent = (function () {
    function ConfirmComponent(dataService, betService, flashMessage, router, oddsService, authService) {
        this.dataService = dataService;
        this.betService = betService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.oddsService = oddsService;
        this.authService = authService;
        this.bet = [];
        this.clickedSubmit = false;
        this.amountPending = 0;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.betType = this.dataService.getBetType().toUpperCase();
        // if(this.betType != 'PROP' && this.betType != 'FUTURE'){
        this.bet = this.dataService.getBet();
        this.getProfileAndAllBets();
        this.setBetDetailsAndOdds(this.bet);
        this.odds = this.calculateOdds(this.bet);
        this.timer = setTimeout(function () {
            _this.flashMessage.show('You have been re-directed due to inactivity, please try again', { cssClass: 'alert-warning' });
            _this.router.navigate(['menu']);
        }, 60000);
        // } else {
        //   this.bet = this.dataService.getPropBet();
        //   this.odds = this.bet.odds;
        //   this.bet.betDetails = this.bet.details;
        //   this.getProfileAndAllBets();
        // }
    };
    //Gets current logged in user and then gets corresponding bets for that user
    ConfirmComponent.prototype.getProfileAndAllBets = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.betService.getBets(profile, 'all').subscribe(function (bets) {
                for (var i = 0; i < bets.length; i++) {
                    if (bets[i].status == 'open') {
                        _this.amountPending = _this.amountPending + bets[i].betAmount;
                    }
                }
            }, function (error) {
                console.log(error);
                return false;
            });
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    // placePropBet(){
    //   this.clickedSubmit = true;
    //   if(this.betAmount > 0){
    //     let customBet = {
    //       userId: this.user._id,
    //       username: this.user.username,
    //       description: this.bet.details,
    //       odds: this.bet.odds,
    //       betAmount: this.betAmount,
    //       winAmount: this.calcWinAmount(this.bet.odds, this.betAmount),
    //       status: 'open'
    //     }
    //     this.betService.placePropBet(customBet).subscribe(data => {
    //       if(data){
    //         this.router.navigate(['menu']);
    //         this.flashMessage.show('Bet Placed', {cssClass: 'alert-success'});
    //       }
    //     });
    //   } else {
    //     this.clickedSubmit = false;
    //     this.flashMessage.show('You must enter a number greater than 0', {cssClass: 'alert-warning'});
    //   }
    // }
    ConfirmComponent.prototype.placeStraightBet = function () {
        var _this = this;
        this.clickedSubmit = true;
        if (this.betAmount > 0) {
            var profile = this.dataService.getProfile();
            var winAmount = this.calcWinAmount(this.odds, this.betAmount);
            var confirmedBet = new __WEBPACK_IMPORTED_MODULE_5__classes_bet__["a" /* Bet */](profile, this.bet, this.bet[0].source, this.odds, this.betAmount, winAmount, this.betType);
            this.betService.placeBet(confirmedBet).subscribe(function (data) {
                if (data.success) {
                    clearTimeout(_this.timer);
                    _this.router.navigate(['menu']);
                    _this.flashMessage.show('Bet Placed', { cssClass: 'alert-success' });
                }
                else {
                    clearTimeout(_this.timer);
                    _this.flashMessage.show('Error placing bet - odds are expired', { cssClass: 'alert-warning' });
                    _this.router.navigate(['menu']);
                }
            });
        }
        else {
            this.clickedSubmit = false;
            this.flashMessage.show('You must enter a number greater than 0', { cssClass: 'alert-warning' });
        }
    };
    ConfirmComponent.prototype.placeLiveBet = function () {
        var _this = this;
        clearTimeout(this.timer);
        this.clickedSubmit = true;
        this.flashMessage.show('To provide the best user experience, we never take lines down.  Please allow 12 seconds to confirm this bet.', { cssClass: 'alert-success', timeout: 15000 });
        setTimeout(function () {
            var betIsStillGood = true;
            var tmpBet = _this.bet[0];
            _this.oddsService.getLiveEventOdds(tmpBet.id, tmpBet.homeTeam, tmpBet.homeTeamImage, tmpBet.awayTeam, tmpBet.awayTeamImage, tmpBet.sport, tmpBet.epoch).subscribe(function (data) {
                data.betType = tmpBet.betType;
                for (var prop in data) {
                    if (prop == 'homeTeamML') {
                        var tmpData = parseInt(data[prop]);
                        if (tmpData < 0) {
                            tmpData = tmpData * -1;
                        }
                        var tmpLow = tmpData * 0.96;
                        var tmpHigh = tmpData * 1.04;
                        if (tmpData < tmpLow || tmpData > tmpHigh) {
                            betIsStillGood = false;
                        }
                    }
                    else if (prop == 'awayTeamML') {
                        var tmpData = parseInt(data[prop]);
                        if (tmpData < 0) {
                            tmpData = tmpData * -1;
                        }
                        var tmpLow = tmpData * 0.96;
                        var tmpHigh = tmpData * 1.04;
                        if (tmpData < tmpLow || tmpData > tmpHigh) {
                            betIsStillGood = false;
                        }
                    }
                }
                if (betIsStillGood) {
                    var profile = _this.dataService.getProfile();
                    var winAmount = _this.calcWinAmount(_this.odds, _this.betAmount);
                    var confirmedBet = new __WEBPACK_IMPORTED_MODULE_5__classes_bet__["a" /* Bet */](profile, _this.bet, _this.bet[0].source, _this.odds, _this.betAmount, winAmount, _this.betType);
                    _this.betService.placeBet(confirmedBet).subscribe(function (data) {
                        if (data.success) {
                            _this.router.navigate(['profile']);
                        }
                        else {
                            _this.flashMessage.show('Error placing bet', { cssClass: 'alert-warning' });
                            _this.router.navigate(['menu']);
                        }
                    });
                }
                else {
                    _this.flashMessage.show('Error placing bet - odds are no longer valid', { cssClass: 'alert-warning' });
                    _this.bet[0] = data;
                    _this.setBetDetailsAndOdds(_this.bet);
                    _this.odds = _this.calculateOdds(_this.bet);
                    _this.clickedSubmit = false;
                }
            });
        }, 16000);
    };
    ConfirmComponent.prototype.clickPlaceBet = function () {
        var tmpEndDate = new Date('9/1/2018');
        var endDate = new Date(tmpEndDate.getTime() + (12 * 60 * 60 * 1000));
        var curDate = new Date();
        console.log(endDate);
        console.log(curDate);
        var curAvail = this.user.credit + this.user.currentBalance - this.amountPending;
        if (curDate > endDate) {
            this.flashMessage.show('Bets for this league cant be placed after ' + endDate, { cssClass: 'alert-warning' });
        }
        else if (this.betAmount <= curAvail) {
            if (((this.odds) / 100 < 100) && this.odds != 0) {
                if (this.betType == 'LIVE') {
                    this.placeLiveBet();
                }
                else {
                    this.placeStraightBet();
                }
            }
            else {
                this.flashMessage.show('Bet exceeds maximum payout ratio', { cssClass: 'alert-warning' });
            }
        }
        else {
            this.flashMessage.show('Insufficient funds, available balance: $' + curAvail, { cssClass: 'alert-warning' });
        }
    };
    ConfirmComponent.prototype.cancelBet = function () {
        clearTimeout(this.timer);
        this.router.navigate(['menu']);
    };
    ConfirmComponent.prototype.setBetDetailsAndOdds = function (bets) {
        for (var i = 0; i < bets.length; i++) {
            bets[i] = this.setBetDescription(bets[i]);
        }
    };
    ConfirmComponent.prototype.setBetDescription = function (bet) {
        var awayTeam = bet.awayTeam;
        var homeTeam = bet.homeTeam;
        switch (bet.betType) {
            case 'awayTeamRL':
                var awayTeamRL = bet.awayTeamRL;
                var awayTeamRLOdds = bet.awayTeamRLOdds;
                bet.betDetails = awayTeam + " Spread " + awayTeamRL + " " + awayTeamRLOdds;
                bet.odds = awayTeamRLOdds;
                bet.line = awayTeamRL;
                break;
            case 'homeTeamRL':
                var homeTeamRL = bet.homeTeamRL;
                var homeTeamRLOdds = bet.homeTeamRLOdds;
                bet.betDetails = homeTeam + " Spread " + homeTeamRL + " " + homeTeamRLOdds;
                bet.odds = homeTeamRLOdds;
                bet.line = homeTeamRL;
                break;
            case 'awayTeamRLTeaser':
                var awayTeamRLTeaser = bet.awayTeamRL;
                bet.betDetails = awayTeam + " Spread " + awayTeamRLTeaser;
                bet.betType = 'awayTeamRL';
                break;
            case 'homeTeamRLTeaser':
                var homeTeamRLTeaser = bet.homeTeamRL;
                bet.betDetails = homeTeam + " Spread " + homeTeamRLTeaser;
                bet.betType = 'homeTeamRL';
                break;
            case 'awayTeamML':
                var awayTeamML = bet.awayTeamML;
                bet.betDetails = awayTeam + " Money Line " + awayTeamML;
                bet.odds = awayTeamML;
                break;
            case 'homeTeamML':
                var homeTeamML = bet.homeTeamML;
                bet.betDetails = homeTeam + " Money Line " + homeTeamML;
                bet.odds = homeTeamML;
                break;
            case 'over':
                if (bet.overLine != undefined && bet.overLine != null) {
                    bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.totalNumber + ' ' + bet.overLine;
                    bet.odds = bet.overLine;
                    bet.line = bet.totalNumber;
                }
                else {
                    bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.over.number + ' ' + bet.over.odds;
                    bet.odds = bet.over.odds;
                    bet.line = bet.over.number;
                }
                break;
            case 'under':
                if (bet.underLine != undefined && bet.underLine != null) {
                    bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.totalNumber + ' ' + bet.underLine;
                    bet.odds = bet.underLine;
                    bet.line = bet.underLine;
                }
                else {
                    bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.under.number + ' ' + bet.under.odds;
                    bet.odds = bet.under.odds;
                    bet.line = bet.totalNumber;
                }
                break;
            // case 'draw':
            // bet.betDetails = awayTeam + " @ " + homeTeam + " Draw " + bet.drawOdds;
            // bet.odds = bet.drawOdds;
            // break;
            // case 'awayTeamFirstHalf':
            // bet.betDetails = awayTeam + ' First 5 Innings ' + bet.awayTeamFirstHalf;
            // bet.odds = bet.awayTeamFirstHalf;
            // break;
            // case 'homeTeamFirstHalf':
            // bet.betDetails = homeTeam + ' First 5 Innings ' + bet.homeTeamFirstHalf;
            // bet.odds = bet.homeTeamFirstHalf;
            // break;
            // case 'awayTeamFirstHalfFB':
            // bet.betDetails = awayTeam + ' First Half ' + bet.awayTeamFirstHalf;
            // bet.odds = bet.awayTeamFirstHalf;
            // break;
            // case 'homeTeamFirstHalfFB':
            // bet.betDetails = homeTeam + ' First Half ' + bet.homeTeamFirstHalf;
            // bet.odds = bet.homeTeamFirstHalf;
            // break;
            // case 'awayTeamFirstHalfSpread':
            // const awayTeamFirstHalfSpread = bet.awayTeamRLFirstHalf;
            // const awayTeamFirstHalfSpreadOdds = bet.awayTeamRLOddsFirstHalf;
            // bet.betDetails = awayTeam + " Spread " + awayTeamFirstHalfSpread + " " + awayTeamFirstHalfSpreadOdds;
            // bet.odds = awayTeamFirstHalfSpreadOdds;
            // bet.line = bet.awayTeamRLFirstHalf;
            // break;
            // case 'homeTeamFirstHalfSpread':
            // const homeTeamFirstHalfSpread = bet.homeTeamRLFirstHalf;
            // const homeTeamFirstHalfSpreadOdds = bet.homeTeamRLOddsFirstHalf;
            // bet.betDetails = homeTeam + " Spread " + homeTeamFirstHalfSpread + " " + homeTeamFirstHalfSpreadOdds;
            // bet.odds = homeTeamFirstHalfSpreadOdds;
            // bet.line = bet.homeTeamRLFirstHalf;
            // break;
            // case 'firstHalfOverFB':
            // bet.betDetails = awayTeam + ' @ ' + homeTeam + 'First Half Over ' + bet.firstHalfOver + ' ' +  bet.firstHalfOverOdds;
            // bet.odds = bet.firstHalfOverOdds;
            // bet.line = bet.firstHalfOver;
            // break;
            // case 'firstHalfUnderFB':
            // bet.betDetails = awayTeam + ' @ ' + homeTeam + 'First Half Under ' + bet.firstHalfUnder + ' ' +  bet.firstHalfUnderOdds;
            // bet.odds = bet.firstHalfUnderOdds;
            // bet.line = bet.firstHalfUnder;
            // break;
            // case 'homeTeamFirstHalf':
            // bet.betDetails = awayTeam + ' First 5 Innings ' + bet.homeTeamFirstHalf;
            // bet.odds = bet.homeTeamFirstHalf;
            // break;
            // case 'homeTeamOver':
            // bet.betDetails = homeTeam + ' Over ' + bet.homeTeamTotalLine;
            // bet.odds = bet.homeTeamOverOdds;
            // break;
            // case 'homeTeamUnder':
            // bet.betDetails = homeTeam + ' Under ' + bet.homeTeamTotalLine;
            // bet.odds = bet.homeTeamUnderOdds;
            // break;
            // case 'awayTeamOver':
            // bet.betDetails = awayTeam + ' Over ' + bet.awayTeamTotalLine;
            // bet.odds = bet.awayTeamOverOdds;
            // break;
            // case 'awayTeamUnder':
            // bet.betDetails = awayTeam + ' Under ' + bet.awayTeamTotalLine;
            // bet.odds = bet.awayTeamUnderOdds;
            // break;
            // case 'runInFirst':
            // bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Run In First';
            // bet.odds = bet.runInFirst;
            // break;
            // case 'noRunInFirst':
            // bet.betDetails = awayTeam + ' @ ' + homeTeam + ' No Runs In First';
            // bet.odds = bet.noRunInFirst;
            // break;
            // case 'bothScoreYes':
            // bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Both Score - Yes ' + bet.bothScoreYes;
            // bet.odds = bet.bothScoreYes;
            // break;
            // case 'bothScoreNo':
            // bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Both Score - No ' + bet.bothScoreNo;
            // bet.odds = bet.bothScoreNo;
            // break;
            // case 'golf':
            // bet.betDetails = bet.participant.name + ' (' + bet.participant.odds + ')' + ' To win the ' + bet.eventName;
            // bet.odds = bet.participant.odds;
            // break;
            // case 'overUFC':
            // bet.betDetails = bet.awayTeam + ' @ ' + bet.homeTeam + ' Over ' + bet.totalNumber + ' ' + bet.overLine;
            // bet.odds = bet.overLine;
            // break;
            // case 'underUFC':
            // bet.betDetails = bet.awayTeam + ' @ ' + bet.homeTeam + ' Under ' + bet.totalNumber + ' ' + bet.underLine;
            // bet.odds = bet.underLine;
            // break;
            case 'underTeaser':
                bet.betDetails = bet.awayTeam + ' @ ' + bet.homeTeam + ' Under ' + bet.totalNumberTeaserUnder;
                bet.totalNumber = bet.totalNumberTeaserUnder;
                bet.betType = 'under';
                break;
            case 'overTeaser':
                bet.betDetails = bet.awayTeam + ' @ ' + bet.homeTeam + ' Over ' + bet.totalNumberTeaserOver;
                bet.totalNumber = bet.totalNumberTeaserOver;
                bet.betType = 'over';
                break;
            default:
                break;
        }
        return bet;
    };
    ConfirmComponent.prototype.placeBet = function (bet) {
        var _this = this;
        this.betService.placeBet(bet).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.router.navigate(['profile']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
                _this.router.navigate(['menu']);
            }
        });
    };
    ConfirmComponent.prototype.calcWinAmount = function (odds, betAmount) {
        if (odds > 0) {
            return this.round((odds / 100) * betAmount);
        }
        else {
            return this.round(betAmount / (odds * -1) * 100);
        }
    };
    ConfirmComponent.prototype.round = function (amount) {
        return Math.round(amount);
    };
    ConfirmComponent.prototype.addPlus = function (odd) {
        if (odd > 0) {
            return "+" + odd;
        }
        else {
            return odd;
        }
    };
    ConfirmComponent.prototype.calculateOdds = function (bets) {
        if (bets.length == 1) {
            return parseInt(bets[0].odds);
        }
        else if (this.betType == 'TEASER') {
            return -120;
        }
        else {
            var oddsArray = [];
            for (var i = 0; i < bets.length; i++) {
                var tempOdds = parseInt(bets[i].odds);
                if (tempOdds > 0) {
                    oddsArray.push((100 + tempOdds) / 100);
                }
                else {
                    oddsArray.push((100 + (tempOdds * -1)) / (tempOdds * -1));
                }
            }
            return this.round((oddsArray.reduce(function (a, b) { return a * b; }) - 1) * 100);
        }
    };
    ConfirmComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(718),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bets_service__["a" /* BetService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_odds_service__["a" /* OddsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object])
    ], ConfirmComponent);
    return ConfirmComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/confirm.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(authService, userService, router, flashMessage) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.termsOfServiceClicked = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['profile']);
        }
    };
    HomeComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username.toLowerCase(),
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['profile']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(719),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/home.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_league_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bets_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaderboardComponent = (function () {
    function LeaderboardComponent(leagueService, userService, betService) {
        this.leagueService = leagueService;
        this.userService = userService;
        this.betService = betService;
        this.leagues = [];
        this.playerIds = [];
        this.players = [];
        this.tmpBets = [];
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        this.getAllLeagues();
    };
    LeaderboardComponent.prototype.getAllLeagues = function () {
        var _this = this;
        this.leagueService.getAllLeagues().subscribe(function (leagues) {
            for (var i = 0; i < leagues.length; i++) {
                _this.leagues.push(leagues[i]);
                for (var j = 0; j < leagues[i].participants.length; j++) {
                    _this.playerIds.push(leagues[i].participants[j]._id);
                }
            }
            _this.getAllPlayers(_this.playerIds);
        });
    };
    LeaderboardComponent.prototype.getAllPlayers = function (players) {
        var _this = this;
        for (var i = 0; i < players.length; i++) {
            this.userService.getProfileById(players[i]).then(function (player) {
                _this.players.push(player);
                _this.leagues[0].participants = _this.sortPlayers(_this.players);
            });
        }
    };
    LeaderboardComponent.prototype.getPlayerBets = function (playerId) {
        var _this = this;
        var curTime = new Date;
        var tmpEndDate = new Date('9/1/2018');
        var endDate = new Date(tmpEndDate.getTime() + (12 * 60 * 60 * 1000));
        console.log(curTime);
        console.log(endDate);
        if (curTime > endDate) {
            this.betService.getBetsById(playerId, 'all').subscribe(function (bets) {
                for (var i = 0; i < bets.length; i++) {
                    _this.tmpBets.push('Bet # ' + i + ':\n' + bets[i].betType + ': ' + bets[i].description.replace(',', ' parlayed with '));
                }
            }, function (error) {
                console.log(error);
                return false;
            });
        }
        else {
            this.tmpBets.push('Bets cannot be viewed until the contest locks');
        }
    };
    LeaderboardComponent.prototype.closeModal = function () {
        this.tmpBets = [];
    };
    LeaderboardComponent.prototype.sortPlayers = function (players) {
        if (players.length == 1) {
            return players;
        }
        else {
            for (var i = 0; i < players.length; i++) {
                for (var j = 0; j < players.length - i - 1; j++) {
                    if (players[j].currentBalance < players[j + 1].currentBalance) {
                        var tmpPlayer = players[j];
                        players[j] = players[j + 1];
                        players[j + 1] = tmpPlayer;
                    }
                }
            }
            return players;
        }
    };
    LeaderboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(720),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_league_service__["a" /* LeagueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_league_service__["a" /* LeagueService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_bets_service__["a" /* BetService */]) === 'function' && _c) || Object])
    ], LeaderboardComponent);
    return LeaderboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/leaderboard.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_league_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaguesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LeaguesComponent = (function () {
    function LeaguesComponent(leagueService, authService, flashMessage, userService, router) {
        this.leagueService = leagueService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.userService = userService;
        this.router = router;
        this.cfbLeagues = [];
        this.user = null;
    }
    LeaguesComponent.prototype.ngOnInit = function () {
        this.getProfile();
        this.getAllLeagues();
    };
    LeaguesComponent.prototype.getAllLeagues = function () {
        var _this = this;
        this.leagueService.getAllLeagues().subscribe(function (leagues) {
            for (var i = 0; i < leagues.length; i++) {
                if (leagues[i].status != 'closed' && leagues[i].sport == 3) {
                    _this.cfbLeagues.push(leagues[i]);
                }
            }
        });
    };
    LeaguesComponent.prototype.joinLeague = function (league) {
        var _this = this;
        if (this.user != null && this.user.league.length < 1) {
            this.leagueService.addParticipant(league._id, this.user).then(function (res) {
                if (res.success) {
                    var body = {
                        userId: _this.user._id,
                        league: league._id,
                        leagueName: league.name,
                        leagueSport: league.sport
                    };
                    _this.userService.updateLeague(body).subscribe(function (res) {
                        if (res.success) {
                            _this.flashMessage.show('Successfully Joined ' + league.name, { cssClass: 'alert-success' });
                            _this.router.navigate(['profile']);
                        }
                    });
                }
            });
        }
        else if (this.user == null) {
            this.flashMessage.show('You must be logged in to enter a league', { cssClass: 'alert-warning' });
        }
        else {
            this.flashMessage.show('You can only enter one league at a time.', { cssClass: 'alert-warning' });
        }
    };
    LeaguesComponent.prototype.getProfile = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            _this.flashMessage.show('Please log in to enter leagues', { cssClass: 'alert-warning' });
        });
    };
    LeaguesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leagues',
            template: __webpack_require__(721),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_league_service__["a" /* LeagueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_league_service__["a" /* LeagueService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], LeaguesComponent);
    return LeaguesComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/leagues.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odds_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LiveMenuComponent = (function () {
    function LiveMenuComponent(router, dataService, oddsService) {
        this.router = router;
        this.dataService = dataService;
        this.oddsService = oddsService;
        this.soccer = [];
        this.soccerLeagues = [];
    }
    LiveMenuComponent.prototype.ngOnInit = function () {
        this.soccer = [{ league: 'England Premier League', id: 94 }, { league: 'England League 1', id: 587 }, { league: 'UEFA', id: 6542 }, { league: 'UEFA Europe League Qualifying', id: 5823 },
            { league: 'Italy Serie A', id: 199 }, { league: 'Spain Primera Liga', id: 207 }, { league: 'Spain Copa Federacion', id: 429 },
            { league: 'Germany Bundesliga 1', id: 123 }, { league: 'France Ligue 1', id: 99 }, { league: 'USA MLS', id: 242 }, { league: 'Elite Cup Friendlies', id: 631 },
            { league: 'Europe Friendlies', id: 363 }, { league: 'Russia Premier League', id: 153 }, { league: 'Republic of Ireland Premier Division', id: 398 },
            { league: 'Copa Sudamericano', id: 445 }, { league: 'Brazil Serie A', id: 155 }];
        this.getLiveEvents(1, 0);
    };
    LiveMenuComponent.prototype.navigate = function (sport, league) {
        this.dataService.addSport(sport);
        this.dataService.setLeague(league);
        this.router.navigate(['/live']);
    };
    LiveMenuComponent.prototype.getLiveEvents = function (sportId, leagueId) {
        var _this = this;
        this.oddsService.getLiveEvents(sportId, leagueId).then(function (events) {
            _this.soccerLeagues = events;
            for (var i = 0; i < _this.soccer.length; i++) {
                var live = false;
                for (var j = 0; j < _this.soccerLeagues.length; j++) {
                    if (_this.soccer[i].id == _this.soccerLeagues[j].league) {
                        live = true;
                    }
                }
                _this.soccer[i].live = live;
            }
        }, function (error) {
            console.log(error);
        });
    };
    LiveMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-live-menu',
            template: __webpack_require__(722),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */]) === 'function' && _c) || Object])
    ], LiveMenuComponent);
    return LiveMenuComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/live-menu.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odds_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LiveComponent = (function () {
    function LiveComponent(userService, oddsService, authService, router, dataService, flashMessage) {
        this.userService = userService;
        this.oddsService = oddsService;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.flashMessage = flashMessage;
        this.eventsArray = [];
        this.eventOddsArray = [];
    }
    LiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sport = this.dataService.getSports();
        var league = this.dataService.getLeague();
        this.getLiveEvents(this.sport, league);
        this.interval = setInterval(function () {
            _this.refreshLiveEventOdds(_this.eventsArray);
            console.log('Getting Live Odds for ' + _this.sport);
        }, 10000);
    };
    LiveComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
        console.log('Destroyed');
    };
    LiveComponent.prototype.getLiveEvents = function (sportId, leagueId) {
        var _this = this;
        this.oddsService.getLiveEvents(sportId, leagueId).then(function (events) {
            _this.eventsArray = events;
            _this.getLiveEventOdds(_this.eventsArray);
        }, function (error) {
            console.log(error);
        });
    };
    LiveComponent.prototype.getLiveEventOdds = function (events) {
        var _this = this;
        for (var i = 0; i < events.length; i++) {
            this.oddsService.getLiveEventOdds(events[i].id, events[i].homeTeam, events[i].homeTeamImage, events[i].awayTeam, events[i].awayTeamImage, events[i].sport, events[i].epoch).subscribe(function (data) {
                _this.eventOddsArray.push(data);
                _this.eventOddsArray = _this.sortEventOdds(_this.eventOddsArray);
                console.log(_this.eventOddsArray);
            });
        }
    };
    LiveComponent.prototype.refreshLiveEventOdds = function (events) {
        var _this = this;
        for (var i = 0; i < events.length; i++) {
            this.oddsService.getLiveEventOdds(events[i].id, events[i].homeTeam, events[i].homeTeamImage, events[i].awayTeam, events[i].awayTeamImage, events[i].sport, events[i].epoch).subscribe(function (data) {
                for (var i = 0; i < _this.eventOddsArray.length; i++) {
                    if (_this.eventOddsArray[i].id == data.id) {
                        _this.eventOddsArray[i] = data;
                    }
                }
            });
        }
    };
    LiveComponent.prototype.sortEventOdds = function (odds) {
        if (odds.length == 1) {
            return odds;
        }
        else {
            for (var i = 0; i < odds.length; i++) {
                for (var j = 0; j < odds.length - 1 - i; j++) {
                    if (odds[j].epoch > odds[j + 1].epoch) {
                        var tmpOdds = odds[j];
                        odds[j] = odds[j + 1];
                        odds[j + 1] = tmpOdds;
                    }
                }
            }
            return odds;
        }
    };
    LiveComponent.prototype.placeBet = function (action, type) {
        var _this = this;
        action.betType = type;
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addStraightBet(action, profile, 'live');
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            return false;
        });
    };
    LiveComponent.prototype.placeBetWithIndex = function (action, type, oddsArray, i) {
        var oddsArrNum = oddsArray[i].number;
        var oddsArrOdds = oddsArray[i].odds;
        if (type == 'homeTeamRL') {
            action.homeTeamRL = oddsArrNum;
            action.homeTeamRLOdds = oddsArrOdds;
        }
        else if (type == 'awayTeamRL') {
            action.awayTeamRL = oddsArrNum;
            action.awayTeamRLOdds = oddsArrOdds;
        }
        else if (type == 'over') {
            action.over.number = oddsArrNum;
            action.over.odds = oddsArrOdds;
        }
        else if (type == 'under') {
            action.under.number = oddsArrNum;
            action.under.odds = oddsArrOdds;
        }
        this.placeBet(action, type);
    };
    LiveComponent.prototype.addPlus = function (odds) {
        odds = parseFloat(odds);
        if (odds > 0) {
            return '+';
        }
        else {
            return '';
        }
    };
    LiveComponent.prototype.showOdds = function (odds) {
        console.log(odds);
        odds = parseFloat(odds);
        if (odds != 0 && odds != null && odds != undefined && odds > -400 && odds < 400) {
            return true;
        }
        else {
            return false;
        }
    };
    LiveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-live',
            template: __webpack_require__(723),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _f) || Object])
    ], LiveComponent);
    return LiveComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/live.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odds_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bets_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuComponent = (function () {
    function MenuComponent(router, dataService, oddsService, betService, authService) {
        this.router = router;
        this.dataService = dataService;
        this.oddsService = oddsService;
        this.betService = betService;
        this.authService = authService;
        this.actions = [];
        this.soccer = [];
        this.tennis = [];
        this.showTennis = false;
        this.showSoccer = false;
        this.nflProps = [];
        this.mlbProps = [];
        this.cfbProps = [];
        this.leagueSport = 0;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.getOdds();
        // this.soccer = [{league:'England Premier League', id:94}, {league:'England League 1', id:587}, {league:'UEFA', id:6542}, {league:'UEFA Europe League Qualifying', id:5823},
        // {league:'Italy Serie A', id:199}, {league:'Spain Primera Liga', id:207}, {league:'Spain Copa Federacion', id:429},
        // {league:'Germany Bundesliga 1', id:123}, {league:'France Ligue 1', id:99}, {league:'USA MLS', id:242}, {league:'Elite Cup Friendlies', id:631},
        // {league:'Europe Friendlies', id:363}, {league:'Russia Premier League', id:153}, {league:'Republic of Ireland Premier Division', id:398},
        // {league:'Copa Sudamericano', id:445}, {league:'Brazil Serie A', id:155}];
        // this.getProps();
        // this.setUpTennis();
    };
    // setUpTennis(){
    //   var tmpArray = [];
    //   this.oddsService.getUpcomingTennisEvents().subscribe((events) => {
    //     if(events.length > 0){
    //       for (var i = 0; i < events.length; i++){
    //         var tmpEvent = events[i].split('/');
    //         this.tennis.push({id:tmpEvent[0], league:tmpEvent[1]});
    //       }
    //     }
    //   });
    // }
    MenuComponent.prototype.navigate = function (sport) {
        this.dataService.addSport(sport);
        this.dataService.setJsonOddsEvents(this.actions);
        this.router.navigate(['/straight']);
    };
    MenuComponent.prototype.moreOdds = function (sport, league) {
        this.dataService.addSport(sport);
        this.dataService.setLeague(league);
        this.router.navigate(['/other']);
    };
    MenuComponent.prototype.moreOddsParlay = function (sport, league) {
        this.dataService.addSport(sport);
        this.dataService.setLeague(league);
        this.router.navigate(['/parlay']);
    };
    MenuComponent.prototype.parlay = function (sport) {
        this.dataService.addSport(sport);
        this.dataService.setJsonOddsEvents(this.actions);
        this.router.navigate(['/parlay']);
    };
    MenuComponent.prototype.teaser = function (sport, teaser) {
        this.dataService.addSport(sport);
        this.dataService.setJsonOddsEvents(this.actions);
        this.dataService.setTeaser(teaser);
        this.router.navigate(['/teaser']);
    };
    MenuComponent.prototype.getOdds = function () {
        var _this = this;
        var tempArr = [];
        this.oddsService.getOdds().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.actions.push(data[i]);
                _this.actions = _this.sortEventOdds(_this.actions);
            }
        });
    };
    // getProps(){
    //   this.betService.getAllCustomBets().subscribe(bets => {
    //     for (var i = 0; i < bets.length; i++){
    //       if(bets[i].sport=='nfl'){
    //         this.nflProps.push(bets[i]);
    //       } else if (bets[i].sport=='cfb'){
    //         this.cfbProps.push(bets[i]);
    //       } else if (bets[i].sport=='mlb'){
    //         this.mlbProps.push(bets[i]);
    //       }
    //     }
    //   });
    // }
    //
    // props(sport){
    //   this.dataService.addPropSport(sport);
    //   this.router.navigate(['/props']);
    // }
    MenuComponent.prototype.sortEventOdds = function (odds) {
        if (odds.length == 1) {
            return odds;
        }
        else {
            for (var i = 0; i < odds.length; i++) {
                for (var j = 0; j < odds.length - 1 - i; j++) {
                    if (odds[j].epoch > odds[j + 1].epoch) {
                        var tmpOdds = odds[j];
                        odds[j] = odds[j + 1];
                        odds[j + 1] = tmpOdds;
                    }
                }
            }
            return odds;
        }
    };
    // clickShowTennis(){
    //   if(this.showTennis == false){
    //     this.showTennis = true;
    //   } else {
    //     this.showTennis = false;
    //   }
    // }
    //
    // clickShowSoccer(){
    //   if(this.showSoccer == false){
    //     this.showSoccer = true;
    //   } else {
    //     this.showSoccer = false;
    //   }
    // }
    MenuComponent.prototype.addHours = function (date) {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(724),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_bets_service__["a" /* BetService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/menu.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, dataService) {
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
    }
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.route = function (route) {
        this.router.navigate([route]);
    };
    // showAdmin(){
    //   return JSON.parse(this.authService.getUsername()).name == 'admin'
    // }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(725),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_odds_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OtherComponent = (function () {
    function OtherComponent(oddsService, authService, router, dataService, flashMessage) {
        this.oddsService = oddsService;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.flashMessage = flashMessage;
        this.eventsArray = [];
        this.eventOddsArray = [];
        this.sport = 0;
    }
    OtherComponent.prototype.ngOnInit = function () {
        this.eventsArray = [];
        this.sport = this.dataService.getSports();
        var league = this.dataService.getLeague();
        this.getEvents(this.sport, league);
    };
    OtherComponent.prototype.getEvents = function (sportId, leagueId) {
        var _this = this;
        this.oddsService.getUpcomingEvents(sportId, leagueId).then(function (events) {
            for (var i = 0; i < events.length; i++) {
                _this.eventsArray.push(events[i]);
            }
            _this.getUpcomingEventOdds(_this.eventsArray);
        }, function (error) {
            console.log(error);
        });
    };
    OtherComponent.prototype.getUpcomingEventOdds = function (events) {
        var _this = this;
        for (var i = 0; i < events.length; i++) {
            this.oddsService.getUpcomingEventOdds(events[i].id, events[i].homeTeam, events[i].awayTeam, events[i].time, events[i].sport).subscribe(function (data) {
                if (data.id != undefined) {
                    _this.eventOddsArray.push(data);
                    _this.eventOddsArray = _this.sortEventOdds(_this.eventOddsArray);
                }
                console.log(_this.eventOddsArray);
            });
        }
    };
    OtherComponent.prototype.sortEventOdds = function (odds) {
        if (odds.length == 1) {
            return odds;
        }
        else {
            for (var i = 0; i < odds.length; i++) {
                for (var j = 0; j < odds.length - 1 - i; j++) {
                    if (odds[j].epoch > odds[j + 1].epoch) {
                        var tmpOdds = odds[j];
                        odds[j] = odds[j + 1];
                        odds[j + 1] = tmpOdds;
                    }
                }
            }
            return odds;
        }
    };
    OtherComponent.prototype.showBaseballDetails = function (action) {
        if (action.awayTeamFirstHalf != 0 || action.homeTeamFirstHalf != 0 || action.awayTeamTotalLine != 0 || action.homeTeamTotalLine != 0 || action.awayTeamRL.length > 0 || action.homeTeamRL.length > 0 || action.runInFirst != 0) {
            return true;
        }
        else {
            return false;
        }
    };
    OtherComponent.prototype.showFootballDetails = function (action) {
        if (action.awayTeamFirstHalf != 0 || action.homeTeamFirstHalf != 0 || action.awayTeamRLFirstHalf != 0 || action.homeTeamRLFirstHalf || action.firstHalfOver != 0 || action.firstHalfUnder) {
            return true;
        }
        else {
            return false;
        }
    };
    OtherComponent.prototype.placeBet = function (action, type) {
        var _this = this;
        action.betType = type;
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addStraightBet(action, profile, 'straight');
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            return false;
        });
    };
    OtherComponent.prototype.placeBetWithIndex = function (action, type, oddsArray, i) {
        var _this = this;
        action.betType = type;
        if (type = 'awayTeamRL') {
            action.awayTeamRL = oddsArray[i].number;
            action.awayTeamRLOdds = oddsArray[i].odds;
        }
        if (type = 'homeTeamRL') {
            action.homeTeamRL = oddsArray[i].number;
            action.homeTeamRLOdds = oddsArray[i].odds;
        }
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addStraightBet(action, profile, 'straight');
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            return false;
        });
    };
    OtherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-other',
            template: __webpack_require__(726),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object])
    ], OtherComponent);
    return OtherComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/other.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_odds_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParlayComponent = (function () {
    function ParlayComponent(flashMessage, authService, oddsService, dataService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.oddsService = oddsService;
        this.dataService = dataService;
        this.router = router;
        this.odds = [];
        this.testOdds = [];
        this.parlay = [];
        this.events = [];
    }
    ParlayComponent.prototype.ngOnInit = function () {
        this.sport = this.dataService.getSports();
        if (this.sport != 1) {
            var tmpOdds = this.dataService.getJsonOddsEvents();
            if (tmpOdds.length > 0) {
                this.setUpActions(tmpOdds, this.sport);
            }
            else {
                this.getOdds();
            }
        }
        else {
            this.league = this.dataService.getLeague();
            this.getEvents(this.sport, this.league);
        }
    };
    ParlayComponent.prototype.getEvents = function (sportId, leagueId) {
        var _this = this;
        this.oddsService.getUpcomingEvents(sportId, leagueId).then(function (events) {
            for (var i = 0; i < events.length; i++) {
                _this.events.push(events[i]);
            }
            _this.getUpcomingEventOdds(_this.events);
        }, function (error) {
            console.log(error);
        });
    };
    ParlayComponent.prototype.getUpcomingEventOdds = function (events) {
        var _this = this;
        for (var i = 0; i < events.length; i++) {
            this.oddsService.getUpcomingEventOdds(events[i].id, events[i].homeTeam, events[i].awayTeam, events[i].time, events[i].sport).subscribe(function (data) {
                if (data.id != undefined) {
                    _this.odds.push(data);
                    _this.odds = _this.sortEventOdds(_this.odds);
                }
                console.log(_this.odds);
            });
        }
    };
    ParlayComponent.prototype.sortEventOdds = function (odds) {
        if (odds.length == 1) {
            return odds;
        }
        else {
            for (var i = 0; i < odds.length; i++) {
                for (var j = 0; j < odds.length - 1 - i; j++) {
                    if (odds[j].epoch > odds[j + 1].epoch) {
                        var tmpOdds = odds[j];
                        odds[j] = odds[j + 1];
                        odds[j + 1] = tmpOdds;
                    }
                }
            }
            return odds;
        }
    };
    ParlayComponent.prototype.getOdds = function () {
        var _this = this;
        console.log('Getting Odds');
        var tempArrId = [];
        var tempArr = [];
        this.oddsService.getOdds().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].sport == _this.sport && tempArrId.indexOf(data[i].id) < 0) {
                    var tmpGameDate = new Date(data[i].epoch).getDate();
                    if (tmpGameDate == 1) {
                        tempArrId.push(data[i].id);
                        tempArr.push(data[i]);
                        tempArr = _this.dataService.sortBets(tempArr);
                        _this.setUpActions(tempArr, _this.sport);
                    }
                }
            }
        });
    };
    ParlayComponent.prototype.setUpActions = function (tempActions, sport) {
        for (var i = 0; i < tempActions.length; i++) {
            if (tempActions[i].sport == sport) {
                this.odds.push(tempActions[i]);
            }
        }
    };
    ParlayComponent.prototype.parlayCheckboxClick = function (event, odd, type) {
        if (event.target.checked == true) {
            odd.betType = type;
            if (this.duplicateCheck(odd.id)) {
                this.flashMessage.show('Only one bet is allowed per game', { cssClass: 'alert-danger', timeout: 2000 });
                event.target.checked = false;
            }
            else {
                this.parlay.push(odd);
            }
        }
        else {
            this.removeParlayItem(odd.id);
        }
        console.log(this.parlay);
    };
    ParlayComponent.prototype.removeParlayItem = function (oddsId) {
        for (var i = 0; i < this.parlay.length; i++) {
            if (this.parlay[i].id === oddsId) {
                this.parlay.splice(i, 1);
            }
        }
    };
    ParlayComponent.prototype.duplicateCheck = function (oddsId) {
        for (var i = 0; i < this.parlay.length; i++) {
            if (this.parlay[i].id == oddsId) {
                return true;
            }
        }
        return false;
    };
    ParlayComponent.prototype.placeBet = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addMultipleBet(_this.parlay, profile, 'parlay');
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            return false;
        });
    };
    ParlayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parlay',
            template: __webpack_require__(727),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], ParlayComponent);
    return ParlayComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/parlay.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bets_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, betService, dataService) {
        this.authService = authService;
        this.betService = betService;
        this.dataService = dataService;
        this.pendingBets = [];
        this.closedBets = [];
        this.propAndFutures = [];
        this.showPending = false;
        this.showPendingProp = false;
        this.showClosed = false;
        this.amountPending = 0;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getAllBets();
    };
    //Gets current logged in user and then gets corresponding bets for that user
    ProfileComponent.prototype.getAllBets = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(_this.user);
            _this.betService.getBets(profile, 'all').subscribe(function (bets) {
                for (var i = 0; i < bets.length; i++) {
                    if (bets[i].status == 'open') {
                        _this.pendingBets.push(bets[i]);
                        _this.pendingBets = _this.dataService.sortBets(_this.pendingBets);
                        _this.amountPending = _this.amountPending + bets[i].betAmount;
                    }
                    else {
                        _this.closedBets.push(bets[i]);
                        _this.closedBets = _this.dataService.sortBets(_this.closedBets);
                    }
                }
            }, function (error) {
                console.log(error);
                return false;
            });
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    ProfileComponent.prototype.showHidePending = function () {
        if (this.showPending == false) {
            this.showPending = true;
        }
        else {
            this.showPending = false;
        }
    };
    ProfileComponent.prototype.showHideClosed = function () {
        if (this.showClosed == false) {
            this.showClosed = true;
        }
        else {
            this.showClosed = false;
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(728),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bets_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PropsComponent = (function () {
    function PropsComponent(dataService, betService, authService, router, flashMessage) {
        this.dataService = dataService;
        this.betService = betService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.propArr = [];
        this.futureArr = [];
    }
    PropsComponent.prototype.ngOnInit = function () {
        this.sport = this.dataService.getPropSport();
        this.getProps();
    };
    PropsComponent.prototype.getProps = function () {
        var _this = this;
        this.betService.getAllCustomBets().subscribe(function (bets) {
            for (var i = 0; i < bets.length; i++) {
                if (bets[i].sport == _this.sport && bets[i].type == 'future' && bets[i].expired == false) {
                    _this.futureArr.push(bets[i]);
                }
                else if (bets[i].sport == _this.sport && bets[i].type == 'prop' && bets[i].expired == false) {
                    _this.propArr.push(bets[i]);
                }
            }
        });
    };
    PropsComponent.prototype.placeBet = function (action) {
        var _this = this;
        action.betType = 'custom';
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addCustomBet(action);
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            return false;
        });
    };
    PropsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-props',
            template: __webpack_require__(729),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object])
    ], PropsComponent);
    return PropsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/props.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            password: this.password,
            credit: this.credit,
            currentBalance: 0
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(730),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/register.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlatechampComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlatechampComponent = (function () {
    function SlatechampComponent() {
    }
    SlatechampComponent.prototype.ngOnInit = function () {
    };
    SlatechampComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slatechamp',
            template: __webpack_require__(731),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], SlatechampComponent);
    return SlatechampComponent;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/slatechamp.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_odds_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StraightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StraightComponent = (function () {
    function StraightComponent(oddsService, authService, router, dataService, flashMessage) {
        this.oddsService = oddsService;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.flashMessage = flashMessage;
        this.actions = [];
    }
    StraightComponent.prototype.ngOnInit = function () {
        var tempActions = this.dataService.getJsonOddsEvents();
        this.sport = this.dataService.getSports();
        if (tempActions.length > 0) {
            this.setUpActions(tempActions, this.sport);
        }
        else {
            this.getOdds();
        }
        console.log(this.actions);
    };
    StraightComponent.prototype.getOdds = function () {
        var _this = this;
        var tempArr = [];
        this.oddsService.getOdds().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].sport == _this.sport) {
                    var tmpGameDate = new Date(data[i].epoch).getDate();
                    if (tmpGameDate == 1) {
                        _this.actions.push(data[i]);
                        _this.actions = _this.sortEventOdds(_this.actions);
                    }
                }
            }
        });
    };
    StraightComponent.prototype.sortEventOdds = function (odds) {
        if (odds.length == 1) {
            return odds;
        }
        else {
            for (var i = 0; i < odds.length; i++) {
                for (var j = 0; j < odds.length - 1 - i; j++) {
                    if (odds[j].epoch > odds[j + 1].epoch) {
                        var tmpOdds = odds[j];
                        odds[j] = odds[j + 1];
                        odds[j + 1] = tmpOdds;
                    }
                }
            }
            return odds;
        }
    };
    StraightComponent.prototype.setUpActions = function (tempActions, sport) {
        for (var i = 0; i < tempActions.length; i++) {
            if (tempActions[i].sport == sport) {
                this.actions.push(tempActions[i]);
            }
        }
    };
    StraightComponent.prototype.placeBet = function (action, type) {
        var _this = this;
        action.betType = type;
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addStraightBet(action, profile, 'straight');
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            return false;
        });
    };
    // placeGolf(tourn, part){
    //   tourn.betType = 'golf';
    //   tourn.participant = part;
    //   this.authService.getProfile().subscribe(profile => {
    //     this.dataService.addStraightBet(tourn, profile, 'straight');
    //     this.router.navigate(['confirm']);
    //   },
    //   err =>{
    //     this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
    //     return false;
    //   });
    // }
    StraightComponent.prototype.addPlus = function (odds) {
        odds = parseFloat(odds);
        if (odds > 0) {
            return '+';
        }
        else {
            return odds;
        }
    };
    StraightComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-straight',
            template: __webpack_require__(732),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object])
    ], StraightComponent);
    return StraightComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/straight.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_odds_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeaserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeaserComponent = (function () {
    function TeaserComponent(flashMessage, authService, oddsService, dataService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.oddsService = oddsService;
        this.dataService = dataService;
        this.router = router;
        this.odds = [];
        this.teaser = [];
    }
    TeaserComponent.prototype.ngOnInit = function () {
        this.teaserNum = this.dataService.getTeaser();
        this.sport = this.dataService.getSports();
        var tmpOdds = this.dataService.getJsonOddsEvents();
        if (tmpOdds.length > 0) {
            this.setUpActions(tmpOdds, this.sport);
        }
        else {
            this.getOdds();
        }
    };
    TeaserComponent.prototype.setUpActions = function (tempActions, sport) {
        for (var i = 0; i < tempActions.length; i++) {
            if (tempActions[i].sport == sport) {
                if (this.teaserNum == 2) {
                    tempActions[i].homeTeamRL = this.addPlus(parseFloat(tempActions[i].homeTeamRL) + 6);
                    tempActions[i].awayTeamRL = this.addPlus(parseFloat(tempActions[i].awayTeamRL) + 6);
                    tempActions[i].totalNumberTeaserOver = parseFloat(tempActions[i].totalNumber) - 6;
                    tempActions[i].totalNumberTeaserUnder = parseFloat(tempActions[i].totalNumber) + 6;
                }
                else {
                    tempActions[i].homeTeamRL = this.addPlus(parseFloat(tempActions[i].homeTeamRL) + 10);
                    tempActions[i].awayTeamRL = this.addPlus(parseFloat(tempActions[i].awayTeamRL) + 10);
                    tempActions[i].totalNumberTeaserOver = parseFloat(tempActions[i].totalNumber) - 10;
                    tempActions[i].totalNumberTeaserUnder = parseFloat(tempActions[i].totalNumber) + 10;
                }
                this.odds.push(tempActions[i]);
            }
        }
    };
    TeaserComponent.prototype.addPlus = function (odd) {
        if (odd > 0) {
            return '+' + odd;
        }
        else {
            return odd;
        }
    };
    TeaserComponent.prototype.teaserCheckboxClick = function (event, odd, type) {
        if (event.target.checked == true) {
            odd.betType = type;
            if (this.duplicateCheck(odd.id)) {
                this.flashMessage.show('Only one bet is allowed per game', { cssClass: 'alert-danger', timeout: 2000 });
                event.target.checked = false;
            }
            else {
                this.teaser.push(odd);
            }
        }
        else {
            this.removeTeaserItem(odd.id);
        }
        console.log(this.teaser);
    };
    TeaserComponent.prototype.removeTeaserItem = function (oddsId) {
        for (var i = 0; i < this.teaser.length; i++) {
            if (this.teaser[i].id === oddsId) {
                this.teaser.splice(i, 1);
            }
        }
    };
    TeaserComponent.prototype.duplicateCheck = function (oddsId) {
        for (var i = 0; i < this.teaser.length; i++) {
            if (this.teaser[i].id == oddsId) {
                return true;
            }
        }
        return false;
    };
    TeaserComponent.prototype.placeBet = function () {
        var _this = this;
        if (this.teaser.length != this.teaserNum) {
            this.flashMessage.show('Please select ' + this.teaserNum + ' bets', { cssClass: 'alert-danger' });
        }
        else {
            this.authService.getProfile().subscribe(function (profile) {
                _this.dataService.addMultipleBet(_this.teaser, profile, 'teaser');
                _this.router.navigate(['confirm']);
            }, function (err) {
                _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
                return false;
            });
        }
    };
    TeaserComponent.prototype.getOdds = function () {
        var _this = this;
        var tempArrId = [];
        var tempArr = [];
        this.oddsService.getOdds().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].sport == _this.sport) {
                    var tmpGameDate = new Date(data[i].epoch).getDate();
                    if (tmpGameDate == 1) {
                        tempArr.push(data[i]);
                        tempArr = _this.dataService.sortBets(tempArr);
                        _this.setUpActions(tempArr, _this.sport);
                    }
                }
            }
        });
    };
    TeaserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-teaser',
            template: __webpack_require__(733),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], TeaserComponent);
    return TeaserComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/teaser.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/app.guards.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/environment.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bet; });
var Bet = (function () {
    function Bet(profile, bet, source, odds, betAmount, winAmount, betType) {
        this.description = [];
        this.subBets = [];
        this.userId = profile.user._id;
        this.username = profile.user.username;
        for (var i = 0; i < bet.length; i++) {
            this.description.push(bet[i].betDetails);
            this.subBets.push(bet[i]);
        }
        this.source = source;
        this.odds = odds;
        this.betAmount = betAmount;
        this.winAmount = winAmount;
        var tmpIndex = 0;
        var tmpTime = 0;
        for (var i = 0; i < bet.length; i++) {
            if (bet[i].epoch > tmpTime) {
                tmpTime = bet[i].epoch;
                tmpIndex = i;
            }
        }
        this.epoch = tmpTime;
        this.gameDate = bet[tmpIndex].matchDate;
        this.gameTime = bet[tmpIndex].matchTime;
        this.betType = betType;
    }
    return Bet;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/bet.js.map

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ".alert-fixed {\n    position:fixed;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    z-index:9999;\n    border-radius:0px\n}\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ".inside {\n    display: inline-block;\n    position: fixed;\n    bottom: 10px;\n    left: 50%;\n    margin-left: -50px;\n}\n\n.smallFont {\n  font-size: 65%;\n}\n"

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BetService = (function () {
    function BetService(http) {
        this.http = http;
    }
    BetService.prototype.placeBet = function (bet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/bets/placeBet', bet, {headers: headers})
        return this.http.post('bets/placeBet', bet, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.closeBet = function (betId, result) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var bet = {
            betId: betId,
            status: result
        };
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/bets/closePending', bet, {headers: headers})
        return this.http.post('bets/closePending', bet, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.getBetsById = function (profileId, status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var userId = profileId;
        var url = 'bets/getBets?userId=' + userId + '&status=' + status;
        var url2 = 'http://localhost:8080/bets/getBets?userId=' + userId + '&status=' + status;
        headers.append('Content-Type', 'application/json');
        //return this.http.get(url2, {headers: headers})
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.getBets = function (profile, status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var userId = profile.user._id;
        var url = 'bets/getBets?userId=' + userId + '&status=' + status;
        var url2 = 'http://localhost:8080/bets/getBets?userId=' + userId + '&status=' + status;
        headers.append('Content-Type', 'application/json');
        //return this.http.get(url2, {headers: headers})
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.getAllPendings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/bets/getAllPendings', {headers: headers})
        return this.http.get('bets/getAllPendings', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.createCustom = function (bet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/bets/createCustom', bet, {headers: headers})
        return this.http.post('bets/createCustom', bet, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.getAllCustomBets = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/bets/allCustomBets', {headers: headers})
        return this.http.get('bets/allCustomBets', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.placePropBet = function (bet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/bets/placePropBet', bet, {headers: headers})
        return this.http.post('bets/placePropBet', bet, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.getPropBets = function (profile, status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var userId = profile.user._id;
        //const url = 'http://localhost:8080/bets/getPropBets?userId=' + userId + '&status=' + status;
        var url = 'bets/getPropBets?userId=' + userId + '&status=' + status;
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.expireCustomBet = function (bet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/bets/closeCustomBet', bet, {headers: headers})
        return this.http.post('bets/closeCustomBet', bet, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], BetService);
    return BetService;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/bets.service.js.map

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ".loader {\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n.salheight {\n  height:100%;\n}\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ".masthead {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 35rem;\n  padding: 10rem 0;\n  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.1) 0%, rgba(22, 22, 22, 0.5) 75%, #161616 100%), url(\"assets/images/bg-masthead.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-size: cover;\n}\n\n.masthead h1 {\n  font-size: 2rem;\n  line-height: 2.5rem;\n  letter-spacing: 0.8rem;\n  background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n}\n\n.masthead h2 {\n  max-width: 20rem;\n  font-size: 1rem;\n}\n\n@media (min-width: 768px) {\n  .masthead h1 {\n    font-size: 4rem;\n    line-height: 4rem;\n  }\n}\n\n@media (min-width: 992px) {\n  .masthead {\n    height: 100vh;\n    padding: 0;\n  }\n  .masthead h1 {\n    font-size: 6.5rem;\n    line-height: 6.5rem;\n    letter-spacing: 0.8rem;\n  }\n  .masthead h2 {\n    max-width: 30rem;\n    font-size: 1.25rem;\n  }\n}\n\n.btn {\n  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n  padding: .5rem .8rem;\n  font-size: 80%;\n  text-transform: uppercase;\n  letter-spacing: .15rem;\n  border: 0;\n}\n\n.in-test {\n  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n  font-size: 16px;\n  text-transform: uppercase;\n  letter-spacing: ..8rem;\n  border: 0;\n}\n\n.btn-primary {\n  background-color: #64a19d;\n}\n\n.btn-primary:hover {\n  background-color: #4f837f;\n}\n\n.btn-primary:focus {\n  background-color: #4f837f;\n  color: white;\n}\n\n.btn-primary:active {\n  background-color: #467370 !important;\n}\n\na {\n  color: #64a19d;\n}\n\na:focus, a:hover {\n  text-decoration: none;\n  color: #3c6360;\n}\n\n.bg-black {\n  background-color: #161616 !important;\n}\n\n.bg-primary {\n  background-color: #64a19d !important;\n}\n\n.text-primary {\n  color: #64a19d !important;\n}\n\nfooter {\n  padding: 5rem 0;\n}\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ".topNav{\n  margin-top:5rem;\n}\n\n.headerFont{\n  font-size: 100%;\n}\n\n.fontSmall{\n  font-size:60%;\n}\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ".fontSmall {\n  font-size:75%;\n}\n\n.row{\n  margin-left: 0px;\n  margin-right: 0px;\n}\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.fontSmall {\n  font-size: 75%;\n}\n\n.container{\n  height: 100%;\n}\n\n.btn {\n  font-size: 75%;\n}\n\n.loader {\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n    margin-left:auto;\n    margin-right:auto;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n.topNav{\n  margin-top:5rem;\n}\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ".btn {\n  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n  padding: .5rem .8rem;\n  font-size: 70%;\n  text-transform: uppercase;\n  border: 0;\n}\n\n.soccer-width {\n  width:75%;\n}\n\n.topNav {\n  margin-top:5rem;\n}\n\n.disabledbutton {\n    pointer-events: none;\n    opacity: 0.4;\n}\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ".nav-link{ cursor: pointer; }\n\n.masthead {\n  font-size: 1rem;\n  line-height: 2.5rem;\n  letter-spacing: 0.1rem;\n  background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n}\n\n.bg-dark {\n  background-color: #A9A9A9;\n}\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.smallFont {\n  font-size: 75%;\n}\n\n.btn {\n  font-size: 75%;\n}\n\n.loader {\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n    margin-left:auto;\n    margin-right:auto;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n.topNav{\n  margin-top:5rem;\n}\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ".inside {\n    display: inline-block;\n    position: fixed;\n    bottom: 10px;\n    left: 50%;\n    margin-left: -50px;\n}\n\n.row{\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.btn {\n  font-size: 60%;\n}\n\n.loader {\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n    margin-left:auto;\n    margin-right:auto;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n.topNav{\n  margin-top:5rem;\n}\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ".block {\n  height: calc(100vh - 72px);\n}\n\ntd {\n  font-size: 60%;\n}\n\n.row{\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.loader {\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n    margin-left:auto;\n    margin-right:auto;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n.topNav{\n  margin-top:5rem;\n}\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ".masthead {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 35rem;\n  padding: 10rem 0;\n  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.1) 0%, rgba(22, 22, 22, 0.5) 75%, #161616 100%), url(\"assets/images/bg-masthead.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-size: cover;\n}\n\n.masthead h1 {\n  font-size: 2.5rem;\n  line-height: 2.5rem;\n  letter-spacing: 0.8rem;\n  background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n}\n\n.masthead h2 {\n  max-width: 20rem;\n  font-size: 1rem;\n}\n\n@media (min-width: 768px) {\n  .masthead h1 {\n    font-size: 4rem;\n    line-height: 4rem;\n  }\n}\n\n@media (min-width: 992px) {\n  .masthead {\n    height: 100vh;\n    padding: 0;\n  }\n  .masthead h1 {\n    font-size: 6.5rem;\n    line-height: 6.5rem;\n    letter-spacing: 0.8rem;\n  }\n  .masthead h2 {\n    max-width: 30rem;\n    font-size: 1.25rem;\n  }\n}\n\n.btn {\n  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n  padding: .5rem .8rem;\n  font-size: 80%;\n  text-transform: uppercase;\n  letter-spacing: .15rem;\n  border: 0;\n}\n\n.in-test {\n  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n  font-size: 16px;\n  text-transform: uppercase;\n  letter-spacing: ..8rem;\n  border: 0;\n}\n\n.btn-primary {\n  background-color: #64a19d;\n}\n\n.btn-primary:hover {\n  background-color: #4f837f;\n}\n\n.btn-primary:focus {\n  background-color: #4f837f;\n  color: white;\n}\n\n.btn-primary:active {\n  background-color: #467370 !important;\n}\n\na {\n  color: #64a19d;\n}\n\na:focus, a:hover {\n  text-decoration: none;\n  color: #3c6360;\n}\n\n.bg-black {\n  background-color: #161616 !important;\n}\n\n.bg-primary {\n  background-color: #64a19d !important;\n}\n\n.text-primary {\n  color: #64a19d !important;\n}\n\nfooter {\n  padding: 5rem 0;\n}\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ".row{\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.imageDivHeight {\n  height: 3rem;\n}\n\n.card-pricing.popular {\n    z-index: 1;\n    border: 3px solid #007bff;\n}\n.card-pricing .list-unstyled li {\n    padding: .5rem 0;\n    color: #6c757d;\n}\n\n.font-small{\n  font-size: 80%;\n}\n\n.btn {\n  font-size: 75%;\n}\n\ntd {\n  font-size: 60%;\n}\n\nth {\n  font-size: 80%;\n}\n\n.loader {\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n    margin-left:auto;\n    margin-right:auto;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n.topNav{\n  margin-top:5rem;\n}\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ".inside {\n    display: inline-block;\n    position: fixed;\n    bottom: 10px;\n    left: 50%;\n    margin-left: -50px;\n}\n\n.row{\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.smallFont{\n  font-size:60%;\n}\n\n.btn {\n  font-size: 75%;\n}\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<app-navbar class=\"fixed-top\"></app-navbar>\n<div>\n\t<flash-messages class=\"alert-fixed\"></flash-messages>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-dark m-0 p-0 text-light\">\n  <div class=\"row mt-5\" align=\"center\">\n    <div class=\"col mt-2\">\n      <h3>Welcome</h3>\n\n\n      <div class=\"col bg-dark block text-light p-0 m-0 h-100\">\n\n        <div class=\"row pt-2 border-bottom\">\n          <div class=\"col\" align=\"center\">\n            <h5 *ngIf=\"showUsers==false\" (click)=\"showHideUsers()\">Show All Users</h5>\n            <h5 *ngIf=\"showUsers\" (click)=\"showHideUsers()\">Hide All Users</h5>\n          </div>\n        </div>\n        <div *ngIf=\"showUsers\">\n          <table class=\"table table-dark table-hover w-100\">\n            <thead>\n              <tr>\n                <th style=\"width:50%\">Username</th>\n                <th style=\"width:50%\">Current Balance</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of users\">\n                <td>{{user.username}}</td>\n                <td>{{user.currentBalance}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"row border-bottom\">\n          <div class=\"col\" align=\"center\">\n            <h5 class=\"mt-2\">Create a League</h5>\n          </div>\n        </div>\n\n        <form class=\"form-horizontal mt-3 mb-3\" autocomplete=\"off\">\n          <div class=\"form-group w-75\">\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"details\" placeholder=\"Enter League Name\">\n          </div>\n          <div class=\"form-group w-75\">\n            <input type=\"number\" [(ngModel)]=\"sport\" name=\"sport\" class=\"form-control\" id=\"sport\" placeholder=\"Enter Sport\">\n          </div>\n          <div class=\"form-group w-75\">\n            <input type=\"date\" [(ngModel)] =\"date\" name=\"date\">\n          </div>\n          <div class=\"form-group w-75\">\n            <input type=\"number\" [(ngModel)]=\"buyin\" name=\"buyin\" class=\"form-control\" id=\"buyin\" placeholder=\"Buyin Amount\">\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <button class=\"btn btn-primary mx-auto mt-3\" (click)=\"createLeague()\">Create League</button>\n            </div>\n          </div>\n        </form>\n\n        <div class=\"row pt-2 border-bottom\">\n          <div class=\"col\" align=\"center\">\n            <h5>Leagues</h5>\n          </div>\n        </div>\n        <div>\n          <table class=\"table table-dark table-hover w-100\">\n            <thead>\n              <tr>\n                <th style=\"width:75%\">Description</th>\n                <th style=\"width:25%\">Remove</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let league of leagueArray\">\n                <td class=\"smallFont\">{{league.name.toUpperCase()}}</td>\n                <td (click)=\"closeLeague(league)\">Close</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"btn btn-success btn-lg inside mb-2\" (click)=\"clickMethod()\">Clear Balances</div> -->\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n\n  <div class = \"col\" align = \"center\">\n    <h2 class=\"page-header pt-2\">Place Bet - Bet Slip</h2>\n    <p>{{betType}} BET</p>\n    <form (submit)=\"clickPlaceBet()\">\n\n      <ul class=\"list-group mb-2\">\n        <div *ngIf=\"betType != 'PROP' && betType != 'FUTURE'\">\n        <li class=\"list-group-item\" *ngFor=\"let bet of bet\">{{bet.betDetails}}</li>\n        </div>\n        <div *ngIf=\"betType == 'PROP' || betType == 'FUTURE'\">\n        <li class=\"list-group-item\">{{bet.betDetails}}  {{bet.odds}}</li>\n        </div>\n      </ul>\n\n      <div class=\"row p-0 m-0\">\n        <div class=\"col w-50\" align=\"left\">\n          <label for=\"amount\">Bet Amount:</label>\n          <input autocomplete=\"off\" type=\"number\" style=\"width:150px\" [(ngModel)]=\"betAmount\" name=\"betAmount\" class=\"form-control mr-2\" id=\"amount\">\n        </div>\n        <div class=\"col w-50\" *ngIf=\"betAmount>0\">\n          <label for=\"winamount\">Win Amount:</label>\n          <h3 class=\"m-0\" *ngIf=\"odds>0\">{{round(betAmount * odds/100)}}</h3>\n          <h3 class=\"m-0\" *ngIf=\"odds<0\">{{round(betAmount / (odds * -1) * 100)}}</h3>\n        </div>\n      </div>\n      <div class=\"row mt-2 ml-0 mr-0\" *ngIf=\"clickedSubmit==false\">\n        <div class=\"col w-50\" align=\"left\">\n          <a class=\"btn btn-block btn-warning\" (click)=\"cancelBet()\">Cancel</a>\n        </div>\n        <div class=\"col w-50\" align=\"right\">\n          <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Place Bet\">\n        </div>\n      </div>\n      <div class=\"mt-2\" *ngIf=\"clickedSubmit==true\">\n        <div class=\"loader\"></div>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead\">\n\t<div class=\"container h-100 align-items-center\">\n\t\t<div class=\"mx-auto text-center\">\n\t\t\t<h1 class=\"mx-auto text-uppercase mb-5\">SlateChamp</h1>\n\t\t\t<form (submit)=\"onLoginSubmit()\" class=\"form-inline d-flex\" autocomplete=\"off\" *ngIf=\"!authService.loggedIn()\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<input type=\"username\" [(ngModel)]=\"username\" name=\"username\" class=\"in-test form-control mb-2 mx-auto\" id=\"username\" placeholder=\"Username\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"in-test form-control flex-fill mb-2 mx-auto\" id=\"password\" placeholder=\"Password\">\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary mx-auto mt-3\">Login</button>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</header>\n<footer class=\"bg-black small text-center text-white-50\">\n\t<div class=\"container\">\n\t\tTerms of Service\n\t</div>\n</footer>\n<h2 *ngIf=\"termsOfServiceClicked\">Fathomless TOS</h2>\n<h2>Terms of Service</h2>\n<p>\n\tSlateChamp is for educational purposes only. SlateChamp is an information centric site that does not operate nor provide any form of real money online casino gambling entertainment. SlateChamp is a hub for information pertaining to 3rd parties for which we’ve reviewed and recommended on our site. Any and all information found on the SlateChamp website is to be used strictly for information purposes only. We do not warranty or guarantee any of the services offered by the 3rd parties that can be reached via means of links both direct download and those that allow you to first visit a 3rd party prior to engaging in activities on their site/software.\nWe reserve the right to change any information throughout the site in addition to any changes to our policies and procedures without any prior notice or consent. SlateChamp does not warranty the accuracy of any information found throughout the site which includes but is not limited to scores, reviews, screenshots, currency, et cetera. The information found on the site is to be provided on an “as is” basis and is without any warranty of any kind. Other 3rd parites which may include sites that do not accept wagers and online gambling action from players in addition to those that provided information on such sites is not our responsibility. We will not be held accountable for any information, offerings or other such information found on sites linked to from this site. Be sure to check any restrictions within our review before proceeding to the site.\nSlateChamp recommends that you look into your local laws before playing here. Players must be of legal age to play at casinos found here and it must be legal to play in your own city, town, state, province or country before doing so. We highly suggest carefully reviewing and evaluating policies of any casino and/or 3rd party you decide to engage with in playing before playing to avoid any complications, that may be associated with your location, age or other factor that may be included within the casino’s or 3rd parties own terms and conditions.\nUsers who are visitors to SlateChamp must understand that there is no sure thing when it comes to gambling both online and offline and thus SlateChamp will never be held accountable for any losses or damages incurred by visitors at online casinos or any other gambling type site.\nBy using our site you indemnify and release SlateChamp, platformUrl.com, affiliates, successors, assigns and any other companies which hereby are directly associated with the owners of the site from any potential legal action or liabilities.\nAs part of FTC digital advertising guidelines we are required to inform visitors to our site that we accept payment for advertising by the companies that can be found listed here on SlateChamp. (keep this if you want any ads on your site or remove it if you don’t plan to)\n</p>\n<h2>Free Gaming Simulator</h2>\n\t<p>This website allows for the simulation of online sports betting.  All money is virtual and has no actual value.  As a test user, you are not entitled to any intellectual property.  By providing feedback and suggestions, you may be rewarded on a case by case basis.  Data about your bets will be collected for analytical purposes.</p>\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-muted topNav\" *ngIf=\"leagues.length < 1\" align=\"center\"><p>Loading League Leaderboard</p></div>\n<div class=\"loader\" *ngIf=\"leagues.length < 1\"></div>\n\n<div class=\"container pt-5 bg-dark\" *ngIf=\"leagues.length > 0\">\n  <div class=\"row\" align=\"center\">\n\n    <div class=\"row mt-3 ml-0 mr-0\" *ngFor=\"let league of leagues\">\n      <div class=\"col bg-dark block text-light p-0 m-0 h-100\" *ngFor=\"let league of leagues\">\n        <div class=\"col\" align=\"center\">\n          <h5 class=\"headerFont\">{{league.name}} - Total Pool: {{league.buyin * league.participants.length}}</h5>\n        </div>\n        <div>\n          <table class=\"table table-dark table-hover w-100\">\n            <thead>\n              <tr>\n                <th style=\"width:75%\">Username</th>\n                <th style=\"width:25%\">Current Balance</th>\n                <!-- <th style=\"width:25%\">Prize</th> -->\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let part of league.participants\" (click)=\"getPlayerBets(part._id)\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n                <td>{{part.name}} - Click to view bets</td>\n                <td>{{part.currentBalance}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Player Bets</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body fontSmall mt-0 mb-0 pb-0 pt-0\" *ngFor=\"let tmp of tmpBets\">\n        {{tmp}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"closeModal()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3 pt-5\">\n\n  <div class=\"row text-muted\">\n    <div class=\"col\" align=\"center\">\n      <h4>Join a League!</h4>\n    </div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"card col-sm-4 pl-0 pr-0\">\n      <img class=\"card-img-top\" src=\"/assets/images/ncaaf.jpg\" alt=\"College Football\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col mb-1\" align=\"center\" *ngFor=\"let league of cfbLeagues\">\n            <a class=\"btn btn-secondary btn-block text-light fontSmall\" (click)=\"joinLeague(league)\">${{league.buyin}} {{league.name}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5 pr-0 pl-0\">\n  <div class=\"row\">\n\n    <div class=\"card col-sm-4 pl-0 pr-0\">\n      <img class=\"card-img-top\" src=\"/assets/images/mlb.png\" (click)=\"navigate(16, 225)\">\n    </div>\n\n    <div class=\"card col-sm-4 pl-0 pr-0\">\n      <img class=\"card-img-top\" src=\"/assets/images/soccer.jpg\">\n      <div class=\"card-header\">\n        <div class=\"row mb-1\">\n        </div>\n        <div *ngFor=\"let soccer of soccer\">\n        <div class=\"row mb-1\" *ngIf=\"soccer.live==true\">\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"navigate(1, soccer.id)\">{{soccer.league}}</a>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n\n    <div class=\"card col-sm-4 pl-0 pr-0\">\n      <img class=\"card-img-top\" src=\"/assets/images/nfl.png\" (click)=\"navigate(12, 271)\">\n    </div>\n\n    <div class=\"card col-sm-4 pl-0 pr-0\">\n      <img class=\"card-img-top\" src=\"/assets/images/ncaaf.jpg\" (click)=\"navigate(12, 474)\">\n    </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-muted topNav\" *ngIf=\"eventOddsArray.length < 1\" align=\"center\"><p>Loading Lines</p></div>\n<div class=\"loader\" *ngIf=\"eventOddsArray.length < 1\"></div>\n\n<div class=\"container mt-5\" *ngIf=\"sport==1 || sport==16\">\n  <div class=\"row\">\n    <div *ngFor=\"let action of eventOddsArray\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n\n      <!-- Date -->\n      <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n        <div class=\"col w-50\" align=\"left\">\n          <p class=\"m-0 pl-3 text-muted\">{{action.matchDate}}</p>\n        </div>\n        <div class=\"col w-50\" align=\"right\">\n          <p class=\"m-0 pr-3 text-muted\">{{action.matchTime}}</p>\n        </div>\n      </div>\n\n      <div class=\"row ml-0 mr-0\">\n\n        <div class=\"col\">\n          <div class=\"row justify-content-center mb-0 pb-0 font-weight-bold\">\n            {{action.awayTeam}} [{{action.awayScore}}] @ {{action.homeTeam}} [{{action.homeScore}}]\n          </div>\n          <div class=\"row justify-content-center mt-0 pt-0 text-muted\">\n            {{action.details}}\n          </div>\n        </div>\n\n        <div class=\"card-header p-1 w-100\">\n\n          <div *ngIf=\"sport != 1\">\n            <div class=\"row border-bottom\">\n              <div class=\"col w-50 border-right\" align=\"center\">\n                {{action.awayTeam}}  [{{action.awayScore}}]\n              </div>\n              <div class=\"col w-50\" align=\"center\">\n                {{action.homeTeam}}  [{{action.homeScore}}]\n              </div>\n            </div>\n\n            <div class=\"row fontSmall\" *ngIf=\"action.awayTeamML !=0 || action.homeTeamML !=0\">\n              <div class=\"col\" align=\"center\">\n                MONEY LINE\n              </div>\n            </div>\n\n            <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.awayTeamML != 0 || action.homeTeamML !=0\">\n              <div class=\"col w-50 border-right\">\n                <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'awayTeamML')\" *ngIf=\"action.awayTeamML != 0 && action.awayTeamML != undefined\">\n                  {{action.awayTeamML}}\n                </a>\n              </div>\n              <div class=\"col w-50\">\n                <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'homeTeamML')\" *ngIf=\"action.homeTeamML != 0 && action.homeTeamML != undefined\">\n                  {{action.homeTeamML}}\n                </a>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"sport == 1\">\n            <div class=\"row border-bottom\">\n              <div class=\"col fontSmall border-right\" align=\"center\">\n                {{action.awayTeam}}  [{{action.awayScore}}]\n              </div>\n              <div class=\"col fontSmall border-right\" align=\"center\">\n                Draw\n              </div>\n              <div class=\"col fontSmall\" align=\"center\">\n                {{action.homeTeam}}  [{{action.homeScore}}]\n              </div>\n            </div>\n\n            <div class=\"row border-bottom mb-1 pb-1 pt-1\" *ngIf=\"action.awayTeamML != 0 || action.homeTeamML !=0 || action.drawOdds != 0\">\n              <div class=\"col border-right\">\n                <a class=\"btn btn-primary btn-sm btn-block text-light\" (click)=\"placeBet(action, 'awayTeamML')\" *ngIf=\"action.awayTeamML != 0 && action.awayTeamML != undefined\">\n                  {{action.awayTeamML}}\n                </a>\n              </div>\n              <div class=\"col border-right\">\n                <a class=\"btn btn-primary btn-sm btn-block text-light\" (click)=\"placeBet(action, 'draw')\" *ngIf=\"action.drawOdds != 0 && action.drawOdds != undefined\">\n                  {{action.drawOdds}}\n                </a>\n              </div>\n              <div class=\"col border-right\">\n                <a class=\"btn btn-primary btn-sm btn-block text-light\" (click)=\"placeBet(action, 'homeTeamML')\" *ngIf=\"action.homeTeamML != 0 && action.homeTeamML != undefined\">\n                  {{action.homeTeamML}}\n                </a>\n              </div>\n            </div>\n\n          </div>\n\n          <div *ngIf=\"action.sport != 1\">\n          <div class=\"row fontSmall\" *ngIf=\"action.awayTeamRL != 0 && action.homeTeamRL != 0\">\n            <div class=\"col\" align=\"center\">\n              SPREAD\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.awayTeamRL != 0 || action.homeTeamRL != 0\">\n            <div class=\"col w-50 border-right\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'awayTeamRL')\" *ngIf=\"action.awayTeamRL != 0\">\n                {{action.awayTeamRL}}  {{action.awayTeamRLOdds}}\n              </a>\n            </div>\n            <div class=\"col w-50\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'homeTeamRL')\" *ngIf=\"action.homeTeamRL != 0\">\n                {{action.homeTeamRL}}  {{action.homeTeamRLOdds}}\n              </a>\n            </div>\n          </div>\n        </div>\n\n          <div class=\"row fontSmall\" *ngIf=\"action.awayTeamRLArray.length > 0 || action.homeTeamRLArray.length > 0\">\n            <div class=\"col\" align=\"center\">\n              ALT LINES\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.awayTeamRLArray.length > 0 || action.homeTeamRLArray.length > 0\">\n            <div class=\"col w-50 border-right\">\n              <div class=\"mb-2\" *ngFor=\"let runLine of action.awayTeamRLArray; let i = index\">\n                <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBetWithIndex(action, 'awayTeamRL', action.awayTeamRLArray, i)\">\n                  {{runLine.number}}  {{runLine.odds}}\n                </a>\n              </div>\n            </div>\n            <div class=\"col w-50\">\n              <div class=\"mb-2\" *ngFor=\"let runLine of action.homeTeamRLArray; let i = index\">\n                <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBetWithIndex(action, 'homeTeamRL', action.homeTeamRLArray, i)\">\n                  {{runLine.number}}  {{runLine.odds}}\n                </a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row fontSmall\" *ngIf=\"action.overArray.length > 0 || action.underArray.length > 0\">\n            <div class=\"col\" align=\"center\">\n              GAME TOTALS\n            </div>\n          </div>\n\n          <div class=\"row fontSmall\" *ngIf=\"action.overArray.length > 0 || action.underArray.length > 0 || action.over.length != 0 || action.under.length != 0\">\n            <div class=\"col w-50 border-right\" align=\"center\">\n              OVER\n            </div>\n            <div class=\"col w-50\" align=\"center\">\n              UNDER\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.over.length!=0 || action.under.length!=0\">\n            <div class=\"col w-50 border-right\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'over')\" *ngIf=\"action.over.length!=0\">\n                {{action.over.number}}  {{action.over.odds}}\n              </a>\n            </div>\n            <div class=\"col w-50\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'under')\" *ngIf=\"action.under.length!=0\">\n                {{action.under.number}}  {{action.under.odds}}\n              </a>\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.overArray.length > 0 || action.underArray.length > 0\">\n            <div class=\"col w-50 border-right\" *ngIf=\"action.overArray.length > 0\">\n              <div class=\"mb-2\" *ngFor=\"let over of action.overArray; let i = index\">\n                <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBetWithIndex(action, 'over', action.overArray, i)\">\n                  {{over.number}}  {{over.odds}}\n                </a>\n              </div>\n            </div>\n            <div class=\"col w-50\" *ngIf=\"action.underArray.length > 0\">\n              <div class=\"mb-2\" *ngFor=\"let under of action.underArray; let i = index\">\n                <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBetWithIndex(action, 'under', action.underArray, i)\">\n                  {{under.number}}  {{under.odds}}\n                </a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container pt-5\" *ngIf=\"sport==12\">\n  <div class=\"row\">\n    <div *ngFor=\"let action of eventOddsArray\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n\n      <!-- Date -->\n      <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n        <div class=\"col w-50\" align=\"left\">\n          <p class=\"m-0 pl-3\">{{action.matchDate}}</p>\n        </div>\n        <div class=\"col w-50\" align=\"right\">\n          <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n        </div>\n      </div>\n\n      <div class=\"row ml-0 mr-0\">\n\n        <div class=\"col\">\n          <div class=\"row justify-content-center mb-0 pb-0 font-weight-bold\">\n            {{action.awayTeam}} [{{action.awayScore}}] @ {{action.homeTeam}} [{{action.homeScore}}]\n          </div>\n          <div class=\"row justify-content-center mt-0 pt-0 text-muted\">\n            {{action.details}}\n          </div>\n        </div>\n\n        <div class=\"card-header p-1 w-100\">\n\n\n          <div align=\"left\">\n            <div class=\"row pl-3\">{{action.awayTeam}}</div>\n            <div class=\"row border-bottom pb-1 pt-1\">\n              <div class=\"col\">\n                <a class=\"btn btn-primary btn-sm btn-block btn-sm text-light float-left\" *ngIf=\"action.awayTeamML!=0 && action.awayTeamML>-400 && action.awayTeamML<400\" (click)=\"placeBet(action,'awayTeamML')\">{{action.awayTeamML}}</a>\n              </div>\n              <div class=\"col\" align=\"center\">\n                <a class=\"btn btn-primary btn-sm btn-block btn-sm text-light\" *ngIf=\"action.awayTeamRL!=0\" (click)=\"placeBet(action,'awayTeamRL')\">{{action.awayTeamRL}} {{action.awayTeamRLOdds}}</a>\n              </div>\n              <div class=\"col\">\n                <a class=\"btn btn-primary btn-sm btn-block btn-sm text-light float-right\" *ngIf=\"action.totalNumber!=0\" (click)=\"placeBet(action,'under')\">u{{action.under.number}}  {{action.under.odds}}</a>\n              </div>\n            </div>\n          </div>\n\n          <div align=\"left\">\n            <div class=\"row pl-3\">{{action.homeTeam}}</div>\n            <div class=\"row pb-1 pt-1\">\n              <div class=\"col\">\n                <a class=\"btn btn-primary btn-sm btn-block btn-sm text-light float-left\" *ngIf=\"action.homeTeamML!=0 && action.homeTeamML>-400 && action.homeTeamML<400\" (click)=\"placeBet(action,'homeTeamML')\">{{action.homeTeamML}}</a>\n              </div>\n              <div class=\"col\" align=\"center\">\n                <a class=\"btn btn-primary btn-sm btn-block btn-sm text-light\" *ngIf=\"action.homeTeamRL!=0\" (click)=\"placeBet(action,'homeTeamRL')\">{{action.homeTeamRL}} {{action.homeTeamRLOdds}}</a>\n              </div>\n              <div class=\"col\">\n                <a class=\"btn btn-primary btn-sm btn-block btn-sm text-light float-right\" *ngIf=\"action.totalNumber!=0\" (click)=\"placeBet(action,'over')\">o{{action.over.number}}  {{action.over.odds}}</a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"text-muted topNav\" *ngIf=\"leagueSport==0\" align=\"center\"><p align=\"center\">Join a league to view bet options</p></div> -->\n\n<div class=\"container pt-5 mt-2\">\n  <div class=\"row\">\n\n    <div class=\"card col-sm-4 pl-0 pr-0\">\n      <img class=\"card-img-top\" src=\"/assets/images/ncaaf.jpg\" alt=\"College Football\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col w mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"navigate(3)\">Game Odds</a>\n          </div>\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"parlay(3)\">Parlay</a>\n          </div>\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"teaser(3, 2)\">Teaser (2)</a>\n          </div>\n          <!-- <div class=\"col w-50 mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"moreOdds(12,474)\">More Odds</a>\n          </div> -->\n        </div>\n        <!-- <div class=\"row\">\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"teaser(3, 3)\">Teaser (3)</a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"props('cfb')\" *ngIf=\"cfbProps.length > 0\">Futures and Props</a>\n          </div>\n        </div> -->\n      </div>\n    </div>\n\n    <div class=\"card col-sm-4 pl-0 pr-0 disabledbutton\">\n      <img class=\"card-img-top\" src=\"/assets/images/nfl.png\" alt=\"NFL\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"navigate(4)\">Game Odds</a>\n          </div>\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"moreOdds(12,271)\">More Odds</a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"parlay(4)\">Parlay</a>\n          </div>\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"teaser(4, 2)\">Teaser (2)</a>\n          </div>\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"teaser(4, 3)\">Teaser (3)</a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"props('nfl')\" *ngIf=\"nflProps.length > 0\">Futures and Props</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card col-sm-4 pl-0 pr-0 disabledbutton\">\n      <img class=\"card-img-top\" src=\"/assets/images/mlb.png\" alt=\"MLB\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-sm btn-block btn-secondary text-light\" (click)=\"navigate(0)\">Game Odds</a>\n          </div>\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-sm btn-block btn-secondary text-light\" (click)=\"moreOdds(16,225)\">More Odds</a>\n          </div>\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-sm btn-block btn-secondary text-light\" (click)=\"parlay(0)\">Parlay</a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col mb-1\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"props('mlb')\" *ngIf=\"mlbProps.length > 0\">Futures and Props</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- <div class=\"card col-sm-4 pl-0 pr-0\">\n      <img src=\"https://www.seeklogo.net/wp-content/uploads/2011/05/major-league-soccer-vector-logo-400x400.png\"  alt=\"Soccer\" />\n      <div class=\"card-header\">\n        <div class=\"col mb-1\" align=\"center\">\n          <a class=\"btn btn-secondary btn-block text-light\" (click)=\"clickShowSoccer()\" *ngIf=\"!showSoccer\">Show Soccer Leagues</a>\n        </div>\n        <div class=\"col mb-1\" align=\"center\">\n          <a class=\"btn btn-secondary btn-block text-light\" (click)=\"clickShowSoccer()\" *ngIf=\"showSoccer\">Hide Soccer Leagues</a>\n        </div>\n        <div class=\"row mb-1\" *ngFor=\"let soccer of soccer\">\n          <div class=\"col w-75\" align=\"center\" *ngIf=\"showSoccer\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"moreOdds(1,soccer.id)\">{{soccer.league}}</a>\n          </div>\n          <div class=\"col w-25\" align=\"center\" *ngIf=\"showSoccer\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"moreOddsParlay(1,soccer.id)\">parlay</a>\n          </div>\n        </div>\n      </div>\n    </div> -->\n\n    <div class=\"card col-sm-4 pl-0 pr-0 disabledbutton\">\n      <img class=\"card-img-top\" src=\"/assets/images/ufc.jpg\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-secondary btn-block text-light\" (click)=\"navigate(11)\">Fights</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"masthead\" href=\"#\">Slatechamp</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nb\" aria-controls=\"nb\" aria-expanded=\"false\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"nb\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('slatechamp')\">How to Play</a></li>\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('leagues')\">Join a League</a></li>\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('leaderboard')\">League Leaderboard</a></li>\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('menu')\">Bet Menu</a></li>\n    </ul>\n    <ul class=\"navbar-nav mr-right\">\n      <li><a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('profile')\">Profile</a></li>\n      <li><a *ngIf=\"authService.loggedInAdmin()\" class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('admin')\">Admin</a></li>\n      <li><a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('')\">Login</a></li>\n      <li><a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"onLogoutClick()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-muted topNav\" *ngIf=\"eventOddsArray.length < 1\" align=\"center\"><p>Loading Lines</p></div>\n<div class=\"loader\" *ngIf=\"eventOddsArray.length < 1\"></div>\n<!-- Baseball -->\n<div class=\"container pt-5 bg-dark\" *ngIf=\"sport==16 && eventOddsArray.length > 0\">\n  <div class=\"row\">\n\n    <div *ngFor=\"let action of eventOddsArray\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n      <!-- Date -->\n      <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n        <div class=\"col w-50\" align=\"left\">\n          <p class=\"m-0 pl-3 text-muted\">{{action.matchDate}}</p>\n        </div>\n        <div class=\"col w-50 text-muted\" align=\"right\">\n          <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n        </div>\n      </div>\n\n      <!-- Away Team @ Home Team -->\n      <div class=\"row pl-0 pr-0\" align=\"center\">\n        <div class=\"col\" align=\"center\">\n          <p class=\"font-weight-bold mb-0\">{{action.awayTeam}} @ {{action.homeTeam}}</p>\n        </div>\n      </div>\n\n      <div class=\"card-header p-1 w-100\">\n        <!-- Away Team, Home Team Headers -->\n        <div class=\"row border-bottom\">\n          <div class=\"col w-50 border-right smallFont\" align=\"center\">\n            {{action.awayTeam}}\n          </div>\n          <div class=\"col w-50 smallFont\" align=\"center\">\n            {{action.homeTeam}}\n          </div>\n        </div>\n\n        <div align=\"center\" *ngIf=\"!showBaseballDetails(action)\">\n          <h5 class=\"col w-100 text-muted\">Check back later</h5>\n        </div>\n\n        <!-- 1st Half Money Line -->\n        <div class=\"row smallFont\" *ngIf=\"action.awayTeamFirstHalf != 0 || action.homeTeamFirstHalf != 0\">\n          <div class=\"col\" align=\"center\" *ngIf=\"action.sport==16\">\n            First 5 Innings\n          </div>\n        </div>\n\n        <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.awayTeamFirstHalf != 0 || action.homeTeamFirstHalf != 0\">\n          <div class=\"col w-50 border-right\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'awayTeamFirstHalf')\" *ngIf=\"action.awayTeamFirstHalf != 0\">\n              {{action.awayTeamFirstHalf}}\n            </a>\n          </div>\n          <div class=\"col w-50\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'homeTeamFirstHalf')\" *ngIf=\"action.homeTeamFirstHalf != 0\">\n              {{action.homeTeamFirstHalf}}\n            </a>\n          </div>\n        </div>\n\n        <!-- Team Total -->\n        <div class=\"row smallFont\" *ngIf=\"action.awayTeamTotalLine != 0 || action.homeTeamTotalLine != 0\">\n          <div class=\"col\" align=\"center\">\n            Team Total\n          </div>\n        </div>\n\n        <div class=\"row mb-1\" *ngIf=\"action.awayTeamTotalLine != 0 || action.homeTeamTotalLine != 0\">\n          <div class=\"col w-50 border-right\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'awayTeamOver')\" *ngIf=\"action.awayTeamTotalLine != 0\">\n              o{{action.awayTeamTotalLine}} {{action.awayTeamOverOdds}}\n            </a>\n          </div>\n          <div class=\"col w-50\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'homeTeamOver')\" *ngIf=\"action.homeTeamTotalLine != 0\">\n              o{{action.homeTeamTotalLine}} {{action.homeTeamOverOdds}}\n            </a>\n          </div>\n        </div>\n        <div class=\"row border-bottom mb-1\" *ngIf=\"action.awayTeamTotalLine != 0 || action.homeTeamTotalLine != 0\">\n          <div class=\"col w-50 border-right\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'awayTeamUnder')\" *ngIf=\"action.awayTeamTotalLine != 0\">\n              u{{action.awayTeamTotalLine}} {{action.awayTeamUnderOdds}}\n            </a>\n          </div>\n          <div class=\"col w-50\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'homeTeamUnder')\" *ngIf=\"action.homeTeamTotalLine != 0\">\n              u{{action.homeTeamTotalLine}} {{action.homeTeamUnderOdds}}\n            </a>\n          </div>\n        </div>\n\n\n        <!-- Alternative Lines -->\n        <div class=\"row smallFont\" *ngIf=\"action.awayTeamRL.length > 0 || action.homeTeamRL.length > 0\">\n          <div class=\"col\" align=\"center\">\n            Alternative Lines\n          </div>\n        </div>\n\n        <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.awayTeamRL.length > 0 || action.homeTeamRL.length > 0\">\n          <div class=\"col w-50 border-right\">\n            <div class=\"mb-2\" *ngFor=\"let runLine of action.awayTeamRL; let i = index\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBetWithIndex(action, 'awayTeamRL', action.awayTeamRL, i)\">\n                {{runLine.number}}  {{runLine.odds}}\n              </a>\n            </div>\n          </div>\n          <div class=\"col w-50\">\n            <div class=\"mb-2\" *ngFor=\"let runLine of action.homeTeamRL; let i = index\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBetWithIndex(action, 'homeTeamRL', action.homeTeamRL, i)\">\n                {{runLine.number}}  {{runLine.odds}}\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <!-- Run In First -->\n        <div class=\"row smallFont\" *ngIf=\"action.runInFirst != 0\">\n          <div class=\"col w-50 border-right\" align=\"center\">\n            Score in 1st\n          </div>\n          <div class=\"col w-50\" align=\"center\">\n            No Score in 1st\n          </div>\n        </div>\n\n        <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.runInFirst != 0\">\n          <div class=\"col w-50 border-right\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'runInFirst')\">\n              {{action.runInFirst}}\n            </a>\n          </div>\n          <div class=\"col w-50\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'noRunInFirst')\">\n              {{action.noRunInFirst}}\n            </a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Soccer -->\n<div class=\"container pt-5 bg-dark\" *ngIf=\"sport==1 && eventOddsArray.length > 0\">\n  <div class=\"row\">\n\n    <div *ngFor=\"let action of eventOddsArray\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n      <!-- Date -->\n      <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n        <div class=\"col w-50\" align=\"left\">\n          <p class=\"m-0 pl-3 text-muted\">{{action.matchDate}}</p>\n        </div>\n        <div class=\"col w-50 text-muted\" align=\"right\">\n          <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n        </div>\n      </div>\n\n      <!-- Away Team @ Home Team -->\n      <div class=\"row pl-0 pr-0\" align=\"center\">\n        <div class=\"col font-weight-bold\" align=\"center\">\n          {{action.awayTeam}} @ {{action.homeTeam}}\n        </div>\n      </div>\n\n      <div class=\"card-header p-1 w-100\">\n\n        <!-- Away Team, Home Team, Draw Headers -->\n        <div *ngIf=\"sport == 1\">\n          <div class=\"row border-bottom smallFont\">\n            <div class=\"col soc border-right\" align=\"center\">\n              {{action.awayTeam}}\n            </div>\n            <div class=\"col soc border-right\" align=\"center\">\n              Draw\n            </div>\n            <div class=\"col soc\" align=\"center\">\n              {{action.homeTeam}}\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1 pt-1\" *ngIf=\"action.awayTeamML != null || action.homeTeamML != null || action.drawOdds != null\">\n            <div class=\"col border-right\">\n              <a class=\"btn btn-primary btn-sm btn-block text-light\" (click)=\"placeBet(action, 'awayTeamML')\" *ngIf=\"action.awayTeamML != null && action.awayTeamML != 0\">\n                {{action.awayTeamML}}\n              </a>\n            </div>\n            <div class=\"col border-right\">\n              <a class=\"btn btn-primary btn-sm btn-block text-light\" (click)=\"placeBet(action, 'draw')\" *ngIf=\"action.drawOdds != null && action.drawOdds != 0\">\n                {{action.drawOdds}}\n              </a>\n            </div>\n            <div class=\"col border-right\">\n              <a class=\"btn btn-primary btn-sm btn-block text-light\" (click)=\"placeBet(action, 'homeTeamML')\" *ngIf=\"action.homeTeamML != null && action.homeTeamML != 0\">\n                {{action.homeTeamML}}\n              </a>\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.awayTeamRL!=0 || action.homeTeamRL!=0\">\n            <div class=\"col w-50 border-right\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'awayTeamRL')\" *ngIf=\"action.awayTeamRL!=0\">\n                {{action.awayTeamRL}}  {{action.awayTeamRLOdds}}\n              </a>\n            </div>\n            <div class=\"col w-50\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'homeTeamRL')\" *ngIf=\"action.homeTeamRL!=0\">\n                {{action.homeTeamRL}}  {{action.homeTeamRLOdds}}\n              </a>\n            </div>\n          </div>\n\n          <div class=\"row smallFont\" *ngIf=\"action.over.number!=0 || action.under.number!=0\">\n            <div class=\"col w-50 border-right\" align=\"center\">\n              OVER\n            </div>\n            <div class=\"col w-50\" align=\"center\">\n              UNDER\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.over.number!=0 || action.under.number!=0\">\n            <div class=\"col w-50 border-right\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'over')\" *ngIf=\"action.over.length!=0\">\n                {{action.over.number}}  {{action.over.odds}}\n              </a>\n            </div>\n            <div class=\"col w-50\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'under')\" *ngIf=\"action.under.length!=0\">\n                {{action.under.number}}  {{action.under.odds}}\n              </a>\n            </div>\n          </div>\n\n          <div class=\"row smallFont\" *ngIf=\"action.bothScoreYes!=0 || action.bothScoreNo!=0\">\n            <div class=\"col w-100 border-right\" align=\"center\">\n              BOTH TEAMS SCORE\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.bothScoreYes!=0 || action.bothScoreNo!=0\">\n            <div class=\"col w-50 border-right\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'bothScoreYes')\" *ngIf=\"action.bothScoreYes!=0\">\n                Yes {{action.bothScoreYes}}\n              </a>\n            </div>\n            <div class=\"col w-50\">\n              <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'bothScoreNo')\" *ngIf=\"action.bothScoreNo!=0\">\n                No {{action.bothScoreNo}}\n              </a>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- NFL -->\n<div class=\"container pt-5 bg-dark\" *ngIf=\"sport==12 && eventOddsArray.length > 0\">\n  <div class=\"row\">\n    <div *ngFor=\"let action of eventOddsArray\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n\n      <div class=\"row pl-0 pr-0 ml-0 mr-0 text-muted\">\n        <div class=\"col w-50\" align=\"left\">\n          <p class=\"m-0 pl-3\">{{action.matchDate}}</p>\n        </div>\n        <div class=\"col w-50\" align=\"right\">\n          <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n        </div>\n      </div>\n\n      <!-- Away Team @ Home Team -->\n      <div class=\"row pl-0 pr-0\" align=\"center\">\n        <div class=\"col\" align=\"center\">\n          <p class=\"font-weight-bold mb-0\">{{action.awayTeam}} @ {{action.homeTeam}}</p>\n        </div>\n      </div>\n\n      <div class=\"card-header p-1 w-100\">\n\n        <div align=\"center\" *ngIf=\"!showFootballDetails(action)\">\n          <h4 class=\"col w-100 text-muted\">Check back later</h4>\n        </div>\n\n        <!-- Away Team, Home Team Headers -->\n        <div class=\"row border-bottom\" *ngIf=\"showFootballDetails(action)\">\n          <div class=\"col w-50 border-right\" align=\"center\">\n            {{action.awayTeam}}\n          </div>\n          <div class=\"col w-50\" align=\"center\">\n            {{action.homeTeam}}\n          </div>\n        </div>\n\n        <!-- 1st Half Money Line -->\n        <div class=\"row smallFont\" *ngIf=\"action.awayTeamFirstHalf != 0 || action.homeTeamFirstHalf != 0\">\n          <div class=\"col\" align=\"center\" *ngIf=\"action.sport==12\">\n            First Half\n          </div>\n        </div>\n\n        <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.awayTeamFirstHalf != 0 || action.homeTeamFirstHalf != 0\">\n          <div class=\"col w-50 border-right\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'awayTeamFirstHalfFB')\" *ngIf=\"action.awayTeamFirstHalf != 0\">\n              {{action.awayTeamFirstHalf}}\n            </a>\n          </div>\n          <div class=\"col w-50\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'homeTeamFirstHalfFB')\" *ngIf=\"action.homeTeamFirstHalf != 0\">\n              {{action.homeTeamFirstHalf}}\n            </a>\n          </div>\n        </div>\n\n        <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.homeTeamRLFirstHalf != 0 || action.awayTeamRLFirstHalf != 0\">\n          <div class=\"col w-50 border-right\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'awayTeamFirstHalfSpread')\" *ngIf=\"action.awayTeamRLFirstHalf != 0\">\n              {{action.awayTeamRLFirstHalf}}  {{action.awayTeamRLOddsFirstHalf}}\n            </a>\n          </div>\n          <div class=\"col w-50\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'homeTeamFirstHalfSpread')\" *ngIf=\"action.homeTeamRLFirstHalf!= 0\">\n              {{action.homeTeamRLFirstHalf}}  {{action.homeTeamRLOddsFirstHalf}}\n            </a>\n          </div>\n        </div>\n\n        <!-- Over/Under -->\n        <div class=\"row border-bottom smallFont\" *ngIf=\"action.firstHalfOver != 0 || action.firstHalfOver != 0\">\n          <div class=\"col w-50 border-right\" align=\"center\">\n            1H Over\n          </div>\n          <div class=\"col w-50\" align=\"center\">\n            1H Under\n          </div>\n        </div>\n\n        <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"action.firstHalfOver != 0 || action.firstHalfOver != 0\">\n          <div class=\"col w-50 border-right\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'firstHalfOverFB')\" *ngIf=\"action.firstHalfOver != 0\">\n              {{action.firstHalfOver}}  {{action.firstHalfOverOdds}}\n            </a>\n          </div>\n          <div class=\"col w-50\">\n            <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'firstHalfUnderFB')\" *ngIf=\"action.firstHalfUnder != 0\">\n              {{action.firstHalfUnder}}  {{action.firstHalfUnderOdds}}\n            </a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Tennis -->\n<div class=\"container pt-5 bg-dark\" *ngIf=\"sport==13 && eventOddsArray.length > 0\">\n  <div class=\"row\" align=\"center\">\n    <div *ngFor=\"let action of eventOddsArray\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n\n      <div class=\"row pl-0 pr-0\">\n        <div class=\"col w-50\" align=\"left\">\n          <p class=\"m-0 pl-3 text-muted\">{{action.matchDate}}</p>\n        </div>\n        <div class=\"col w-50 text-muted\" align=\"right\">\n          <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"row justify-content-center mt-0 pt-0\">\n            <p class=\"mb-0 pb-0 font-weight-bold\">{{action.homeTeam}} V {{action.awayTeam}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card-header\">\n\n        <div class=\"row border-bottom\">\n          <div class=\"col w-50 border-right smallFont\" align=\"center\">\n            {{action.awayTeam}}\n          </div>\n          <div class=\"col w-50 smallFont\" align=\"center\">\n            {{action.homeTeam}}\n          </div>\n        </div>\n\n        <div class=\"row border-bottom mb-1 pb-1 pt-1\" *ngIf=\"action.awayTeamML != null || action.homeTeamML != null\">\n          <div class=\"col w-50 border-right\">\n            <a class=\"btn btn-block btn-sm btn-primary text-light\" (click)=\"placeBet(action, 'awayTeamML')\" *ngIf=\"action.awayTeamML != null\">\n              {{action.awayTeamML}}\n            </a>\n          </div>\n          <div class=\"col w-50\">\n            <a class=\"btn btn-block btn-sm btn-primary text-light\" (click)=\"placeBet(action, 'homeTeamML')\" *ngIf=\"action.homeTeamML != null\">\n              {{action.homeTeamML}}\n            </a>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"row border-bottom mb-1 pb-1 pt-1\" *ngIf=\"action.over.number != 0 && action.under.number !=0 && action.over.number != undefined && action.under.number != undefined\">\n            <div class=\"col w-50 border-right\">\n              <a class=\"btn btn-block btn-sm btn-primary text-light\" (click)=\"placeBet(action, 'over')\" *ngIf=\"action.totalNumber != 0 && action.totalNumber != undefined\">\n                o{{action.over.number}}  {{action.over.odds}}\n              </a>\n            </div>\n            <div class=\"col w-50\">\n              <a class=\"btn btn-block btn-sm btn-primary text-light\" (click)=\"placeBet(action, 'under')\" *ngIf=\"action.totalNumber != 0 && action.totalNumber != undefined\">\n                u{{action.under.number}}  {{action.under.odds}}\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-muted topNav\" *ngIf=\"odds.length < 1\" align=\"center\"><p>Loading Lines</p></div>\n<div class=\"loader\" *ngIf=\"odds.length < 1\"></div>\n\n<div class=\"container pt-5 mb-5 bg-dark\" *ngIf=\"odds.length > 1 && sport != 1\">\n<div class=\"row\" align=\"center\">\n  <div *ngFor=\"let odd of odds\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n    <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n      <div class=\"col\" align=\"left\">\n        <p class=\"m-0 pl-3\">{{odd.matchDate | slice:0:6}}</p>\n      </div>\n      <div class=\"col\" align=\"right\">\n        <p class=\"m-0 pr-3\">{{odd.matchTime}}</p>\n      </div>\n    </div>\n    <div class =\"row ml-0 mr-0\">\n      <div class =\"col p-0 float-left\">\n        <!-- <img class=\"w-75 h-100\" src=\"{{odd.awayImagePath}}\" alt=\"Card image cap\"> -->\n        <img class=\"w-75 h-100\" src=\"{{odd.awayImagePath}}\" alt=\"Card image cap\">\n      </div>\n      <h2 class=\"mt-4\">@</h2>\n      <div class =\"col p-0 float-right\">\n        <img class=\"w-75 h-100\" src=\"{{odd.homeImagePath}}\" alt=\"Card image cap\">\n      </div>\n    </div>\n    <div class=\"card-header pl-1 pr-1 border-top\">\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{odd.awayTeam}}</div>\n        <div class=\"row border-bottom pb-1 pt-1\">\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'awayTeamML')\">{{odd.awayTeamML}}</label>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <label class=\"btn btn-primary btn-sm\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'awayTeamRL')\">{{odd.awayTeamRL}} {{odd.awayTeamRLOdds}}</label>\n          </div>\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm float-right\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'over')\">o{{odd.totalNumber}}</label>\n          </div>\n        </div>\n      </div>\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{odd.homeTeam}}</div>\n        <div class=\"row pb-1 pt-1\">\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'homeTeamML')\">{{odd.homeTeamML}}</label>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <label class=\"btn btn-primary btn-sm\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'homeTeamRL')\">{{odd.homeTeamRL}} {{odd.homeTeamRLOdds}}</label>\n          </div>\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm float-right\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'under')\">u{{odd.totalNumber}}</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n<!-- Soccer -->\n<div class=\"container pt-5 mb-5 bg-dark\" *ngIf=\"odds.length > 1 && sport == 1\">\n  <div class=\"row\">\n\n    <div *ngFor=\"let odd of odds\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n      <!-- Date -->\n      <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n        <div class=\"col w-50\" align=\"left\">\n          <p class=\"m-0 pl-3 text-muted\">{{odd.matchDate}}</p>\n        </div>\n        <div class=\"col w-50 text-muted\" align=\"right\">\n          <p class=\"m-0 pr-3\">{{odd.matchTime}}</p>\n        </div>\n      </div>\n\n      <!-- Away Team @ Home Team -->\n      <div class=\"row pl-0 pr-0\" align=\"center\">\n        <div class=\"col font-weight-bold\" align=\"center\">\n          {{odd.awayTeam}} @ {{odd.homeTeam}}\n        </div>\n      </div>\n\n      <div class=\"card-header p-1 w-100\">\n\n        <!-- Away Team, Home Team, Draw Headers -->\n        <div *ngIf=\"sport == 1\">\n          <div class=\"row border-bottom smallFont\">\n            <div class=\"col soc border-right\" align=\"center\">\n              {{odd.awayTeam}}\n            </div>\n            <div class=\"col soc border-right\" align=\"center\">\n              Draw\n            </div>\n            <div class=\"col soc\" align=\"center\">\n              {{odd.homeTeam}}\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1 pt-1\" *ngIf=\"odd.awayTeamML != null || odd.homeTeamML != null || odd.drawOdds != null\">\n            <div class=\"col border-right\">\n            <label class=\"btn btn-primary btn-sm float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'awayTeamML')\">{{odd.awayTeamML}}</label>\n            </div>\n            <div class=\"col border-right\">\n            <label class=\"btn btn-primary btn-sm float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'draw')\">{{odd.drawOdds}}</label>\n            </div>\n            <div class=\"col border-right\">\n            <label class=\"btn btn-primary btn-sm float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'homeTeamML')\">{{odd.homeTeamML}}</label>\n            </div>\n          </div>\n\n          <!-- <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"odd.awayTeamRL!=0 || odd.homeTeamRL!=0\">\n            <div class=\"col w-50 border-right\">\n            <label class=\"btn btn-primary btn-sm float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'awayTeamRL')\">{{odd.awayTeamRL}}</label>\n            </div>\n            <div class=\"col w-50\">\n            <label class=\"btn btn-primary btn-sm float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'homeTeamRL')\">{{odd.homeTeamRL}}</label>\n            </div>\n          </div> -->\n\n          <div class=\"row smallFont\" *ngIf=\"odd.over.number!=0 || odd.under.number!=0\">\n            <div class=\"col w-50 border-right\" align=\"center\">\n              OVER\n            </div>\n            <div class=\"col w-50\" align=\"center\">\n              UNDER\n            </div>\n          </div>\n\n          <div class=\"row border-bottom mb-1 pb-1\" *ngIf=\"odd.over.number!=0 || odd.under.number!=0\">\n            <div class=\"col w-50 border-right\">\n            <label class=\"btn btn-primary btn-sm btn-block float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'over')\">{{odd.over.number}}  {{odd.over.odds}}</label>\n            </div>\n            <div class=\"col w-50\">\n            <label class=\"btn btn-primary btn-sm btn-block float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'under')\">{{odd.under.number}}  {{odd.under.odds}}</label>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"btn btn-success btn-lg inside mb-2\" *ngIf=\"parlay.length>1\" (click)=\"placeBet()\">Continue</div>\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 pt-4 pl-0 pr-0\">\n  <div *ngIf=\"user\">\n\n    <div>\n      <div class=\"row border-bottom\">\n        <div class=\"col\" align=\"center\">\n          <h3>{{user.name.toUpperCase()}} Dashboard</h3>\n        </div>\n      </div>\n\n      <div class=\"row mt-2\">\n      <div class=\"col border-bottom\" align=\"center\">\n        <p>Message from Sal: Thanks for joining the first contest.  Please remember all bets are due in before the first game on Saturday at noon.  Since this is the first contest, I'd really like to get as much feedback as possible so we can improve the user experience.  Please feel free to send along all of your feedback.</p>\n      </div>\n    </div>\n\n      <div class=\"row mt-2\">\n        <div class=\"col border-bottom\" align=\"center\" *ngIf=\"user.league.length>0\">\n          <p>Current League:  {{user.league[0].name}}</p>\n        </div>\n        <div class=\"col border-bottom\" align=\"center\" *ngIf=\"user.league.length < 1\">\n          <p>Current League:  Not Entered</p>\n        </div>\n      </div>\n\n      <div class=\"row mt-2\">\n        <div class=\"col border-bottom\" align=\"center\">\n          <p>Point Balance:  {{user.currentBalance}}</p>\n        </div>\n      </div>\n\n      <div class=\"row mt-2\">\n        <div class=\"col border-bottom\" align=\"center\">\n          <p>Available Points:  {{user.credit + user.currentBalance - amountPending}}</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col bg-dark block text-light p-0 m-0 h-100\">\n      <div class=\"row pt-2 border-bottom\" (click)=\"showHidePending()\">\n        <div class=\"col\" align=\"center\">\n          <h5 *ngIf=\"showPending==false\">Show Pendings ({{amountPending}} Points)</h5>\n          <h5 *ngIf=\"showPending==true\">Hide Pendings ({{amountPending}} Points)</h5>\n        </div>\n      </div>\n      <div *ngIf=\"showPending==true\">\n        <table class=\"table table-dark table-hover w-100\">\n          <thead>\n            <tr>\n              <th style=\"width:15%\">Date</th>\n              <th>Description</th>\n              <th style=\"width:5%\">Risk</th>\n              <th style=\"width:5%\">To Win</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let bet of pendingBets\">\n              <td>{{bet.gameDate}} {{bet.gameTime}}</td>\n              <td>{{bet.description}}</td>\n              <td>{{bet.betAmount}}</td>\n              <td>{{bet.winAmount}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"row m-0 p-0\">\n      <div class=\"col bg-dark block text-light p-0 m-0\">\n        <div class=\"row pt-2 border-bottom\" (click)=\"showHideClosed()\">\n          <div class=\"col\" align=\"center\">\n            <h5 *ngIf=\"showClosed==false\">Show Bet History</h5>\n            <h5 *ngIf=\"showClosed==true\">Hide Bet History</h5>\n          </div>\n        </div>\n        <div *ngIf=\"showClosed==true\">\n          <table class=\"table table-dark table-hover w-100\">\n            <thead>\n              <tr>\n                <th style=\"width:15%\">Date</th>\n                <th>Description</th>\n                <th style=\"width:5%\">Result</th>\n                <th style=\"width:5%\">Amount</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let bet of closedBets\">\n                <td>{{bet.gameDate}} {{bet.gameTime}}</td>\n                <td>{{bet.description}}</td>\n                <td>{{bet.status}}</td>\n                <td *ngIf=\"bet.status=='win'\">{{bet.winAmount}}</td>\n                <td *ngIf=\"bet.status=='loss'\">-{{bet.betAmount}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"text-muted topNav\" *ngIf=\"!user\" align=\"center\"><p>Loading Profile, if it takes more than 10 seconds try logging in again</p></div>\n  <div class=\"loader\" *ngIf=\"!user\"></div>\n</div>\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5 ml-0 mr-0\">\n  <div class=\"col bg-dark block text-light p-0 m-0 h-100\">\n\n    <h5 class=\"mt-2\" align=\"center\"> Futures </h5>\n    <div>\n      <table class=\"table table-dark table-hover w-100\">\n        <thead>\n          <tr>\n            <th style=\"width:80%\">Description</th>\n            <th style=\"width:20%\">Odds</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let future of futureArr\" (click)=\"placeBet(future)\">\n            <td>{{future.details}}</td>\n            <td>{{future.odds}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <h5 class=\"mt-2\" align=\"center\"> Props </h5>\n    <div>\n      <table class=\"table table-dark table-hover w-100\">\n        <thead>\n          <tr>\n            <th style=\"width:80%\">Description</th>\n            <th style=\"width:20%\">Odds</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let prop of propArr\" (click)=\"placeBet(prop)\">\n            <td>{{prop.details}}</td>\n            <td>{{prop.odds}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div class=\" container mt-2 pt-5\">\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"credit\">Account Credit</label>\n    <input type=\"number\" [(ngModel)]=\"credit\" name=\"credit\" class=\"form-control\" id=\"credit\" placeholder=\"Enter Account Credit\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n\n<!-- <div class=\"form-group\">\n  <label for=\"email\">Email</label>\n  <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n  <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n</div> -->\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead\">\n\t<div class=\"container d-flex h-100 align-items-center\">\n\t\t<div class=\"mx-auto text-center\">\n\t\t\t<h1 class=\"mx-auto text-uppercase\">SlateChamp</h1>\n\t\t\t<div class=\"text-light\">\n\t\t\t\t<h3>HOW IT WORKS</h3>\n\t\t\t\t<div class=\"ml-3\" align=\"left\">\n\t\t\t\t\t<p>- Enter a league with a specified slate of games (ie. NFL Sunday Slate)</p>\n\t\t\t\t\t<p>- You start with 500 credits</p>\n\t\t\t\t\t<p>- Credits can be wagered on games for that slate of action</p>\n\t\t\t\t\t<p>- All bets must be placed before the first game in the slate</p>\n\t\t\t\t\t<p>- Only straight, parlay, and teaser bets are allowed</p>\n\t\t\t\t\t<p>- The player with the most credits after all games have concluded wins</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-muted topNav\" *ngIf=\"actions.length < 1\" align=\"center\"><p>Loading Lines</p></div>\n<div class=\"loader\" *ngIf=\"actions.length < 1\"></div>\n\n<div class=\"container pt-5 bg-dark\" *ngIf=\"actions.length > 0\">\n  <div class=\"row\" align=\"center\" *ngIf=\"sport==0 || sport==3 || sport==4\">\n    <div *ngFor=\"let action of actions\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n\n      <div class=\"row pl-0 pr-0\">\n        <div class=\"col w-50\" align=\"left\">\n          <p class=\"m-0 pl-3\">{{action.matchDate}}</p>\n        </div>\n        <div class=\"col w-50\" align=\"right\">\n          <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n        </div>\n      </div>\n\n      <div class =\"row w-100 imageDivHeight\" *ngIf=\"action.sport==0 || action.sport==4 || action.sport==3\">\n        <div class =\"col p-1 float-left\">\n          <img class=\"w-75 h-100\" src=\"{{action.awayImagePath}}\" alt=\"{{action.awayTeam}}\">\n        </div>\n        <h4 class=\"h-100\" align=\"center\">@</h4>\n        <div class =\"col p-1 float-right\">\n          <img class=\"w-75 h-100\" src=\"{{action.homeImagePath}}\" alt=\"assets/images/ncaaf.jpg\">\n        </div>\n      </div>\n\n      <div class=\"card-header border-top pl-3 pr-3\">\n\n        <div align=\"left\">\n          <div class=\"row pl-3\">{{action.awayTeam}}</div>\n          <div class=\"row border-bottom pb-1 pt-1\">\n            <div class=\"col\">\n              <a class=\"btn btn-primary btn-block btn-sm text-light float-left\" *ngIf=\"action.awayTeamML!=0\" (click)=\"placeBet(action,'awayTeamML')\">{{action.awayTeamML}}</a>\n            </div>\n            <div class=\"col\" align=\"center\">\n              <a class=\"btn btn-primary btn-block btn-sm text-light\" *ngIf=\"action.awayTeamRL!=0\" (click)=\"placeBet(action,'awayTeamRL')\">{{action.awayTeamRL}} {{action.awayTeamRLOdds}}</a>\n            </div>\n            <div class=\"col\">\n              <a class=\"btn btn-primary btn-block btn-sm text-light float-right\" *ngIf=\"action.totalNumber!=0\" (click)=\"placeBet(action,'under')\">u{{action.totalNumber}}  {{action.underLine}}</a>\n            </div>\n          </div>\n        </div>\n\n        <div align=\"left\">\n          <div class=\"row pl-3\">{{action.homeTeam}}</div>\n          <div class=\"row pb-1 pt-1\">\n            <div class=\"col\">\n              <a class=\"btn btn-primary btn-block btn-sm text-light float-left\" *ngIf=\"action.homeTeamML!=0\" (click)=\"placeBet(action,'homeTeamML')\">{{action.homeTeamML}}</a>\n            </div>\n            <div class=\"col\" align=\"center\">\n              <a class=\"btn btn-primary btn-block btn-sm text-light\" *ngIf=\"action.homeTeamRL!=0\" (click)=\"placeBet(action,'homeTeamRL')\">{{action.homeTeamRL}} {{action.homeTeamRLOdds}}</a>\n            </div>\n            <div class=\"col\">\n              <a class=\"btn btn-primary btn-block btn-sm text-light float-right\" *ngIf=\"action.totalNumber!=0\" (click)=\"placeBet(action,'over')\">o{{action.totalNumber}}  {{action.overLine}}</a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row mt-3 ml-0 mr-0\" *ngIf=\"sport==21\">\n    <div class=\"col bg-dark block text-light p-0 m-0 h-100\" *ngFor=\"let action of actions\">\n      <div class=\"col\" align=\"center\">\n        <h5>{{action.eventName}} - {{action.matchDate}} {{action.matchTime}}</h5>\n      </div>\n\n    <div>\n      <table class=\"table table-dark table-hover w-100\">\n        <thead>\n          <tr>\n            <th style=\"width:50%\">Participant</th>\n            <th style=\"width:50%\">Odds to Win</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr (click)=\"placeGolf(action, part)\" *ngFor=\"let part of action.participant\">\n            <td>{{part.name}}</td>\n            <td>{{part.odds}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    </div>\n</div>\n\n\n<div class=\"row\" align=\"center\" *ngIf=\"sport==11\">\n  <div *ngFor=\"let action of actions\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n\n    <div class=\"row pl-0 pr-0\">\n      <div class=\"col w-50\" align=\"left\">\n        <p class=\"m-0 pl-3\">{{action.matchDate}}</p>\n      </div>\n      <div class=\"col w-50\" align=\"right\">\n        <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"row justify-content-center mt-0 pt-0\">\n          <p class=\"font-weight-bold mb-0 pb-0\">{{action.homeTeam}} V {{action.awayTeam}}</p>\n        </div>\n        <div class=\"row justify-content-center mb-0 pb-0 text-muted font-small\">\n          {{action.details}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-header\">\n\n      <div class=\"row border-bottom\">\n        <div class=\"col w-50 border-right\" align=\"center\">\n          {{action.awayTeam}}\n        </div>\n        <div class=\"col w-50\" align=\"center\">\n          {{action.homeTeam}}\n        </div>\n      </div>\n\n      <div class=\"row border-bottom mb-1 pb-1 pt-1\" *ngIf=\"action.awayTeamML != null || action.homeTeamML != null\">\n        <div class=\"col w-50 border-right\">\n          <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'awayTeamML')\" *ngIf=\"action.awayTeamML != null\">\n            {{action.awayTeamML}}\n          </a>\n        </div>\n        <div class=\"col w-50\">\n          <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'homeTeamML')\" *ngIf=\"action.homeTeamML != null\">\n            {{action.homeTeamML}}\n          </a>\n        </div>\n      </div>\n\n      <div>\n      <div class=\"row border-bottom mb-1 pb-1 pt-1\" *ngIf=\"action.totalNumber != 0 || action.totalNumber !=0\">\n        <div class=\"col w-50 border-right\">\n          <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'overUFC')\" *ngIf=\"action.totalNumber != 0\">\n            o{{action.totalNumber}}  {{action.overLine}}\n          </a>\n        </div>\n        <div class=\"col w-50\">\n          <a class=\"btn btn-block btn-primary btn-sm text-light\" (click)=\"placeBet(action, 'underUFC')\" *ngIf=\"action.totalNumber != 0\">\n            u{{action.totalNumber}}  {{action.underLine}}\n          </a>\n        </div>\n      </div>\n    </div>\n\n    </div>\n\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5 mb-5 bg-dark\">\n<div class=\"row\" align=\"center\">\n  <div *ngFor=\"let odd of odds\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n    <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n      <div class=\"col\" align=\"left\">\n        <p class=\"m-0 pl-3\">{{odd.matchDate}}</p>\n      </div>\n      <div class=\"col\" align=\"right\">\n        <p class=\"m-0 pr-3\">{{odd.matchTime}}</p>\n      </div>\n    </div>\n    <div class =\"row ml-0 mr-0\">\n      <div class =\"col p-0 float-left\">\n        <img class=\"w-75 h-100\" src=\"{{odd.awayImagePath}}\" alt=\"Card image cap\">\n      </div>\n      <h2 class=\"mt-4\">@</h2>\n      <div class =\"col p-0 float-right\">\n        <img class=\"w-75 h-100\" src=\"{{odd.homeImagePath}}\" alt=\"Card image cap\">\n      </div>\n    </div>\n    <div class=\"card-header pl-1 pr-1 border-top\">\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{odd.awayTeam}}</div>\n        <div class=\"row border-bottom pb-1 pt-1\">\n          <div class=\"col\" align=\"center\">\n            <label class=\"btn btn-primary btn-sm btn-block\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"teaserCheckboxClick($event, odd, 'awayTeamRLTeaser')\">{{odd.awayTeamRL}}</label>\n          </div>\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm btn-block float-right\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"teaserCheckboxClick($event, odd, 'overTeaser')\">Over {{odd.totalNumberTeaserOver}}</label>\n          </div>\n        </div>\n      </div>\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{odd.homeTeam}}</div>\n        <div class=\"row pb-1 pt-1\">\n          <div class=\"col\" align=\"center\">\n            <label class=\"btn btn-primary btn-sm btn-block\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"teaserCheckboxClick($event, odd, 'homeTeamRLTeaser')\">{{odd.homeTeamRL}}</label>\n          </div>\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm btn-block float-right\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"teaserCheckboxClick($event, odd, 'underTeaser')\">Under {{odd.totalNumberTeaserUnder}}</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<div class=\"btn btn-success btn-lg inside mb-2\" (click)=\"placeBet()\">Continue</div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/users/allProfiles', {headers: headers})
        return this.http.get('users/allProfiles', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateBalance = function (updatedAmount) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/users/updateBalance', updatedAmount, {headers: headers})
        return this.http.post('users/updateBalance', updatedAmount, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateLeague = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/users/updateLeague', body, {headers: headers})
        return this.http.post('users/updateLeague', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getProfileById = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/users/getProfileById?userId=' + userId)
        return this.http.get('users/getProfileById?userId=' + userId)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/slatechamp/angular-src/src/user.service.js.map

/***/ })

},[771]);
//# sourceMappingURL=main.bundle.map