import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { GlobalProvider } from "../../providers/global/global";

import { PatientsDonationsPage } from '../patients-donations/patients-donations';

@IonicPage()
@Component({
  selector: 'page-patients-login',
  templateUrl: 'patients-login.html',
})
export class PatientsLoginPage {
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
    console.log('ionViewDidLoad PatientsLoginPage');
  }

  login() {
    this.http.post(this.global.serverAddress+"patients/_login.php", JSON.stringify(this.credentials))
      .subscribe(data => {
        console.log(data["_body"]);
        let response=JSON.parse(data["_body"]);

        if(response.response=="success"){
          this.storage.set("session",response.user_id);
          this.global.session=response.user_id; 

          this.storage.set("role","patient");
          this.global.role="patient"; 

          this.navCtrl.setRoot(PatientsDonationsPage);

          // this.storage.set("session",response.user_id);
          // this.global.session=response.user_id; 

          // this.storage.set("role", "donor"); 
          // this.global.role="donor";
        }

        else{
          let alert = this.alertCtrl.create({
            title: 'Login Error',
            subTitle: 'Wrong Password. Enter Correct Password!',
            buttons: ['OK']
          });
          alert.present();
        }
      }, error => {
        let alert = this.alertCtrl.create({
          title: 'Login Error',
          subTitle: 'Network Error! Verify your internet connection is working properly and then try again',
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

}
