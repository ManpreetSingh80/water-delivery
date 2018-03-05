webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>About</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="about-header">\n\n    <img src="assets/img/ionic-logo-white.svg" alt="ionic logo">\n\n  </div>\n\n  <div padding class="about-info">\n\n    <h4>Ionic Conference</h4>\n\n\n\n    <ion-list no-lines>\n\n      <ion-item>\n\n        <ion-icon name="calendar" item-start></ion-icon>\n\n        <ion-label>Date</ion-label>\n\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="pin" item-start></ion-icon>\n\n        <ion-label>Location</ion-label>\n\n        <ion-select>\n\n          <ion-option value="madison" selected>Madison, WI</ion-option>\n\n          <ion-option value="austin">Austin, TX</ion-option>\n\n          <ion-option value="chicago">Chicago, IL</ion-option>\n\n          <ion-option value="seattle">Seattle, WA</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <p>\n\n      The Ionic Conference is a one-day conference featuring talks from the\n\n      Ionic team. It is focused on Ionic applications being built with\n\n      Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2,\n\n      Angular concepts, Webpack, Sass, and many other technologies used\n\n      in Ionic 2. Tickets are completely sold out, and we’re expecting\n\n      more than 1000 developers – making this the largest Ionic\n\n      conference ever!\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getMap().subscribe(function (mapData) {
            var mapEle = _this.mapElement.nativeElement;
            var map = new google.maps.Map(mapEle, {
                center: mapData.find(function (d) { return d.center; }),
                zoom: 16
            });
            mapData.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var marker = new google.maps.Marker({
                    position: markerData,
                    map: map,
                    title: markerData.name
                });
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                mapEle.classList.add('show-map');
            });
        });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('mapCanvas'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\map\map.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Map</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="map-page">\n\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\map\map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';




var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Schedule');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: sessionData.id, name: sessionData.name });
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Would you like to remove this session from your favorites?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateSchedule();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
            // simulate a network request that would take longer
            // than just pulling from out local json file
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'Sessions have been updated.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    return SchedulePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */])
], SchedulePage.prototype, "scheduleList", void 0);
SchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-schedule',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\schedule\schedule.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n\n      <ion-segment-button value="all">\n\n        All\n\n      </ion-segment-button>\n\n      <ion-segment-button value="favorites">\n\n        Favorites\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentFilter()">\n\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar color="primary"\n\n                   [(ngModel)]="queryText"\n\n                   (ionInput)="updateSchedule()"\n\n                   placeholder="Search">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list #scheduleList [hidden]="shownSessions === 0">\n\n\n\n    <ion-item-group *ngFor="let group of groups" [hidden]="group.hide">\n\n\n\n      <ion-item-divider sticky>\n\n        <ion-label>\n\n          {{group.time}}\n\n        </ion-label>\n\n      </ion-item-divider>\n\n\n\n      <ion-item-sliding *ngFor="let session of group.sessions" #slidingItem [attr.track]="session.tracks[0] | lowercase" [hidden]="session.hide">\n\n\n\n        <button ion-item (click)="goToSessionDetail(session)">\n\n          <h3>{{session.name}}</h3>\n\n          <p>\n\n            {{session.timeStart}} &mdash;\n\n            {{session.timeEnd}}:\n\n            {{session.location}}\n\n          </p>\n\n        </button>\n\n\n\n        <ion-item-options>\n\n          <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n\n            Favorite\n\n          </button>\n\n          <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Remove Favorite\')" *ngIf="segment === \'favorites\'">\n\n            Remove\n\n          </button>\n\n        </ion-item-options>\n\n\n\n      </ion-item-sliding>\n\n\n\n    </ion-item-group>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list-header [hidden]="shownSessions > 0">\n\n      No Sessions Found\n\n  </ion-list-header>\n\n\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab><ion-icon name="share"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab color="vimeo" (click)="openSocial(\'Vimeo\', fab)"><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab color="google" (click)="openSocial(\'Google+\', fab)"><ion-icon name="logo-googleplus"></ion-icon></button>\n\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\schedule\schedule.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionDetailPage = (function () {
    function SessionDetailPage(dataProvider, navParams) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
    }
    SessionDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data &&
                data.schedule &&
                data.schedule[0] &&
                data.schedule[0].groups) {
                for (var _i = 0, _a = data.schedule[0].groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    if (group && group.sessions) {
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            if (session && session.id === _this.navParams.data.sessionId) {
                                _this.session = session;
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    return SessionDetailPage;
}());
SessionDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-session-detail',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\session-detail\session-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title *ngIf="session">{{session.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="session">\n\n    <h1>{{session.name}}</h1>\n\n    <h4 *ngFor="let speaker of session?.speakers">\n\n    {{speaker.name}}\n\n  </h4>\n\n    <p>\n\n      {{session.timeStart}} - {{session.timeEnd}}\n\n    </p>\n\n    <p>{{session.location}}</p>\n\n    <p>{{session.description}}</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\session-detail\session-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], SessionDetailPage);

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var SpeakerListPage = (function () {
    function SpeakerListPage(actionSheetCtrl, navCtrl, confData, config, inAppBrowser) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.speakers = [];
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: session.id });
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (speaker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], { speakerId: speaker.id });
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create("https://twitter.com/" + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share ' + speaker.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: function () {
                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                        if (window['cordova'] && window['cordova'].plugins.clipboard) {
                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                        }
                    }
                },
                {
                    text: 'Share via ...'
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        var mode = this.config.get('mode');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact ' + speaker.name,
            buttons: [
                {
                    text: "Email ( " + speaker.email + " )",
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: function () {
                        window.open('mailto:' + speaker.email);
                    }
                },
                {
                    text: "Call ( " + speaker.phone + " )",
                    icon: mode !== 'ios' ? 'call' : null,
                    handler: function () {
                        window.open('tel:' + speaker.phone);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return SpeakerListPage;
}());
SpeakerListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-speaker-list',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\speaker-list\speaker-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Speakers</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content speaker-list">\n\n  <ion-list [virtualScroll]="speakers">\n\n    <ion-grid fixed>\n\n      <ion-row align-items-stretch>\n\n\n\n        <ion-col col-12 col-md-6 align-self-stretch align-self-center *virtualItem="let speaker" approxItemHeight="457px">\n\n\n\n          <ion-card class="speaker-card">\n\n            <ion-card-header>\n\n              <button ion-item detail-none (click)="goToSpeakerDetail(speaker)">\n\n                <ion-avatar item-start>\n\n                  <img [src]="speaker.profilePic" alt="Speaker profile pic">\n\n                </ion-avatar>\n\n                {{speaker.name}}\n\n              </button>\n\n            </ion-card-header>\n\n\n\n            <ion-card-content class="outer-content">\n\n              <ion-list>\n\n                <button ion-item *ngFor="let session of speaker.sessions" (click)="goToSessionDetail(session)">\n\n                  <h3>{{session.name}}</h3>\n\n                </button>\n\n\n\n                <button ion-item (click)="goToSpeakerDetail(speaker)">\n\n                  <h3>About {{speaker.name}}</h3>\n\n                </button>\n\n              </ion-list>\n\n            </ion-card-content>\n\n\n\n            <ion-row no-padding>\n\n              <ion-col col-12 col-lg-auto text-center text-lg-left>\n\n                <button ion-button clear small color="primary" icon-start (click)="goToSpeakerTwitter(speaker)">\n\n                  <ion-icon name="logo-twitter"></ion-icon>\n\n                  Tweet\n\n                </button>\n\n              </ion-col>\n\n              <ion-col col-12 col-lg-auto text-center>\n\n                <button ion-button clear small color="primary" icon-start (click)="openSpeakerShare(speaker)">\n\n                  <ion-icon name=\'share-alt\'></ion-icon>\n\n                  Share\n\n                </button>\n\n              </ion-col>\n\n              <ion-col col-12 col-lg-auto text-center text-lg-right>\n\n                <button ion-button clear small color="primary" icon-start (click)="openContact(speaker)">\n\n                  <ion-icon name=\'chatboxes\'></ion-icon>\n\n                  Contact\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n          </ion-card>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\speaker-list\speaker-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], SpeakerListPage);

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(navCtrl, userData, popoverCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.signup = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
        }
    };
    SignupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SignupPage.prototype.onLogin = function () {
        this.dismiss();
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        popover.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\signup\signup.html"*/'<ion-toolbar color="secondary">\n    <ion-title style="padding-left: 10px">Sign Up</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n</ion-toolbar>\n\n<ion-grid>\n\n  <ion-item>\n    <ion-row>\n      <ion-col class="justify-center">\n        <button ion-button color="facebook" block>Facebook</button>\n      </ion-col>\n      <ion-col class="justify-center">\n        <button ion-button color="google" block>Google</button>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list>\n			<ion-item>\n				<ion-label floating color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="signup.username" name="username" type="text" #username="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label floating color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<ion-item>\n      <ion-row justify-content-end class="login-buttons">\n        <ion-col col-6>\n          <button ion-button (click)="onSignup(signupForm)" type="submit" block>Sign Up</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-row align-items-center justify-content-center>\n        Already have an account?<button ion-button color="primary" clear (click)="onLogin()">Sign In</button>\n    </ion-row>\n	</form>\n</ion-grid>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2')\">Documentation</button>\n      <button ion-item (click)=\"close('http://showcase.ionicframework.com')\">Showcase</button>\n      <button ion-item (click)=\"close('https://github.com/ionic-team/ionic')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], PopoverPage);

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\account\account.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Account</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <div padding-top text-center *ngIf="username">\n\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n\n    <h2>{{username}}</h2>\n\n\n\n    <ion-list inset>\n\n      <button ion-item (click)="updatePicture()">Update Picture</button>\n\n      <button ion-item (click)="changeUsername()">Change Username</button>\n\n      <button ion-item (click)="changePassword()">Change Password</button>\n\n      <button ion-item (click)="support()">Support</button>\n\n      <button ion-item (click)="logout()">Logout</button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\account\account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(confData, navParams, viewCtrl) {
        var _this = this;
        this.confData = confData;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.data;
        this.confData.getTracks().subscribe(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    }
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    return ScheduleFilterPage;
}());
ScheduleFilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-schedule-filter',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\schedule-filter\schedule-filter.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Cancel</button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>\n\n      Filter Sessions\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n  <ion-list>\n\n    <ion-list-header>Tracks</ion-list-header>\n\n\n\n    <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n\n      <span item-start class="dot"></span>\n\n      <ion-label>{{track.name}}</ion-label>\n\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n\n      Reset All Filters\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\schedule-filter\schedule-filter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
], ScheduleFilterPage);

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data && data.speakers) {
                for (var _i = 0, _a = data.speakers; _i < _a.length; _i++) {
                    var speaker = _a[_i];
                    if (speaker && speaker.id === _this.navParams.data.speakerId) {
                        _this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    };
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
    };
    return SpeakerDetailPage;
}());
SpeakerDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-speaker-detail',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\speaker-detail\speaker-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{speaker?.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="speaker-detail">\n\n  <div text-center *ngIf="speaker">\n\n    <img [src]="speaker.profilePic" [alt]="speaker.name"><br>\n\n\n\n    <button ion-button icon-only clear small color="twitter">\n\n      <ion-icon name="logo-twitter"></ion-icon>\n\n    </button>\n\n    <button ion-button icon-only clear small color="github">\n\n      <ion-icon name="logo-github"></ion-icon>\n\n    </button>\n\n    <button ion-button icon-only clear small color="instagram">\n\n      <ion-icon name="logo-instagram"></ion-icon>\n\n    </button>\n\n  </div>\n\n\n\n  <p>{{speaker?.about}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\speaker-detail\speaker-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], SpeakerDetailPage);

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    return UserData;
}());
UserData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UserData);

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return TutorialPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
], TutorialPage.prototype, "slides", void 0);
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\tutorial\tutorial.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n\n      <h2 class="slide-title">\n\n        Welcome to <b>ICA</b>\n\n      </h2>\n\n      <p>\n\n        The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n\n      <h2 class="slide-title" >What is Ionic?</h2>\n\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n\n      <h2 class="slide-title">What is Ionic Pro?</h2>\n\n      <p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n\n      <h2 class="slide-title">Ready to Play?</h2>\n\n      <button ion-button icon-end large clear (click)="startApp()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\tutorial\tutorial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    return SupportPage;
}());
SupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\support\support.html"*/'<ion-header>\n\n\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Support</ion-title>\n\n	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n\n	</div>\n\n\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n\n			</ion-item>\n\n		</ion-list>\n\n\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n\n			Support message is required\n\n		</p>\n\n\n\n		<div padding>\n\n			<button ion-button block type="submit">Submit</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\support\support.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
], SupportPage);

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(popoverCtrl, navCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.shops = [
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
            {
                id: 1,
                name: 'Raj bottles',
                address: 'AECS Layout',
                city: 'Banglore',
                state: 'Kernataka',
                zipCode: '560037',
                location: { lat: 0, lng: 0 },
                contact: '21321312',
                keywords: [''],
                image: 'data:image/jpeg;base64,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',
                timings: { opening: '9 AM', closing: '5 PM' }
            },
        ];
    }
    HomePage.prototype.openShop = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__products_products__["a" /* ProductPage */], { id: id });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('scrollArea'),
    __metadata("design:type", Object)
], HomePage.prototype, "scrollArea", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'home',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar color="light">\n    <button style="display: none" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title color="primary" style="text-align:center">Waterboy</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content #scrollArea>\n  <div padding class="about-info">\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngFor="let shop of shops" col-sm-12 col-md-6 col-lg-4 col-xl-3>\n          <shop-card [shop]="shop" (click)="openShop(shop.id)"></shop-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductPage = (function () {
    function ProductPage(popoverCtrl, navCtrl, navParams) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.products = [
            {
                productId: 0,
                shopId: 0,
                name: 'Bisleri 2L',
                price: 80,
                volume: 2000,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcU3didLTYw4tjTrNJs0Q-8tDu6YbXKoy5dm73rElC-KOQAZtfw',
                description: 'Bisleri 2L bottled water'
            },
            {
                productId: 1,
                shopId: 0,
                name: 'Regular 2L',
                price: 50,
                volume: 2000,
                image: 'https://5.imimg.com/data5/RJ/LV/MY-49578/water-bottle-500x500.jpg',
                description: 'Regular 2L bottled water'
            }
        ];
        this.totalQuantity = 1;
        this.shopId = null;
    }
    ProductPage.prototype.ionViewDidLoad = function () {
        this.shopId = this.navParams.get('id');
        console.log(this.shopId);
    };
    ProductPage.prototype.checkout = function () {
        console.log('checkout');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    return ProductPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('scrollArea'),
    __metadata("design:type", Object)
], ProductPage.prototype, "scrollArea", void 0);
ProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'products',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\products\products.html"*/'<ion-content #scrollArea>\n  <div padding class="about-info">\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngFor="let product of products" col-sm-12 col-md-6 col-lg-4 col-xl-3>\n          <!-- <shop-card [shop]="shop"></shop-card> -->\n          <product-card [product]="product"></product-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-grid class="hide-xs hide-sm">\n    <ion-row>\n      <ion-col col-3 offset-8 class="checkout">\n          <button ion-button icon-left block (click)="checkout()">\n            <ion-icon name="md-basket"></ion-icon>\n              CHECKOUT\n          </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n\n<ion-footer [hidden]="!totalQuantity" class="hide-md hide-xl hide-lg footer">\n  <ion-toolbar>\n      <button ion-item text-center color="primary" (click)="checkout()"><ion-icon name="cart"></ion-icon>&nbsp;&nbsp; Checkout</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\products\products.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], ProductPage);

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = (function () {
    function CartPage(popoverCtrl, alertCtrl, userData, navCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.list = [
            {
                product: {
                    productId: 0,
                    shopId: 0,
                    name: 'Bisleri 2L',
                    price: 80,
                    volume: 2000,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcU3didLTYw4tjTrNJs0Q-8tDu6YbXKoy5dm73rElC-KOQAZtfw',
                    description: 'Bisleri 2L bottled water'
                },
                quantity: 1,
                price: 80
            },
            {
                product: {
                    productId: 1,
                    shopId: 0,
                    name: 'Regular 2L',
                    price: 50,
                    volume: 2000,
                    image: 'https://5.imimg.com/data5/RJ/LV/MY-49578/water-bottle-500x500.jpg',
                    description: 'Regular 2L bottled water'
                },
                quantity: 2,
                price: 100
            }
        ];
        this.totalQuantity = 0;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        this.list.map(function (item) { return Object.assign(item, { price: item.quantity * item.price }); });
        this.totalQuantity = this.list.reduce(function (prev, curr) { return prev + curr.quantity; }, 0);
    };
    CartPage.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    CartPage.prototype.removeItem = function (index) {
        console.log('removing item at ', index);
        this.list.splice(index, 1);
    };
    CartPage.prototype.decQty = function (index) {
        if (this.list[index].quantity > 1) {
            this.list[index].quantity -= 1;
            this.list[index].price -= this.list[index].product.price;
        }
    };
    CartPage.prototype.incQty = function (index) {
        this.list[index].quantity += 1;
        this.list[index].price += this.list[index].product.price;
    };
    CartPage.prototype.showItemInfo = function (item, index) {
        var _this = this;
        /*
        let info = this.popoverCtrl.create(ProductInfoPage, item);
        info.present();
        */
        var alert = this.alertCtrl.create({
            title: "<div class=\"title\">" + item.product.name + "</div>",
            message: "<div>\n        <div><img class=\"product-img\" src=\"" + item.product.image + "\"></div>\n        <div><h2 class=\"name\">" + item.product.name + "</h2></div>\n        <div><p class=\"desc\">" + item.product.name + "</p></div>\n      </div>",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancel clicked');
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        console.log('remove item', index);
                        _this.removeItem(index);
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        console.log('checkout');
        this.userData.hasLoggedIn().then(function (loggedIn) {
            if (loggedIn) {
                // select address
                // nav to checkout page
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */]);
            }
            else {
                var popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                popover.present();
            }
        });
    };
    return CartPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('scrollArea'),
    __metadata("design:type", Object)
], CartPage.prototype, "scrollArea", void 0);
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cart',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\cart\cart.html"*/'<ion-header class="heading">\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-3 col-lg-2 col-xl-1>\n          <ion-navbar color="primary">\n              <ion-title color="white">Back</ion-title>\n            </ion-navbar>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid> -->\n  <!-- <ion-toolbar no-padding> -->\n      <button block no-margin ion-button icon-left color="primary" (click)="onBack()"><ion-icon name="arrow-back"></ion-icon>&nbsp; Back</button>\n  <!-- </ion-toolbar> -->\n\n</ion-header>\n\n<ion-content padding #scrollArea>\n  <ion-grid no-padding>\n    <ion-row align-items-center justify-content-center>\n      <ion-col col-sm-12 col-md-6 col-lg-5 col-xl-4>\n        <ion-card no-margin class="cart-card">\n          <ion-card-header>\n            <ion-icon name="cart"></ion-icon> Cart\n          </ion-card-header>\n\n        <ion-list>\n          <ion-item-sliding *ngFor="let item of list;let i=index;">\n            <ion-item>\n              <ion-thumbnail item-left (click)="showItemInfo(item,i)">\n                <img [src]="item.product.image">\n              </ion-thumbnail>\n              <h2 class="item-name">{{item.product.name}} </h2>\n              <!-- <p *ngIf="item.maxRetPrice - item.storePrice"  color="primary">You Save {{item.maxRetPrice - item.storePrice}} </p> -->\n              <h4 class="price"> {{ item.product.price }}\n                  <!-- <s class="price-old">{{item.maxRetPrice}} </s> -->\n              </h4>\n              <div item-right class="quantity">\n                <button ion-button icon-only clear medium (click)="decQty(i)"><ion-icon name="remove-circle"></ion-icon></button>\n                <h4 class="item-quantity">{{item.quantity}} </h4>\n                <button ion-button icon-only clear medium (click)="incQty(i)"><ion-icon name="add-circle"></ion-icon></button>\n              </div>\n              <br>\n              <div class="total-price">\n                <h4>Total &nbsp; ₹{{ item.price }}</h4>\n              </div>\n              <!--<button ion-button clear item-right>View</button>-->\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="primary" (click)="removeItem(i)" >\n                <ion-icon name="trash"></ion-icon>\n                Remove\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n\n        </ion-list>\n        </ion-card>\n      </ion-col>\n      <ion-col col-3 offset-3 class="checkout hide-xs hide-sm">\n        <button ion-button icon-left block (click)="checkout()">\n          <ion-icon name="md-basket"></ion-icon>\n            CHECKOUT\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer [hidden]="!totalQuantity" class="hide-md hide-xl hide-lg footer">\n  <ion-toolbar>\n      <button ion-item text-center color="primary" (click)="checkout()"><ion-icon name="cart"></ion-icon>&nbsp;&nbsp; Checkout</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\cart\cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_address_add_address__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutPage = (function () {
    function CheckoutPage(popoverCtrl, alertCtrl, userData, navCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.list = [
            {
                product: {
                    productId: 0,
                    shopId: 0,
                    name: 'Bisleri 2L',
                    price: 80,
                    volume: 2000,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcU3didLTYw4tjTrNJs0Q-8tDu6YbXKoy5dm73rElC-KOQAZtfw',
                    description: 'Bisleri 2L bottled water'
                },
                quantity: 1,
                price: 80
            },
            {
                product: {
                    productId: 1,
                    shopId: 0,
                    name: 'Regular 2L',
                    price: 50,
                    volume: 2000,
                    image: 'https://5.imimg.com/data5/RJ/LV/MY-49578/water-bottle-500x500.jpg',
                    description: 'Regular 2L bottled water'
                },
                quantity: 2,
                price: 100
            }
        ];
        this.addresses = [
            { id: 1, default: false, address: 'sfjsbefjhbsjebfjbsjebfjbkjesbfkjbkjesbkjfbkjsbejbfjbjfjbasjbfjbewajbfjbjwaebjfbjwaeb' },
            { id: 2, default: false, address: 'adjbabwfhbhabwjbfjbqwkjbfjbjqwbjbfjjkbfkjbqwjkfkjbkjwqbfkjbijqwbijfbjibwqjbfjfJFJKFJKWF' },
            { id: 3, default: true, address: 'akjsfdkjajfndjawnjfnkjawnkjfnkjawnjkfnkj' }
        ];
        this.totalQuantity = 0;
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        this.list.map(function (item) { return Object.assign(item, { price: item.quantity * item.price }); });
        this.totalQuantity = this.list.reduce(function (prev, curr) { return prev + curr.quantity; }, 0);
    };
    CheckoutPage.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    CheckoutPage.prototype.removeItem = function (index) {
        console.log('removing item at ', index);
        this.list.splice(index, 1);
    };
    CheckoutPage.prototype.decQty = function (index) {
        if (this.list[index].quantity > 1) {
            this.list[index].quantity -= 1;
            this.list[index].price -= this.list[index].product.price;
        }
    };
    CheckoutPage.prototype.incQty = function (index) {
        this.list[index].quantity += 1;
        this.list[index].price += this.list[index].product.price;
    };
    CheckoutPage.prototype.showItemInfo = function (item, index) {
        /*
        let info = this.popoverCtrl.create(ProductInfoPage, item);
        info.present();
        */
        var alert = this.alertCtrl.create({
            title: "<div class=\"title\">" + item.product.name + "</div>",
            message: "<div>\n        <div><img class=\"product-img\" src=\"" + item.product.image + "\"></div>\n        <div><h2 class=\"name\">" + item.product.name + "</h2></div>\n        <div><b class=\"desc\">Price:  \u20B9" + item.product.price + "</b></div>\n        <div><p class=\"desc\">" + item.product.description + "</p></div>\n      </div>",
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    CheckoutPage.prototype.addAddress = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_address_add_address__["a" /* AddAddressPage */]);
        popover.present();
        popover.onDidDismiss(function (status) {
            if (status) {
                // sync address
                console.log('sync addresses');
            }
        });
    };
    CheckoutPage.prototype.checkout = function () {
        var _this = this;
        this.userData.hasLoggedIn().then(function (loggedIn) {
            if (loggedIn) {
                // select address
                // nav to checkout page
            }
            else {
                var popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                popover.present();
            }
        });
    };
    return CheckoutPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('scrollArea'),
    __metadata("design:type", Object)
], CheckoutPage.prototype, "scrollArea", void 0);
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'checkout',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\checkout\checkout.html"*/'<ion-header class="heading">\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-3 col-lg-2 col-xl-1>\n          <ion-navbar color="primary">\n              <ion-title color="white">Back</ion-title>\n            </ion-navbar>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid> -->\n      <button block no-margin ion-button icon-left color="primary" (click)="onBack()"><ion-icon name="arrow-back"></ion-icon>&nbsp; Back</button>\n\n  </ion-header>\n\n<ion-content padding #scrollArea>\n  <ion-grid no-padding>\n    <!-- <ion-row justify-content-center>\n        <div class="checkout">\n            <button large ion-button icon-left block (click)="checkout()">\n                <ion-icon name="ios-cash-outline"></ion-icon>&nbsp;\n                  BOOK ORDER\n              </button>\n          </div>\n    </ion-row> -->\n    <ion-row align-items-start justify-content-around>\n      <ion-col col-sm-12 col-md-6 col-lg-5 col-xl-4>\n        <ion-card no-margin class="cart-card">\n          <ion-card-header>\n            <ion-icon name="cart"></ion-icon> Cart\n          </ion-card-header>\n\n        <ion-list>\n            <ion-item *ngFor="let item of list;let i=index;">\n              <ion-thumbnail item-left (click)="showItemInfo(item,i)">\n                <img [src]="item.product.image">\n              </ion-thumbnail>\n              <h2 class="item-name">{{item.product.name}} </h2>\n              <br>\n              <!-- <p *ngIf="item.maxRetPrice - item.storePrice"  color="primary">You Save {{item.maxRetPrice - item.storePrice}} </p> -->\n              <h4 class="price">Price &nbsp; ₹{{ item.product.price }}\n                  <!-- <s class="price-old">{{item.maxRetPrice}} </s> -->\n              </h4>\n              <h4 class="price">Quantity &nbsp; {{ item.quantity }}\n                  <!-- <s class="price-old">{{item.maxRetPrice}} </s> -->\n              </h4>\n              <div item-right class="quantity">\n                  <h4 class="total-price">Total &nbsp; ₹ {{ item.price }}</h4>\n                  <!-- <button ion-button icon-only clear medium (click)="decQty(i)"><ion-icon name="remove-circle"></ion-icon></button>\n                  <h4 class="item-quantity">{{item.quantity}} </h4>\n                  <button ion-button icon-only clear medium (click)="incQty(i)"><ion-icon name="add-circle"></ion-icon></button> -->\n                </div>\n              <!-- <div class="total-price">\n                <h4>Total &nbsp; ₹ {{ item.price }}</h4>\n              </div> -->\n              <!--<button ion-button clear item-right>View</button>-->\n            </ion-item>\n\n        </ion-list>\n        </ion-card>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-lg-7 col-xl-7>\n        <ion-row>\n          <ion-col col-sm-12 col-md-12 col-lg-8 col-xl-8>\n              <ion-card class="card-address">\n                  <ion-card-header>\n                    Delivery Address\n                    <button color="secondary" round ion-button icon-left (click)="addAddress()">\n                        <ion-icon name="add"></ion-icon>\n                          Add\n                      </button>\n                  </ion-card-header>\n                  <!-- <ion-scroll scrollY="true"> -->\n                      <ion-list radio-group>\n                          <ion-item *ngFor="let address of addresses" class="address">\n                            <div item-right>\n                                <h2>Santwissen Technology Pvt. Ltd.</h2>\n                                <h2>AECS layout, near kundhnalli signal, Marathahalli</h2>\n                                <h2>Banglore, 8146088621</h2>\n                            </div>\n                            <ion-radio item-left [checked]="address.default" [value]="address.id"></ion-radio>\n                          </ion-item>\n                        </ion-list>\n                  <!-- </ion-scroll> -->\n\n                </ion-card>\n          </ion-col>\n          <ion-col col-sm-12 col-md-12 col-lg-4 col-xl-4>\n              <ion-card class="cart-card">\n                  <ion-card-header>\n                      Payment method\n                  </ion-card-header>\n                  <ion-list radio-group>\n                      <ion-item>\n                        <ion-radio checked="true" value="cod"></ion-radio>\n                        <ion-label>Cash on Delivery</ion-label>\n                      </ion-item>\n                    </ion-list>\n                </ion-card>\n          </ion-col>\n          <button large ion-button icon-left block (click)="checkout()">\n          <ion-icon name="ios-cash-outline"></ion-icon>&nbsp;\n            BOOK ORDER\n        </button>\n        </ion-row>\n\n\n\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer [hidden]="!totalQuantity" class="hide-md hide-xl hide-lg footer">\n  <ion-toolbar>\n      <button ion-item text-center color="primary" (click)="checkout()"><ion-icon name="cart"></ion-icon>&nbsp;&nbsp; Checkout</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\checkout\checkout.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddAddressPage = (function () {
    function AddAddressPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.address = {
            addressLine1: '',
            addressLine2: '',
            city: '',
            contact: '',
            default: true,
        };
        this.submitted = false;
    }
    AddAddressPage.prototype.onAdd = function (form) {
        this.submitted = true;
        if (form.valid) {
            // save address
            this.viewCtrl.dismiss(true);
        }
    };
    AddAddressPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AddAddressPage;
}());
AddAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'add-address',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\add-address\add-address.html"*/'\n  <ion-toolbar color="secondary">\n      <ion-title style="padding-left: 10px">Add Address</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-toolbar>\n\n<ion-grid>\n    <form #addressForm="ngForm" novalidate>\n      <ion-list>\n        <ion-item>\n          <ion-label floating color="primary">Address Line 1</ion-label>\n          <ion-input [(ngModel)]="address.addressLine1" name="addressLine1" type="text" #addressLine1="ngModel" spellcheck="false" autocapitalize="off"\n            required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="addressLine1.valid || submitted == false" color="danger" padding-left>\n          Address Line 1 is required\n        </p>\n\n        <ion-item>\n          <ion-label floating color="primary">Address Line 2</ion-label>\n          <ion-input [(ngModel)]="address.addressLine2" name="addressLine2" type="text" #addressLine2="ngModel" required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="addressLine2.valid || submitted == false" color="danger" padding-left>\n          Address Line 2 is required\n        </p>\n\n        <ion-item>\n          <ion-label floating color="primary">City</ion-label>\n          <ion-input [(ngModel)]="address.city" name="city" type="text" #city="ngModel" required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="city.valid || submitted == false" color="danger" padding-left>\n           City is required\n        </p>\n\n          <ion-item>\n            <ion-label floating color="primary">Contact</ion-label>\n            <ion-input [(ngModel)]="address.contact" name="address.contact" type="text" #contact="ngModel" required>\n            </ion-input>\n          </ion-item>\n          <p ion-text [hidden]="contact.valid || submitted == false" color="danger" padding-left>\n            Contact is required\n          </p>\n      </ion-list>\n\n      <ion-item>\n          <ion-label color="primary">Set Default Address</ion-label>\n          <ion-checkbox color="primary" [(ngModel)]="address.default" #default="ngModel" name="default"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n          <button ion-button (click)="onAdd(addressForm)" type="submit" block>Add Address</button>\n      </ion-item>\n    </form>\n</ion-grid>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\add-address\add-address.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
], AddAddressPage);

//# sourceMappingURL=add-address.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__active_orders_active_orders__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersPage = (function () {
    function OrdersPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__active_orders_active_orders__["a" /* ActiveOrdersPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__active_orders_active_orders__["a" /* ActiveOrdersPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    return OrdersPage;
}());
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'orders',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\orders\orders.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="orders" tabsLayout="icon-start">\n  <ion-tab [root]="tab1Root" tabTitle="Active" tabIcon="alert" tabBadge="3" tabBadgeStyle="danger" tabUrlPath="active-orders"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Completed" tabIcon="archive"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\orders\orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], OrdersPage);

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NavController } from 'ionic-angular';

var ActiveOrdersPage = (function () {
    function ActiveOrdersPage() {
        this.shop = {
            id: 1,
            name: 'Raj bottles',
            address: 'AECS Layout',
            city: 'Banglore',
            state: 'Kernataka',
            zipCode: '560037',
            location: { lat: 0, lng: 0 },
            contact: '21321312',
            keywords: [''],
            image: 'data:image/jpeg;base64,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',
            timings: { opening: '9 AM', closing: '5 PM' }
        };
        this.cart = [
            {
                product: {
                    productId: 0,
                    shopId: 0,
                    name: 'Bisleri 2L',
                    price: 80,
                    volume: 2000,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcU3didLTYw4tjTrNJs0Q-8tDu6YbXKoy5dm73rElC-KOQAZtfw',
                    description: 'Bisleri 2L bottled water'
                },
                quantity: 1,
                price: 80
            },
            {
                product: {
                    productId: 1,
                    shopId: 0,
                    name: 'Regular 2L',
                    price: 50,
                    volume: 2000,
                    image: 'https://5.imimg.com/data5/RJ/LV/MY-49578/water-bottle-500x500.jpg',
                    description: 'Regular 2L bottled water'
                },
                quantity: 2,
                price: 100
            }
        ];
        this.address = {
            addressLine1: 'Santwissen technology pvt. ltd.',
            addressLine2: 'Vaikuntum layout, Foodanda building, adjacent to AECS layout, Marathahalli',
            city: 'Bangalore',
            contact: '8146088621',
            default: true
        };
        this.order = {
            id: 1,
            orderTime: new Date(new Date().getTime() - 3600000).getTime(),
            deliveryTime: 0,
            orderStatus: Object.keys(__WEBPACK_IMPORTED_MODULE_1__interfaces__["a" /* OrderStatus */]).map(function (s) { return typeof s !== 'string' ? null : __WEBPACK_IMPORTED_MODULE_1__interfaces__["a" /* OrderStatus */][s]; }).filter(function (f) { return f; })[0],
            cart: this.cart,
            address: this.address,
            shop: this.shop,
            totalPrice: 180,
            totalQuantity: 3
        };
        this.orders = [this.order, this.order, this.order, this.order];
    }
    return ActiveOrdersPage;
}());
ActiveOrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'active-orders',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\active-orders\active-orders.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Active Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content #scrollArea>\n    <div padding>\n      <ion-grid>\n        <ion-row justify-content-center>\n          <ion-col *ngFor="let order of orders" col-sm-12 col-md-6 col-lg-5 col-xl-4>\n              <order-card [order]="order"></order-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\active-orders\active-orders.html"*/
    }),
    __metadata("design:paramtypes", [])
], ActiveOrdersPage);

//# sourceMappingURL=active-orders.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_status__ = __webpack_require__(293);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__order_status__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_popover_about_popover__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_account__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_schedule_filter_schedule_filter__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_session_detail_session_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_speaker_detail_speaker_detail__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_speaker_list_speaker_list__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_page_tabs_page__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tutorial_tutorial__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_support_support__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_shop_card_shop_card__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_products_products__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_product_card_product_card__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_checkout_checkout__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_add_address_add_address__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_orders_orders__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_active_orders_active_orders__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_order_card_order_card__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_popover_about_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_tabs_page_tabs_page__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_shop_card_shop_card__["a" /* ShopCardPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_products_products__["a" /* ProductPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_product_card_product_card__["a" /* ProductCardPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_add_address_add_address__["a" /* AddAddressPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_active_orders_active_orders__["a" /* ActiveOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_order_card_order_card__["a" /* OrderCardPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */], {}, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_19__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                    { component: __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                    { component: __WEBPACK_IMPORTED_MODULE_15__pages_session_detail_session_detail__["a" /* SessionDetailPage */], name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                    { component: __WEBPACK_IMPORTED_MODULE_14__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                    { component: __WEBPACK_IMPORTED_MODULE_18__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'speakerList' },
                    { component: __WEBPACK_IMPORTED_MODULE_17__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                    { component: __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */], name: 'Map', segment: 'map' },
                    { component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                    { component: __WEBPACK_IMPORTED_MODULE_20__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                    { component: __WEBPACK_IMPORTED_MODULE_21__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                    { component: __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                    { component: __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                    { component: __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                    { component: __WEBPACK_IMPORTED_MODULE_24__pages_products_products__["a" /* ProductPage */], name: 'Products', segment: 'product' },
                    { component: __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__["a" /* CartPage */], name: 'Cart', segment: 'cart' },
                    { component: __WEBPACK_IMPORTED_MODULE_27__pages_checkout_checkout__["a" /* CheckoutPage */], name: 'Checkout', segment: 'checkout' },
                    { component: __WEBPACK_IMPORTED_MODULE_29__pages_orders_orders__["a" /* OrdersPage */], name: 'OrdersPage', segment: 'orders' },
                    { component: __WEBPACK_IMPORTED_MODULE_30__pages_active_orders_active_orders__["a" /* ActiveOrdersPage */], name: 'ActiveOrders', segment: 'active-orders' }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_popover_about_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_tabs_page_tabs_page__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_shop_card_shop_card__["a" /* ShopCardPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_products_products__["a" /* ProductPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_product_card_product_card__["a" /* ProductCardPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_add_address_add_address__["a" /* AddAddressPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_active_orders_active_orders__["a" /* ActiveOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_order_card_order_card__["a" /* OrderCardPage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_32__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_33__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    return ConferenceData;
}());
ConferenceData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
], ConferenceData);

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_map_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_speaker_list_speaker_list__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_support_support__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_orders_orders__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen, renderer, popoverCtrl) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.renderer = renderer;
        this.popoverCtrl = popoverCtrl;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Schedule', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__["a" /* SchedulePage */], index: 0, icon: 'calendar' },
            { title: 'Speakers', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_12__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'contacts' },
            { title: 'Map', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */], index: 2, icon: 'map' },
            { title: 'About', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], index: 3, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Orders', name: 'OrdersPage', component: __WEBPACK_IMPORTED_MODULE_15__pages_orders_orders__["a" /* OrdersPage */], icon: 'help' },
            { title: 'Logout', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        this.activeMenu = [];
        this.loggedIn = false;
        this.headerShrinked = false;
        // Check if the user has already seen the tutorial
        // this.storage.get('hasSeenTutorial')
        //   .then((hasSeenTutorial) => {
        //     if (hasSeenTutorial) {
        //       this.rootPage = TabsPage;
        //     } else {
        //       this.rootPage = TutorialPage;
        //     }
        //     this.platformReady()
        //   });
        this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */];
        this.platformReady();
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.loggedIn = loggedIn;
        this.activeMenu = loggedIn ? this.loggedInPages : this.loggedOutPages;
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    ConferenceApp.prototype.signIn = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        popover.present();
    };
    ConferenceApp.prototype.signUp = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */]);
        popover.present();
    };
    ConferenceApp.prototype.resizeHeader = function (ev) {
        if (ev.scrollTop > (ev.contentWidth > 768 ? 160 : 115)) {
            // console.log('shrink header');
            this.headerShrinked = true;
            this.renderer.setElementClass(this.content.nativeElement, 'hide-on-scroll', true);
            this.renderer.setElementClass(this.nav._elementRef.nativeElement, 'hide-on-scroll', true);
        }
        else if (this.headerShrinked) {
            this.renderer.setElementClass(this.content.nativeElement, 'hide-on-scroll', false);
            this.renderer.setElementClass(this.nav._elementRef.nativeElement, 'hide-on-scroll', false);
        }
    };
    ConferenceApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(this.menu.getMenus());
        this.nav.viewDidLoad.subscribe(function (v) {
            var scrollArea = v.instance.scrollArea;
            if (scrollArea) {
                scrollArea.ionScroll.subscribe(function (ev) {
                    _this.resizeHeader(ev);
                });
            }
        });
    };
    return ConferenceApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
], ConferenceApp.prototype, "nav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('c'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ConferenceApp.prototype, "content", void 0);
ConferenceApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\app\app.template.html"*/'<!-- <ion-split-pane> -->\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Show Tutorial\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Show Tutorial\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n\n  <div class="topbar" #c>\n    <div class="container">\n      <div class="auth">\n        <span (click)="signIn()">SIGN IN</span>\n        <span>&nbsp; / &nbsp;</span>\n        <span (click)="signUp()">SIGN UP</span>\n      </div>\n\n      <div class="buttons">\n        <div class="left">\n            <button ion-button icon-only clear menuToggle class="hide-md hide-lg hide-xl">\n              <ion-icon name="menu"></ion-icon>\n            </button>\n        </div>\n        <div class="logo">\n          <img src="data:image/png;base64,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">\n        </div>\n        <div class="right">\n          <button ion-button icon-right clear>\n            <span class="hide-xs hide-sm">Checkout</span>\n            <ion-icon name="md-basket"></ion-icon>\n          </button>\n        </div>\n      </div>\n      <div class="nav hide-xs hide-sm">\n        <button ion-button clear (click)="openPage(page)" *ngFor="let page of activeMenu">{{ page.title }}</button>\n        <button ion-button clear>Shops</button>\n        <button ion-button clear>My orders</button>\n        <button ion-button clear>Account</button>\n        <button ion-button clear>About</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" class="main-app" #content swipeBackEnabled="false" main name="app"></ion-nav>\n<!-- </ion-split-pane> -->\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\app\app.template.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_17__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_16__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */]])
], ConferenceApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatus; });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["WAITING_FOR_APPROVAL"] = 0] = "WAITING_FOR_APPROVAL";
    OrderStatus[OrderStatus["APPROVED"] = 1] = "APPROVED";
    OrderStatus[OrderStatus["IN_TRANSIT"] = 2] = "IN_TRANSIT";
    OrderStatus[OrderStatus["COMPLETED"] = 3] = "COMPLETED";
})(OrderStatus || (OrderStatus = {}));
//# sourceMappingURL=order-status.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShopCardPage = (function () {
    function ShopCardPage() {
    }
    ShopCardPage.prototype.gotoShop = function () {
        console.log('navigate to shop', this.shop.id);
    };
    ShopCardPage.prototype.openShopLocation = function () {
        console.log('show on map', this.shop.location);
    };
    return ShopCardPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ShopCardPage.prototype, "shop", void 0);
ShopCardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'shop-card',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\shop-card\shop-card.html"*/'<ion-card>\n  <div (click)="gotoShop()">\n    <img [src]="shop.image ? shop.image : defaultImg"/>\n    <ion-item>\n      <ion-icon style="font-size: 46px;" name="contact" item-left large color="primary"></ion-icon>\n      <h2 color="primary">{{ shop.name }} </h2>\n      <p>{{ shop.address }} </p>\n      <div class="space-between">\n        <p>{{ shop.city }}</p>\n        <p>{{ shop.zipCode }}</p>\n      </div>\n    </ion-item>\n  </div>\n  <hr>\n  <ion-item>\n    <button ion-button icon-left clear item-left>\n      <ion-icon name="time"></ion-icon>\n      {{ shop.timings.opening }} - {{ shop.timings.closing }}\n    </button>\n    <button ion-button icon-left clear item-right (click)="openShopLocation()">\n      <ion-icon name="navigate"></ion-icon>\n      Location\n    </button>\n  </ion-item>\n</ion-card>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\shop-card\shop-card.html"*/
    }),
    __metadata("design:paramtypes", [])
], ShopCardPage);

//# sourceMappingURL=shop-card.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCardPage = (function () {
    function ProductCardPage() {
        this.quantity = 0;
    }
    // gotoShop() {
    //   console.log('navigate to shop', this.shop.id);
    // }
    // openShopLocation() {
    //   console.log('show on map', this.shop.location);
    // }
    ProductCardPage.prototype.add = function (q) {
        this.quantity += q;
    };
    return ProductCardPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ProductCardPage.prototype, "product", void 0);
ProductCardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'product-card',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\product-card\product-card.html"*/'<ion-card>\n  <div>\n    <img [src]="product.image ? product.image : defaultImg"/>\n    <ion-item class="content">\n      <h2>{{ product.name }}</h2>\n      <p>{{ product.description }}</p>\n    </ion-item>\n  </div>\n  <hr>\n  <ion-item class="footer" >\n    <span color="secondary" item-left>₹ {{ product.price }}</span>\n    <button *ngIf="quantity < 1" ion-button icon-left item-right outline medium (click)="add(1)" class="add">\n      <ion-icon name="add"></ion-icon>\n      ADD\n    </button>\n    <div *ngIf="quantity > 0" class="button-group" item-right>\n      <button ion-button icon-only medium (click)="add(1)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <button ion-button outline medium clear style="font-size:2rem;">\n        &nbsp; {{ quantity }} &nbsp;\n      </button>\n      <button ion-button icon-only medium (click)="add(-1)">\n        <ion-icon name="remove"></ion-icon>\n      </button>\n    </div>\n  </ion-item>\n</ion-card>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\product-card\product-card.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProductCardPage);

//# sourceMappingURL=product-card.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderCardPage = (function () {
    function OrderCardPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.shop = {
            id: 1,
            name: 'Raj bottles',
            address: 'AECS Layout',
            city: 'Banglore',
            state: 'Kernataka',
            zipCode: '560037',
            location: { lat: 0, lng: 0 },
            contact: '21321312',
            keywords: [''],
            image: 'data:image/jpeg;base64,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',
            timings: { opening: '9 AM', closing: '5 PM' }
        };
        this.cart = [
            {
                product: {
                    productId: 0,
                    shopId: 0,
                    name: 'Bisleri 2L',
                    price: 80,
                    volume: 2000,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcU3didLTYw4tjTrNJs0Q-8tDu6YbXKoy5dm73rElC-KOQAZtfw',
                    description: 'Bisleri 2L bottled water'
                },
                quantity: 1,
                price: 80
            },
            {
                product: {
                    productId: 1,
                    shopId: 0,
                    name: 'Regular 2L',
                    price: 50,
                    volume: 2000,
                    image: 'https://5.imimg.com/data5/RJ/LV/MY-49578/water-bottle-500x500.jpg',
                    description: 'Regular 2L bottled water'
                },
                quantity: 2,
                price: 100
            }
        ];
        this.address = {
            addressLine1: 'Santwissen technology pvt. ltd.',
            addressLine2: 'Vaikuntum layout, Foodanda building, adjacent to AECS layout, Marathahalli',
            city: 'Bangalore',
            contact: '8146088621',
            default: true
        };
        this.order = {
            id: 1,
            orderTime: new Date(new Date().getTime() - 3600000).getTime(),
            deliveryTime: 0,
            orderStatus: Object.keys(__WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* OrderStatus */]).map(function (s) { return typeof s !== 'string' ? null : __WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* OrderStatus */][s]; }).filter(function (f) { return f; })[0],
            cart: this.cart,
            address: this.address,
            shop: this.shop,
            totalPrice: 180,
            totalQuantity: 3
        };
    }
    OrderCardPage.prototype.viewDetails = function () {
        // this.navCtrl.push(, { id: this.order.id });
    };
    return OrderCardPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], OrderCardPage.prototype, "order", void 0);
OrderCardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'order-card',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\order-card\order-card.html"*/'<ion-card>\n  <ion-item color="primary">\n    <h2 style="font-weight:bold;">Order No</h2>\n    <h2>{{ order.id }}</h2>\n  </ion-item>\n  <ion-card-content>\n    <ion-item class="status">\n      <span>Status:</span>\n      <span>{{ order.status }}</span>\n    </ion-item>\n    <ion-item class="order-time">\n      <span>Order Time:</span>\n      <span>{{ order.orderTime | date:\'short\' }}</span>\n    </ion-item>\n\n  </ion-card-content>\n      <button color="secondary" no-margin ion-button block (click)="viewDetails()">View Details</button>\n</ion-card>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\order-card\order-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], OrderCardPage);

//# sourceMappingURL=order-card.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, userData, popoverCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.onSignup = function () {
        this.dismiss();
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
        popover.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\login\login.html"*/'\n  <ion-toolbar color="secondary">\n      <ion-title style="padding-left: 10px">Sign In</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-toolbar>\n\n<ion-grid>\n\n  <ion-item>\n    <ion-row>\n      <ion-col class="justify-center">\n        <button ion-button color="facebook" block>Facebook</button>\n      </ion-col>\n      <ion-col class="justify-center">\n        <button ion-button color="google" block>Google</button>\n      </ion-col>\n    </ion-row>\n    </ion-item>\n    <form #loginForm="ngForm" novalidate>\n      <ion-list>\n        <ion-item>\n          <ion-label floating color="primary">Username</ion-label>\n          <ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n            required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n          Username is required\n        </p>\n\n        <ion-item>\n          <ion-label floating color="primary">Password</ion-label>\n          <ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n          Password is required\n        </p>\n      </ion-list>\n\n      <ion-item>\n        <ion-row class="login-buttons">\n          <ion-col class="justify-center">\n            <button ion-button color="secondary" clear>Forgot Password?</button>\n          </ion-col>\n          <ion-col class="justify-center">\n            <button ion-button (click)="onLogin(loginForm)" type="submit" block>Sign In</button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-row align-items-center justify-content-center>\n          Don\'t have an account?<button ion-button color="primary" clear (click)="onSignup()">Sign Up</button>\n      </ion-row>\n    </form>\n</ion-grid>\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\workspace\ionic-conference-app\src\pages\tabs-page\tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n\n  <ion-tab [root]="tab1Root" tabTitle="Schedule" tabIcon="calendar" tabUrlPath="conference-schedule"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Speakers" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Map" tabIcon="map"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\workspace\ionic-conference-app\src\pages\tabs-page\tabs-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs-page.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map