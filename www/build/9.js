webpackJsonp([9],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsFeesFeedbackPageModule", function() { return PatientsFeesFeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patients_fees_feedback__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientsFeesFeedbackPageModule = /** @class */ (function () {
    function PatientsFeesFeedbackPageModule() {
    }
    PatientsFeesFeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patients_fees_feedback__["a" /* PatientsFeesFeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patients_fees_feedback__["a" /* PatientsFeesFeedbackPage */]),
            ],
        })
    ], PatientsFeesFeedbackPageModule);
    return PatientsFeesFeedbackPageModule;
}());

//# sourceMappingURL=patients-fees-feedback.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsFeesFeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientsFeesFeedbackPage = /** @class */ (function () {
    function PatientsFeesFeedbackPage(global, navCtrl, navParams, formBuilder, http, alertCtrl, toastCtrl) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.exs = [];
        this.exe = {
            institution: "",
            service: "",
            amount: "",
            patient: this.global.session
        };
    }
    PatientsFeesFeedbackPage_1 = PatientsFeesFeedbackPage;
    PatientsFeesFeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientsFeesFeedbackPage');
        this.expenses();
    };
    PatientsFeesFeedbackPage.prototype.expenses = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "expenses.php?id=0&patient=" + this.global.session)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.exs = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    PatientsFeesFeedbackPage.prototype.addExpense = function () {
        var _this = this;
        this.http.post(this.global.serverAddress + "expenses-add.php", JSON.stringify(this.exe))
            .subscribe(function (data) {
            console.log(data["_body"]);
            var response = JSON.parse(data["_body"]);
            if (response.response == "success") {
                // let toast = this.toastCtrl.create({
                //   message: 'Expense successfully recorded. You should also go with the receipts to the institution that registered you so that the expenses can be approved',
                //   duration: 6000,
                //   position: 'top',
                //   cssClass: 'dark-trans',
                //   closeButtonText: 'OK',
                //   showCloseButton: true
                // });
                // toast.present();
                var toast = _this.toastCtrl.create({
                    message: 'Expense successfully recorded. You should also go with the receipts to the institution that registered you so that the expenses can be approved',
                    duration: 6000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
                _this.navCtrl.setRoot(PatientsFeesFeedbackPage_1);
            }
            else {
                // let alert = this.alertCtrl.create({
                //   title: 'Error',
                //   subTitle: 'Ooh sorry, Your donation could not be recorded at this time, Please try again!',
                //   buttons: ['Try Again']
                // });
                // alert.present();
                var toast = _this.toastCtrl.create({
                    message: 'Ooh sorry, Your donation could not be recorded at this time, Please try again!',
                    duration: 6000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            }
        }, function (error) {
            // let alert = this.alertCtrl.create({
            //   title: 'Signup Error',
            //   subTitle: "Network error. Make sure you are connected to the internet",
            //   buttons: ['Try Again']
            // });
            // alert.present();
            var toast = _this.toastCtrl.create({
                message: 'Network error. Make sure you are connected to the internet',
                duration: 6000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        });
    };
    PatientsFeesFeedbackPage = PatientsFeesFeedbackPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patients-fees-feedback',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\patients-fees-feedback\patients-fees-feedback.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>MoHCC Funding Application ({{this.global.role}}s section)</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <!-- <p class="instructions">Good day, here are the latest patients appealing for help. You can click on a patient to view their needs and more patient details</p> -->\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 style="margin-left: auto;margin-right: auto;display: block;text-align:center;">\n              <h1>Expenses Feedback</h1>\n              <div class="row header">\n                  <div class="col">Institution</div>\n                  <div class="col">Service Done</div>\n                  <div class="col">Amount</div>\n                  <div class="col">Approved</div>\n                </div>\n\n                <div class="row" *ngFor="let p of exs">\n                  <div class="col">{{p.institution}}</div>\n                  <div class="col">{{p.service}}</div>\n                  <div class="col">{{p.amount}}</div>\n                  <div class="col">\n                      <div *ngIf="p.approved == 1; else elseBlock">Yes</div>\n                      <ng-template #elseBlock>Not Yet</ng-template>\n                  </div>\n                </div>\n                \n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12 style="margin-left: auto;margin-right: auto;display: block;text-align:center;">\n              <h1>Add Expense</h1>\n              <form (submit)="addExpense()" >\n                  <ion-list>\n            \n                    <ion-item>\n                        <ion-label floating>Institution</ion-label>\n                        <ion-input type="text" name="institution" [(ngModel)]="exe.institution"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label floating>Service</ion-label>\n                      <ion-input type="text" name="note" [(ngModel)]="exe.service"></ion-input> \n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label floating>Amount Paid</ion-label>\n                      <ion-input type="number" min="1" step="0.01" name="amount" [(ngModel)]="exe.amount"></ion-input> <!-- [(ngModel)]="account.password" -->\n                    </ion-item>\n\n                    <div padding>\n                      <button ion-button color="secondary" block>Add Expenses</button>\n                    </div>\n              \n                  </ion-list>\n                </form>\n\n            </ion-col>\n        </ion-row>\n        </ion-grid>\n  </ion-content>  '/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\patients-fees-feedback\patients-fees-feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], PatientsFeesFeedbackPage);
    return PatientsFeesFeedbackPage;
    var PatientsFeesFeedbackPage_1;
}());

//# sourceMappingURL=patients-fees-feedback.js.map

/***/ })

});
//# sourceMappingURL=9.js.map