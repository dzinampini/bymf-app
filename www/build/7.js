webpackJsonp([7],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsMessagesPageModule", function() { return PatientsMessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patients_messages__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientsMessagesPageModule = /** @class */ (function () {
    function PatientsMessagesPageModule() {
    }
    PatientsMessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patients_messages__["a" /* PatientsMessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patients_messages__["a" /* PatientsMessagesPage */]),
            ],
        })
    ], PatientsMessagesPageModule);
    return PatientsMessagesPageModule;
}());

//# sourceMappingURL=patients-messages.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsMessagesPage; });
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
 * Generated class for the PatientsMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientsMessagesPage = /** @class */ (function () {
    function PatientsMessagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PatientsMessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientsMessagesPage');
    };
    PatientsMessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patients-messages',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\patients-messages\patients-messages.html"*/'<!--\n  Generated template for the PatientsMessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>patients-messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\patients-messages\patients-messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PatientsMessagesPage);
    return PatientsMessagesPage;
}());

//# sourceMappingURL=patients-messages.js.map

/***/ })

});
//# sourceMappingURL=7.js.map