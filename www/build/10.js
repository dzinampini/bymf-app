webpackJsonp([10],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorsProfilePageModule", function() { return DonorsProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donors_profile__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonorsProfilePageModule = /** @class */ (function () {
    function DonorsProfilePageModule() {
    }
    DonorsProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donors_profile__["a" /* DonorsProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donors_profile__["a" /* DonorsProfilePage */]),
            ],
        })
    ], DonorsProfilePageModule);
    return DonorsProfilePageModule;
}());

//# sourceMappingURL=donors-profile.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonorsProfilePage; });
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





// import { DonorsProfilePage } from '../donors-profile/donors-profile';
/**
 * Generated class for the DonorsProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonorsProfilePage = /** @class */ (function () {
    function DonorsProfilePage(global, navCtrl, navParams, http, formBuilder, alertCtrl, toastCtrl) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.ds = []; //donors
        this.profile = {
            id: this.global.session,
            first_name: "",
            surname: "",
            nat_id: "",
            phone: "",
        };
        this.passwords = {
            id: this.global.session,
            // old:"",
            // old2:"",
            new1: "",
            new2: "",
        };
        this.donors();
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
            "old_password": [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[12341234]{8}')],
        };
        this.profileData = this.formBuilder.group({
            id: [this.global.session, validators.db_int],
            first_name: ['', validators.name],
            surname: ['', validators.name],
            nat_id: ['', validators.nat_id],
            phone: ['', validators.phone],
            form: ['']
        });
        this.passwordData = this.formBuilder.group({
            // old: ['',],
            // old2: ['',],
            new1: ['', validators.password],
            new2: [''],
            form: ['']
        }, { validator: this.checkPasswords });
    }
    DonorsProfilePage_1 = DonorsProfilePage;
    DonorsProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorsProfilePage');
    };
    DonorsProfilePage.prototype.checkPasswords = function (group) {
        var pass = group.get('new1').value;
        var confirmPass = group.get('new2').value;
        return pass === confirmPass ? null : { notSame: true };
    };
    DonorsProfilePage.prototype.checkAllPasswords = function (group) {
        var pass = group.get('old').value;
        var confirmPass = group.get('old2').value;
        if (pass === confirmPass) {
            var pass2 = group.get('new1').value;
            var confirmPass2 = group.get('new2').value;
            return pass2 === confirmPass2 ? null : { newNotSame: true };
        }
        else {
            return "oldWrong";
        }
        // return pass === confirmPass ? null : { notSame: true }     
    };
    DonorsProfilePage.prototype.donors = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + "donors.php?id=" + this.global.session)
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.ds = JSON.parse(data["_body"]);
        }, function (error) {
            console.log("failed");
        });
    };
    DonorsProfilePage.prototype.updateProfile = function () {
        var _this = this;
        this.http.post(this.global.serverAddress + "donors/_update-account.php", JSON.stringify(this.profileData.value))
            .subscribe(function (data) {
            console.log(data["_body"]);
            var response = JSON.parse(data["_body"]);
            if (response.response == "success") {
                var toast = _this.toastCtrl.create({
                    message: 'Account successfully updated',
                    duration: 6000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
                _this.navCtrl.setRoot(DonorsProfilePage_1);
            }
            else {
                // let alert = this.alertCtrl.create({
                //   title: 'Error',
                //   subTitle: 'Ooh sorry! Your account could not be updated now. Please try again',
                //   buttons: ['Try Again']
                // });
                // alert.present();
                var toast = _this.toastCtrl.create({
                    message: 'Ooh sorry! Your account could not be updated now. Please try again',
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
    DonorsProfilePage.prototype.updatePassword = function () {
        var _this = this;
        this.http.post(this.global.serverAddress + "donors/_update-password.php", JSON.stringify(this.passwords))
            .subscribe(function (data) {
            console.log(data["_body"]);
            var response = JSON.parse(data["_body"]);
            if (response.response == "success") {
                var toast = _this.toastCtrl.create({
                    message: 'Your password has been changed!',
                    duration: 6000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
                _this.navCtrl.setRoot(DonorsProfilePage_1);
            }
            else {
                // let alert = this.alertCtrl.create({
                //   title: 'Error',
                //   subTitle: 'Ooh sorry, Your password could not be changed now, please try again',
                //   buttons: ['Try Again']
                // });
                // alert.present();
                var toast = _this.toastCtrl.create({
                    message: 'Ooh sorry, Your password could not be changed now, please try again',
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
    DonorsProfilePage = DonorsProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donors-profile',template:/*ion-inline-start:"C:\Pastel18\Install\bymf\src\pages\donors-profile\donors-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MoHCC Funding Application ({{this.global.role}}s section) </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngFor="let p of ds" padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 style="margin-left: auto;margin-right: auto;display: block;text-align:center;">\n          <h1>My Account Details</h1>\n          <form (submit)="updateProfile()" [formGroup]="profileData">\n            <ion-list>\n              <ion-item>\n                <ion-label>First Name</ion-label>\n                <ion-input value="{{p.first_name}}" formControlName="first_name"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Surname</ion-label>\n                <ion-input value="{{p.surname}}" formControlName="surname"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>National ID</ion-label>\n                <ion-input value="{{p.nat_id}}" formControlName="nat_id" readonly="true"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Phone</ion-label>\n                <ion-input value="{{p.phone}}" formControlName="phone"></ion-input>\n              </ion-item>\n      \n            </ion-list>\n\n            <ion-item>\n              <div class="errors">\n                  <p *ngIf="profileData.controls[\'first_name\'].errors" class="danger">First name is required and must be above 2 characters and less than 15 characters</p>\n                  <p *ngIf="profileData.controls[\'surname\'].errors" class="danger">Surname is required and must be above 2 characters and less than 15 characters</p>\n                  <p *ngIf="profileData.controls[\'nat_id\'].errors" class="danger">A national ID is required and must be valid. </p>\n                  <p *ngIf="profileData.controls[\'phone\'].errors" class="danger">Enter a valid phone number </p>\n                  <!-- <p *ngIf="formData.controls[\'password\'].errors" class="danger">A password is required and it must be between 8 nd 12 characters</p> -->\n                </div>\n          </ion-item>\n        \n            <div padding>\n              <button ion-button color="secondary" [disabled]="!profileData.valid" block>Update Profile</button>\n            </div>\n          </form>\n      </ion-col>\n    </ion-row>\n\n    <br><br>\n    <ion-row>\n      <ion-col col-12 style="margin-left: auto;margin-right: auto;display: block;text-align:center;">\n          <h1>Update Password</h1>\n          <form (submit)="updatePassword()" [formGroup]="passwordData">\n            <ion-list>     \n                <!-- <ion-item>\n                    <ion-label>Old Password</ion-label>\n                    <ion-input [(ngModel)]="passwords.old" formControlName="old" type="password"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label>Old Password 2</ion-label>\n                      <ion-input [(ngModel)]="passwords.old2" formControlName="old2" type="password"></ion-input>\n                    </ion-item> -->\n                  <ion-item>\n                      <ion-label>New Password</ion-label>\n                      <ion-input [(ngModel)]="passwords.new1" formControlName="new1" type="password"></ion-input>\n                    </ion-item>\n\n              <ion-item>\n                <ion-label>Confirm Password</ion-label>\n                <ion-input [(ngModel)]="passwords.new2" formControlName="new2" type="password"></ion-input>\n              </ion-item>\n            </ion-list>\n\n            <ion-item>\n              <div class="errors">\n                <!-- <p *ngIf="passwordData.controls[\'old\'].errors" class="danger">Enter correct old password</p> -->\n                <p *ngIf="passwordData.controls[\'new1\'].errors" class="danger">The new password must be between 8 nd 12 characters</p>\n                <!-- <p *ngIf="passwordData.controls[\'new2\'].errors" class="danger">Your new passwords do not match</p> -->\n                <p *ngIf="passwordData.hasError(\'notSame\')" class="danger">Your new passwords do not match</p>\n             \n              </div>\n          </ion-item>\n        \n            <div padding>\n              <button ion-button color="secondary" [disabled]="!passwordData.valid" block>Update Profile</button>\n            </div>\n          </form>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Pastel18\Install\bymf\src\pages\donors-profile\donors-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], DonorsProfilePage);
    return DonorsProfilePage;
    var DonorsProfilePage_1;
}());

//# sourceMappingURL=donors-profile.js.map

/***/ })

});
//# sourceMappingURL=10.js.map