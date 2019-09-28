import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { GlobalProvider } from "../../providers/global/global";

import { DonorsPatientsPage } from '../donors-patients/donors-patients';
import { DonorsRegisterPage } from '../donors-register/donors-register';

@IonicPage()
@Component({
  selector: 'page-donors-login',
  templateUrl: 'donors-login.html',
})
export class DonorsLoginPage {
  credentials = {
    emairi: "",
    password: ""
  };

  constructor(
    public loadingCtrl:LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http,
    public toastCtrl: ToastController,
    private storage: Storage,
    public global:GlobalProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsLoginPage');
  }

  register() {
    this.navCtrl.push(DonorsRegisterPage);
  }

  login() {
    this.http.post(this.global.serverAddress+"donors/_login.php", JSON.stringify(this.credentials))
      .subscribe(data => {
        console.log(data["_body"]);
        let response=JSON.parse(data["_body"]);


        if(response.response=="success"){
          this.storage.set("session",response.user_id);
          this.storage.set("role","donor");
          this.global.session=response.user_id; 
          this.global.role="donor"; 
          this.navCtrl.setRoot(DonorsPatientsPage);
        }

        else{
          // let alert = this.alertCtrl.create({
          //   title: 'Login Error',
          //   subTitle: 'Wrong Password. Enter Correct Password!',
          //   buttons: ['OK']
          // });
          // alert.present();
          let toast = this.toastCtrl.create({
            message: 'Wrong Password. Enter Correct Password!',
            duration: 6000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
          });
          toast.present();
        }
      }, error => {
        // let alert = this.alertCtrl.create({
        //   title: 'Login Error',
        //   subTitle: 'Network Error! Verify your internet connection is working properly and then try again',
        //   buttons: ['OK']
        // });
        // alert.present();
        let toast = this.toastCtrl.create({
          message: 'Network Error! Verify your internet connection is working properly and then try again',
          duration: 6000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
      }
    );
}

}
