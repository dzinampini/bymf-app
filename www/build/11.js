webpackJsonp([11],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorsPatientPageModule", function() { return DonorsPatientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donors_patient__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonorsPatientPageModule = /** @class */ (function () {
    function DonorsPatientPageModule() {
    }
    DonorsPatientPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donors_patient__["a" /* DonorsPatientPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donors_patient__["a" /* DonorsPatientPage */]),
            ],
        })
    ], DonorsPatientPageModule);
    return DonorsPatientPageModule;
}());

//# sourceMappingURL=donors-patient.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonorsPatientPage; });
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





// import { DonorsPatientPage } from '../donors-patient/donors-patient'; //no page we will head to so yeah
var DonorsPatientPage = /** @class */ (function () {
    function DonorsPatientPage(global, navCtrl, navParams, formBuilder, http, alertCtrl, toastCtrl) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.fs = ""; //fees needs 
        this.dfs = []; //donated fees 
        this.os = []; //organ needs
        this.dos = []; //donated organs
        this.ps = [];
        this.cas = [];
        this.cas_length = 0;
        this.exs = [];
        this.cos = [];
        this.search = {
            city: "",
        };
        this.fd = {
            donation: 0,
            donor: this.global.session,
            patient: this.navParams.get("id"),
            amount: 0,
            proof: ""
        };
        this.od = {
            donation: "",
            donor: this.global.session,
            patient: this.navParams.get("id"),
            note: ""
        };
        this.id = this.navParams.get("id");
        var validators = {
            "phone": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern("[0-9]{9}")],
            "db_int": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern("[0-9]{1,5}")],
            "money": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].max(99999)],
            "company": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(2)],
            "fullname": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern("[A-Za-z \s]{5,30}")],
            "name": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern("[A-Za-z\s]{2,15}")],
            "email": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")],
            "reg_number": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            "nat_id": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern("[0-9]{8,9}[A-Z]{1}[0-9]{2}")],
            // "nat_id":[Validators.required,Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")],
            "surname": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern("[A-Za-z\s]{2,15}")],
            "address": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10)],
            "password": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(12)],
            "text": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(256)],
            "username": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(10)],
        };
        this.formData = this.formBuilder.group({
            amount: ['', validators.money],
            proof: ['', validators.text],
            form: ['']
        });
        this.formDataForOrganDonation = this.formBuilder.group({
            note: ['', validators.text],
            donation: ['', validators.db_int],
            form: ['']
        });
    }
    DonorsPatientPage_1 = DonorsPatientPage;
    DonorsPatientPage.prototype.patients = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "patients.php?id=" + this.id)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.ps = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    DonorsPatientPage.prototype.organNeeds = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "funding-needs-organs.php?id=0&patient=" + this.id)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.os = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    DonorsPatientPage.prototype.feesNeeds = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "funding-needs-fees.php?id=0&patient=" + this.id)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.fs = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    DonorsPatientPage.prototype.donatedOrgans = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "donations-organs.php?id=0&donor=0&patient=" + this.id)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.dos = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    DonorsPatientPage.prototype.donatedFees = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "donations-fees.php?id=0&donor=0&patient=" + this.id)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.dfs = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    DonorsPatientPage.prototype.campaigns = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "campaigns.php?id=0&donor=" + this.global.session + "&patient=" + this.id)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.cas = JSON.parse(data["_body"]);
            _this.cas_length = _this.cas.length;
        }, function (error) {
            console.log("failed");
        });
    };
    DonorsPatientPage.prototype.expenses = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "expenses.php?id=0&patient=" + this.id)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.exs = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    DonorsPatientPage.prototype.courts = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "courts.php?id=0&donor=0&patient=" + this.id)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.cos = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    DonorsPatientPage.prototype.shareCampaign = function (item, id) {
        // this.navCtrl.push(DonorsPatientPage, {'id':id});
    };
    DonorsPatientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorsPatientPage');
        this.patients();
        this.feesNeeds();
        this.organNeeds();
        this.donatedFees();
        this.donatedOrgans();
        this.campaigns();
        this.expenses();
        this.courts();
    };
    DonorsPatientPage.prototype.donateFees = function () {
        var _this = this;
        this.http.post(this.global.serverAddress + "donations-fees-add.php", JSON.stringify(this.fd))
            .subscribe(function (data) {
            console.log(data["_body"]);
            var response = JSON.parse(data["_body"]);
            if (response.response == "success") {
                var toast = _this.toastCtrl.create({
                    message: 'Thank you very much for your donation!',
                    duration: 6000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
                _this.navCtrl.push(DonorsPatientPage_1, { 'id': _this.id });
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
    DonorsPatientPage.prototype.donateOrgan = function () {
        var _this = this;
        this.http.post(this.global.serverAddress + "donations-organs-add.php", JSON.stringify(this.od))
            .subscribe(function (data) {
            console.log(data["_body"]);
            var response = JSON.parse(data["_body"]);
            if (response.response == "success") {
                var toast = _this.toastCtrl.create({
                    message: 'Thank you very much for your donation! The patient shall be in touch',
                    duration: 6000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
                _this.navCtrl.push(DonorsPatientPage_1, { 'id': _this.id });
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
    DonorsPatientPage = DonorsPatientPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donors-patient',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\donors-patient\donors-patient.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Patient Details</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <!-- <p class="instructions">Good day, here are the latest patients appealing for help. You can click on a patient to view their needs and more patient details</p> -->\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12 style="margin-left: auto;margin-right: auto;display: block;text-align:center;">\n            <ion-list>\n                <button ion-item *ngFor="let p of ps" #item (click)="viewMore(item,p.id)">\n                  <ion-thumbnail item-start>\n                    <img src="{{global.serverAddress}}uploads/pictures/{{p.picture}}">\n                  </ion-thumbnail>\n                  <h2>{{p.first_name}} {{p.surname}} - {{p.mi_name}}</h2>\n                  <span class="job-city">{{p.disease}}</span>\n                  <br>\n                  <span class="job-city">{{p.description}}</span>\n                </button>\n              </ion-list>\n          </ion-col>\n        </ion-row>\n\n          <ion-row>\n            <ion-col col-12 style="margin-left: auto;margin-right: auto;display: block;text-align:center;">\n              <h1>Fees Needs</h1>\n              <ion-list>\n                  <button ion-item *ngFor="let p of fs" #item (click)="viewMore(item,p.id)">\n                    <h2><b>ZWL${{p.amount}} </b></h2>\n                    <span class="job-city">{{p.note}}</span>\n                    <br>\n                  </button>\n                </ion-list>\n\n                <h1>Fees Donations</h1>\n                <div class="row header">\n                  <div class="col">Donor</div>\n                  <div class="col">Amount</div>\n                  <div class="col">Received</div>\n                </div>\n\n                <div class="row" *ngFor="let p of dfs">\n                  <div class="col">{{p.donor_name}}</div>\n                  <div class="col">ZWL${{p.amount}}</div>\n                  <div class="col">\n                      <div *ngIf="p.received == 1; else elseBlock">Yes</div>\n                      <ng-template #elseBlock>Not Yet</ng-template>\n                  </div>\n                </div>\n\n                <h1>Donate Fees</h1>\n                <form (submit)="donateFees()" [formGroup]="formData">\n                  <ion-list>\n            \n                    <ion-item>\n                      <ion-label floating>Amount</ion-label>\n                      <ion-input type="number" formControlName="amount" [(ngModel)]="fd.amount" ></ion-input> <!-- [(ngModel)]="account.password" -->\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label floating>Proof of Payment (Specify platform name and transaction ID )</ion-label>\n                      <ion-input type="text" formControlName="proof" [(ngModel)]="fd.proof"></ion-input> <!-- [(ngModel)]="account.password" -->\n                    </ion-item>\n              \n                    <div padding>\n                      <button ion-button color="secondary" [disabled]="!formData.valid" block>Donate</button>\n                    </div>\n\n                    <ion-item>\n                      <div class="errors">\n                          <p *ngIf="formData.controls[\'amount\'].errors" class="danger">The donated amount is required</p>\n                          <p *ngIf="formData.controls[\'proof\'].errors" class="danger">Payment details are required</p>\n                        </div>\n                    </ion-item>\n              \n                  </ion-list>\n                </form>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 style="margin-left: auto;margin-right: auto;display: block;text-align:center;">\n              <h1>Organ Needs</h1>\n                <ion-list>\n                    <button ion-item *ngFor="let p of os" #item (click)="viewMore(item,p.id)">\n                      <h2><b>{{p.organ}}</b></h2>\n                      <span class="job-city">{{p.specs}}</span>\n                      <br>\n                    </button>\n                  </ion-list>\n                  <h1>Organ Donations</h1>\n                  <div class="row header">\n                      <div class="col">Donor</div>\n                      <div class="col">Note</div>\n                      <div class="col">Received</div>\n                    </div>\n    \n                    <div class="row" *ngFor="let p of dos">\n                      <div class="col">{{p.donor_name}}</div>\n                      <div class="col">{{p.note}}</div>\n                      <div class="col">\n                          <div *ngIf="p.received == 1; else elseBlock">Yes</div>\n                          <ng-template #elseBlock>Not Yet</ng-template>\n                      </div>\n                    </div>\n\n                     <div> <!--*ngIf="this.os.count > 0"-->\n                      <form (submit)="donateOrgan()" [formGroup]="formDataForOrganDonation">\n                        <ion-list>\n                  \n                          <ion-item>\n                              <ion-label floating>Organ</ion-label>\n                              <ion-select cancelText="Cancel" okText="Select" formControlName="donation" [(ngModel)]="od.donation"> <!--  -->\n                                <ion-option *ngFor="let b of os" value="{{b.id}}">{{b.organ}}</ion-option>\n                              </ion-select>\n                          </ion-item>\n      \n                          <ion-item>\n                            <ion-label floating>Notes</ion-label>\n                            <ion-input type="text" formControlName="note" [(ngModel)]="od.note"></ion-input> <!-- [(ngModel)]="account.password" -->\n                          </ion-item>\n                    \n                          <div padding>\n                            <button ion-button color="secondary" [disabled]="!formDataForOrganDonation.valid" block>Donate</button>\n                          </div>\n      \n                          <ion-item>\n                            <div class="errors">\n                                <p *ngIf="formDataForOrganDonation.controls[\'donation\'].errors" class="danger">Select at least one organ to donate</p>\n                                <p *ngIf="formDataForOrganDonation.controls[\'note\'].errors" class="danger">Donation details are required</p>\n                              </div>\n                          </ion-item>\n                    \n                        </ion-list>\n                      </form>\n                    </div>\n              </ion-col>\n          </ion-row>\n\n\n              <ion-row>\n                  <ion-col col-12 style="margin-left: auto;margin-right: auto;display: block;text-align:center;">\n                      <h1>Campaigns</h1>\n                    <p>Through campaigns, you can get more people who are not on this application getting involved in helping this patient. Share it with your fans, family and friends on any platform of your choice for example Facebook, Twitter, Instagram, YouTube and Sasai. You can share your campaigns using the following platforms and when your followers click on it, and donate, the donation will appear as if its coming from you. Copy link below</p>\n                    <p>Copy this link and share your posts with this campaign: </p>\n                    <!-- <div *ngIf="this.cas.length > 0; else elseBlock"> -->\n                        \n                      <p class="header">{{this.global.serverAddress}}campaign-response.php?donor={{this.global.session}}&patient={{this.id}}</p>\n                      <!-- </div>\n                      <ng-template #elseBlock>\n                        Create Campaign\n                      </ng-template> -->\n                  </ion-col>\n              </ion-row>\n\n              <ion-row>\n                  <ion-col col-12 style="margin-left: auto;margin-right: auto;display: block;text-align:center;">\n                    <h1>Expenses Feedback</h1>\n                    <div class="row header">\n                        <div class="col">Institution</div>\n                        <div class="col">Service Done</div>\n                        <div class="col">Amount</div>\n                        <div class="col">Approved</div>\n                      </div>\n\n                      <div class="row" *ngFor="let p of exs">\n                        <div class="col">{{p.institution}}</div>\n                        <div class="col">{{p.service}}</div>\n                        <div class="col">{{p.amount}}</div>\n                        <div class="col">\n                            <div *ngIf="p.approved == 1; else elseBlock">Yes</div>\n                            <ng-template #elseBlock>Not Yet</ng-template>\n                        </div>\n                      </div>\n\n                      <!-- <div *ngIf="this.cos.length > 0">\n                        <div *ngFor="let p of cos">\n                            <p>Raised By - {{p.donor_name}}, Datetime - {{p.dt}}</p>\n                            <p><b>{{p.court}}</b></p>\n                            <p>{{p.updates}}</p>\n                        </div>                        \n                      </div> -->\n                      \n                  </ion-col>\n              </ion-row>\n      </ion-grid>\n  </ion-content>  '/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\donors-patient\donors-patient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], DonorsPatientPage);
    return DonorsPatientPage;
    var DonorsPatientPage_1;
}());

//# sourceMappingURL=donors-patient.js.map

/***/ })

});
//# sourceMappingURL=11.js.map