webpackJsonp([6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BymfContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BymfContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BymfContactPage = /** @class */ (function () {
    function BymfContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BymfContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BymfContactPage');
    };
    BymfContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bymf-contact',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\bymf-contact\bymf-contact.html"*/'<ion-header>\n    <ion-navbar style="height:75px;">\n      <button ion-button menuToggle left>\n        <ion-icon name="menu">&nbsp;Contact BYMF</ion-icon>\n      </button>\n      <button ion-button menuToggle right>\n        <img src="assets/imgs/logo.jpg" width="75px" height="75px" style="display:inline-block" />\n      </button>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <br><br><br>\n  Thank you for using the BYMF application. If you have ny suggestions or would like to see new features or items added send an email to <a href="">info@bymf.org.zw</a>. \n  Alternatively contact our secretary Cletous Mubaiwa on +263 775 985 609\n</ion-content>\n'/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\bymf-contact\bymf-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BymfContactPage);
    return BymfContactPage;
}());

//# sourceMappingURL=bymf-contact.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BymfEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BymfEventsPage page
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 **/
var BymfEventsPage = /** @class */ (function () {
    function BymfEventsPage(global, navCtrl, navParams, http) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.events = [];
    }
    BymfEventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BymfEventsPage');
        this.maevent();
    };
    BymfEventsPage.prototype.maevent = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "events.php")
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.events = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    BymfEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bymf-events',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\bymf-events\bymf-events.html"*/'<ion-header>\n    <ion-navbar style="height:75px;">\n      <button ion-button menuToggle left>\n        <ion-icon name="menu">&nbsp;BYMF Events</ion-icon>\n      </button>\n      <button ion-button menuToggle right>\n        <img src="assets/imgs/logo.jpg" width="75px" height="75px" style="display:inline-block" />\n      </button>\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content>\n    <br><br><br>\n\n    <div *ngIf="this.events.length == 0; else elseBlock">There are no upcoming events. You may need to connect to the internet to view recently added events. </div>\n    <ng-template #elseBlock>\n        <ion-list>\n            <button ion-item *ngFor="let i of events">\n              <!-- <ion-icon name="" item-left>{{i.nothing}}</ion-icon> -->\n                <h2>{{i.event}}</h2>\n                <br>\n                <ion-icon name="calendar">\n                  &nbsp;{{i.dates}}\n                </ion-icon>\n                <br>\n                <ion-icon name="home">&nbsp;{{i.venue}}</ion-icon>\n                <div class="item-note" item-right> \n                </div>\n            </button>\n          </ion-list>\n    </ng-template>\n  </ion-content>\n'/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\bymf-events\bymf-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], BymfEventsPage);
    return BymfEventsPage;
}());

//# sourceMappingURL=bymf-events.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BymfLocatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BymfLocatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BymfLocatorPage = /** @class */ (function () {
    function BymfLocatorPage(navCtrl, navParams, alertCtrl, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
    }
    BymfLocatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BymfLocatorPage');
    };
    //////////////// Bulawayo churches //////////////////////////////////////////////
    BymfLocatorPage.prototype.bethel = function () {
        var alert = this.alertCtrl.create({
            title: "Bethel Baptist Church",
            subTitle: "Contact Kedious 0775560151",
            buttons: ['OK']
        });
        alert.present();
    };
    ////////////////// Harare Churches /////////////////////////////////////////////
    BymfLocatorPage.prototype.calvary = function () {
        var alert = this.alertCtrl.create({
            title: "Calvary Baptist Church",
            subTitle: "Contact Cletous 0775985609",
            buttons: ['OK']
        });
        alert.present();
    };
    /////////////////////// Gweru Churches ////////////////////////////////////////
    BymfLocatorPage.prototype.first = function () {
        var alert = this.alertCtrl.create({
            title: "First Baptist Church, Mkoba",
            subTitle: "Contact Allan - 0778037875",
            buttons: ['OK']
        });
        alert.present();
    };
    BymfLocatorPage.prototype.senga = function () {
        var alert = this.alertCtrl.create({
            title: "Senga Baptist Church",
            subTitle: "Contact Methembe 0771601578",
            buttons: ['OK']
        });
        alert.present();
    };
    ///////////////////// Zvishavane ////////////////////////////////
    BymfLocatorPage.prototype.tsitsi = function () {
        var alert = this.alertCtrl.create({
            title: "Tsitsi Baptist Church",
            subTitle: "Contact Mark 0733117380",
            buttons: ['OK']
        });
        alert.present();
    };
    BymfLocatorPage.prototype.maglass = function () {
        var alert = this.alertCtrl.create({
            title: "Maglass Baptist Church",
            subTitle: "Contact Thomas 0773706129",
            buttons: ['OK']
        });
        alert.present();
    };
    BymfLocatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bymf-locator',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\bymf-locator\bymf-locator.html"*/'<ion-header>\n    <ion-navbar style="height:75px;">\n      <button ion-button menuToggle left>\n        <ion-icon name="menu">&nbsp;BYMF Group Locator</ion-icon>\n      </button>\n      <button ion-button menuToggle right>\n        <img src="assets/imgs/logo.jpg" width="75px" height="75px" style="display:inline-block" />\n      </button>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>  \n    <ion-item-divider color="primary">\n        <ion-label>\n          Bulawayo\n        </ion-label>\n      </ion-item-divider>\n      \n      <!-- Item Dividers in a List -->\n      <ion-list>  \n        <button ion-item (click)="bethel()">\n          <ion-label>Bethel Baptist Church</ion-label>\n        </button>\n      </ion-list>\n  <ion-item-divider color="primary">\n    <ion-label>\n      Harare\n    </ion-label>\n  </ion-item-divider>\n  \n  <!-- Item Dividers in a List -->\n  <ion-list>  \n    <button ion-item (click)="calvary()"><ion-label>Calvary Baptist Church</ion-label></button>\n  </ion-list>\n\n  <ion-item-divider color="primary">\n      <ion-label>\n        Gweru\n      </ion-label>\n    </ion-item-divider>\n    \n    <!-- Item Dividers in a List -->\n    <ion-list>  \n      <button ion-item (click)="first()"><ion-label>First Baptist Church, Mkoba</ion-label></button>\n      <button ion-item (click)="senga()"><ion-label>Senga Baptist Church</ion-label></button>\n    </ion-list>\n    <ion-item-divider color="primary">\n        <ion-label>\n          Zvishavane\n        </ion-label>\n      </ion-item-divider>\n      \n      <!-- Item Dividers in a List -->\n      <ion-list>  \n        <button ion-item (click)="tsitsi()"><ion-label>Tsitsi Baptist Church</ion-label></button>\n        <button ion-item (click)="maglass()"><ion-label>Maglass Baptist Church</ion-label></button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\bymf-locator\bymf-locator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], BymfLocatorPage);
    return BymfLocatorPage;
}());

//# sourceMappingURL=bymf-locator.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BymfManualChapterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BymfManualChapterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BymfManualChapterPage = /** @class */ (function () {
    function BymfManualChapterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
    }
    BymfManualChapterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BymfManualChapterPage');
    };
    BymfManualChapterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bymf-manual-chapter',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\bymf-manual-chapter\bymf-manual-chapter.html"*/'  <ion-header>\n      <ion-navbar>\n        <button menuToggle *ngIf="!selectedItem">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Chapter {{selectedItem.title}} - {{selectedItem.note}}</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n\n  <ion-content>\n      <!-- <h3 text-center *ngIf="selectedItem">\n        Chapter {{selectedItem.title}} - {{selectedItem.note}}\n      </h3> -->\n      <p *ngIf="selectedItem.title == 1">\n          <img src="assets/manual/1/1.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/1/2.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 2">\n          <img src="assets/manual/2/2.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/2/1.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 3">\n          <img src="assets/manual/3/2.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/3/1.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 4">\n          <img src="assets/manual/4/1.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/4/2.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 5">\n          <img src="assets/manual/5/1.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/5/2.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 6">\n          <img src="assets/manual/6/1.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/6/2.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 7">\n          <img src="assets/manual/7/1.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/7/2.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 8">\n          <img src="assets/manual/8/1.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/8/2.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 9">\n          <img src="assets/manual/9/1.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/9/2.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 10">\n          <img src="assets/manual/10/1.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/10/2.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n      <p *ngIf="selectedItem.title == 11">\n          <img src="assets/manual/11/1.jpg" width="100%" height="auto" style="display:inline-block" />\n          <img src="assets/manual/11/2.jpg" width="100%" height="auto" style="display:inline-block" />\n      </p>\n\n\n  </ion-content>>\n'/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\bymf-manual-chapter\bymf-manual-chapter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BymfManualChapterPage);
    return BymfManualChapterPage;
}());

//# sourceMappingURL=bymf-manual-chapter.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BymfManualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bymf_manual_chapter_bymf_manual_chapter__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { BymfManualPage } from '../bymf-manual/bymf-manual';

/**
 * Generated class for the BymfManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BymfManualPage = /** @class */ (function () {
    function BymfManualPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        // for(let i = 1; i < 11; i++) {
        //   this.items.push({
        //     title: 'Item ' + i,
        //     note: 'Chapter' + i,
        //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        //   });
        // }
        this.items = [
            {
                "title": "1",
                "note": "Introduction. BYMF Aims, Membership, etc",
                "icon": "arrow-forward"
            },
            {
                "title": "2",
                "note": "Steps 1 & 2",
                "icon": "arrow-forward"
            },
            {
                "title": "3",
                "note": "Convention EC & its Functions",
                "icon": "arrow-forward"
            },
            {
                "title": "4",
                "note": "The Formation of BCZ",
                "icon": "arrow-forward"
            },
            {
                "title": "5",
                "note": "Christian Family",
                "icon": "arrow-forward"
            },
            {
                "title": "6",
                "note": "First Aid",
                "icon": "arrow-forward"
            },
            {
                "title": "7",
                "note": "Management of Finances",
                "icon": "arrow-forward"
            },
            {
                "title": "8",
                "note": "The youngmen and unemployment",
                "icon": "arrow-forward"
            },
            {
                "title": "9",
                "note": "BWA & AABF",
                "icon": "arrow-forward"
            },
            {
                "title": "10",
                "note": "Project Proposal",
                "icon": "arrow-forward"
            },
            {
                "title": "11",
                "note": "List of Baptist Churches in Zimbabwe",
                "icon": "arrow-forward"
            },
        ];
    }
    BymfManualPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bymf_manual_chapter_bymf_manual_chapter__["a" /* BymfManualChapterPage */], {
            item: item
        });
    };
    BymfManualPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BymfManualPage');
    };
    BymfManualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bymf-manual',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\bymf-manual\bymf-manual.html"*/'<ion-header>\n    <ion-navbar style="height:75px;">\n      <button ion-button menuToggle left>\n        <ion-icon name="menu">&nbsp;BYMF Manual</ion-icon>\n      </button>\n      <button ion-button menuToggle right>\n        <img src="assets/imgs/logo.jpg" width="75px" height="75px" style="display:inline-block" />\n      </button>\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content>\n    <br><br><br>\n      <ion-list>\n        <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n          <ion-icon name="" item-left>{{item.title}}</ion-icon>\n           {{item.note}}\n          <div class="item-note" item-right>\n              <ion-icon name="{{item.icon}}" item-left></ion-icon>\n          </div>\n        </button>\n      </ion-list>\n    </ion-content>\n'/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\bymf-manual\bymf-manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BymfManualPage);
    return BymfManualPage;
}());

//# sourceMappingURL=bymf-manual.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    // verse1: string;
    // english1: string;
    // shona1: string;
    // ndebele1: string; 
    function WelcomePage(global, navCtrl, navParams, http) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.verses = [];
        this.all_verses = [];
        this.pick = Math.floor(Math.random() * 5); //between 0 and 5
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
        this.all_verses = [
            {
                "verse": "1 Timothy 4:12",
                "english": "Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
                "ndebele": "Ungavumeli muntu ukuba akweyise ngenxa yokuthi usakhula, kodwa abakholwayo benzele isibonelo ngokukhuluma, langokuphila, langothando langokukholwa kanye langokuhlambuluka.",
                "shona": "Ngakurege kuva nomunhu anokuzvidza nokuda kwouduku hwako, asi uve muenzaniso kuvatendi mukutaura, muupenyu, murudo, mukutenda uye napakuchena kwomwoyo. ",
            },
            {
                "verse": "Romans 3:23",
                "english": "for all have sinned and fall short of the glory of God",
                "ndebele": "ngoba bonke bonile njalo bayasilela enkazimulweni kaNkulunkulu",
                "shona": "nokuti vose vakatadza uye vakasasvika pakubwinya kwaMwari",
            },
            {
                "verse": "Romans 6:23",
                "english": "For the wages of sin is death, but the gift of God is eternal life in[b] Christ Jesus our Lord.",
                "ndebele": "Ngoba umvuzo wesono yikufa, kodwa isipho sikaNkulunkulu siyikuphila okungapheliyo kuKhristu uJesu iNkosi yethu.",
                "shona": "Nokuti mubayiro wechivi ndirwo rufu, asi chipo chaMwari chokungopiwa ndihwo upenyu husingaperi muna Kristu Jesu Ishe wedu.",
            },
            {
                "verse": "John 3:16",
                "english": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
                "ndebele": "“UNkulunkulu walithanda ilizwe waze wanikela iNdodana yakhe iyiyo yodwa ukuze kuthi loba ngubani okholwa kuyo angabhubhi kodwa abe lokuphila okungapheliyo. ",
                "shona": "“Nokuti Mwari akada nyika nokudaro, kuti akapa Mwanakomana wake mumwe oga, kuti ani naani anotenda kwaari arege kufa asi ave noupenyu husingaperi.",
            },
            {
                "verse": "Ecclesiastes 12:1",
                "english": "Remember your Creator in the days of your youth, before the days of trouble come and the years approach when you will say, 'I find no pleasure in them'",
                "ndebele": "Khumbula uMdali wakho ngezinsuku zobutsha bakho, kungakafiki izinsuku zokuhlupheka njalo kusondele leminyaka lapho ozakuthi, 'Angizuzi kuthokoza kuzo'",
                "shona": "Rangarira Musiki wako pamazuva ouduku hwako, mazuva okutambudzika asati auya, namakore asati aswedera pauchati, 'Handioni zvinofadza maari,'",
            },
            {
                "verse": "Matthew 28:18-20",
                "english": "Then Jesus came to them and said, 'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,  and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.'",
                "ndebele": "UJesu weza kubo wathi, 'Wonke amandla ezulwini lasemhlabeni aphiwe mina. Ngakho hambani lenze abafundi ezizweni zonke, libabhaphathize ebizweni likaBaba, leleNdodana lelikaMoya oNgcwele, njalo libafundise ukulalela konke engililaye ngakho. Ngempela ngilani kokuphela, kuze kube sekucineni kwesikhathi.'",
                "shona": "Ipapo Jesu akasvika pavari akati, 'Simba rose kudenga napanyika rakapiwa kwandiri. Naizvozvo endai mudzidzise ndudzi dzose, muchivabhabhatidza muzita raBaba, neroMwanakomana neroMweya Mutsvene, uye muchivadzidzisa kuti vachengete zvose zvandakakurayirai. Uye zvechokwadi ndinemi kusvikira pakuguma kwenyika.'",
            },
        ];
        this.verses.push(this.all_verses[this.pick]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\welcome\welcome.html"*/'<ion-header>\n  <ion-navbar style="height:75px;">\n    <button ion-button menuToggle left>\n      <ion-icon name="menu">&nbsp;Baptist Young Men\'s Fellowship</ion-icon>\n    </button>\n    <button ion-button menuToggle right>\n      <img src="assets/imgs/logo.jpg" width="75px" height="75px" style="display:inline-block" />\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-content padding> -->\n  <ion-content padding class="card-background-page" >\n    <!-- <ion-card> -->\n      <div class="random-verse" *ngFor="let v of verses">\n        <div class="verse-title">\n          {{v.verse}}\n        </div>\n        <div class="verse-text">\n          {{v.english}}<br><br>\n          {{v.ndebele}}<br><br>\n          {{v.shona}}<br><br>\n        </div>\n      </div>\n      \n  </ion-content>\n<!-- </ion-content> -->\n  \n'/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bymf-contact/bymf-contact.module": [
		285,
		5
	],
	"../pages/bymf-events/bymf-events.module": [
		286,
		4
	],
	"../pages/bymf-locator/bymf-locator.module": [
		287,
		3
	],
	"../pages/bymf-manual-chapter/bymf-manual-chapter.module": [
		288,
		2
	],
	"../pages/bymf-manual/bymf-manual.module": [
		289,
		1
	],
	"../pages/welcome/welcome.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_my_my__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bymf_manual_bymf_manual__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bymf_manual_chapter_bymf_manual_chapter__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bymf_locator_bymf_locator__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bymf_events_bymf_events__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bymf_contact_bymf_contact__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//providers and services and components



//common pages 

//bymf pages





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bymf_manual_bymf_manual__["a" /* BymfManualPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bymf_manual_chapter_bymf_manual_chapter__["a" /* BymfManualChapterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bymf_locator_bymf_locator__["a" /* BymfLocatorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bymf_events_bymf_events__["a" /* BymfEventsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bymf_contact_bymf_contact__["a" /* BymfContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bymf-contact/bymf-contact.module#BymfContactPageModule', name: 'BymfContactPage', segment: 'bymf-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bymf-events/bymf-events.module#BymfEventsPageModule', name: 'BymfEventsPage', segment: 'bymf-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bymf-locator/bymf-locator.module#BymfLocatorPageModule', name: 'BymfLocatorPage', segment: 'bymf-locator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bymf-manual-chapter/bymf-manual-chapter.module#BymfManualChapterPageModule', name: 'BymfManualChapterPage', segment: 'bymf-manual-chapter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bymf-manual/bymf-manual.module#BymfManualPageModule', name: 'BymfManualPage', segment: 'bymf-manual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bymf_manual_bymf_manual__["a" /* BymfManualPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bymf_manual_chapter_bymf_manual_chapter__["a" /* BymfManualChapterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bymf_locator_bymf_locator__["a" /* BymfLocatorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bymf_events_bymf_events__["a" /* BymfEventsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bymf_contact_bymf_contact__["a" /* BymfContactPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_my_my__["a" /* MyProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the MyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MyProvider = /** @class */ (function () {
    function MyProvider(http) {
        this.http = http;
        console.log('Hello MyProvider Provider');
    }
    MyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MyProvider);
    return MyProvider;
}());

//# sourceMappingURL=my.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bymf_manual_bymf_manual__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bymf_locator_bymf_locator__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bymf_events_bymf_events__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bymf_contact_bymf_contact__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//angular components 



//ionic components 

//ionic angular components

//providers and services

//common pages 

//bymf pages




var MyApp = /** @class */ (function () {
    function MyApp(global, platform, menu, statusBar, splashScreen, alertCtrl, toastCtrl, storage) {
        var _this = this;
        this.global = global;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        platform.ready().then(function () {
            statusBar.styleDefault();
            _this.storage.ready().then(function () {
                _this.storage.get('serverAddress').then(function (val) {
                    _this.setServerAddress(val);
                });
                _this.storage.get('role').then(function (val) {
                    _this.setRole(val);
                });
                _this.storage.get('session').then(function (val) {
                    _this.setAccount(val);
                });
            });
            splashScreen.hide();
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.setAccount = function (val) {
        this.global.session = val;
        console.log(this.global.session);
        this.pages = [
            { title: 'Manual', component: __WEBPACK_IMPORTED_MODULE_7__pages_bymf_manual_bymf_manual__["a" /* BymfManualPage */] },
            { title: 'Church Locator', component: __WEBPACK_IMPORTED_MODULE_8__pages_bymf_locator_bymf_locator__["a" /* BymfLocatorPage */] },
            { title: 'Events Timeline', component: __WEBPACK_IMPORTED_MODULE_9__pages_bymf_events_bymf_events__["a" /* BymfEventsPage */] },
            { title: 'Contact', component: __WEBPACK_IMPORTED_MODULE_10__pages_bymf_contact_bymf_contact__["a" /* BymfContactPage */] },
        ];
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */]);
    };
    MyApp.prototype.setRole = function (val) {
        this.global.role = val; //determine the correct 
    };
    MyApp.prototype.setServerAddress = function (val) {
        this.global.serverAddress = "http://bymf.org.zw/api/";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", Object)
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>BYMF</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Pastel18\Install\bymf\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map