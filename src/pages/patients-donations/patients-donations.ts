import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, ToastController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalProvider } from "../../providers/global/global";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DonorsPatientPage } from '../donors-patient/donors-patient';

@IonicPage()
@Component({
  selector: 'page-patients-donations',
  templateUrl: 'patients-donations.html',
})
export class PatientsDonationsPage {
  fs = ""; //fees needs 
  dfs = []; //donated fees 
  os = []; //organ needs
  dos = []; //donated organs

  fd = {
    id: "",
  };

  od = {
    id: "",
  };

  private feesData: FormGroup;
  private organData: FormGroup;

  constructor(
    public global:GlobalProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
  ) {
    var validators={
      "phone":[Validators.required,Validators.pattern("[0-9]{9}")],
      "db_int":[Validators.required,Validators.pattern("[0-9]{1,5}")], 
      "money":[Validators.required,Validators.min(1),Validators.max(99999)], 
      "company":[Validators.required,Validators.maxLength(15),Validators.minLength(2)],
      "fullname":[Validators.required,Validators.pattern("[A-Za-z \s]{5,30}")],
      "name":[Validators.required,Validators.pattern("[A-Za-z\s]{2,15}")],
      "email":[Validators.required,Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")],
      "reg_number":[Validators.required],
      "nat_id":[Validators.required,Validators.pattern("[0-9]{8,9}[A-Z]{1}[0-9]{2}")],
      // "nat_id":[Validators.required,Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")],
      "surname":[Validators.required,Validators.pattern("[A-Za-z\s]{2,15}")],
      "address":[Validators.required,Validators.maxLength(100),Validators.minLength(10)],
      "password":[Validators.required,Validators.minLength(8),Validators.maxLength(12)],
      "text":[Validators.required,Validators.minLength(9),Validators.maxLength(256)],
      "username":[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)],
      "old_password":[Validators.required, Validators.pattern('[12341234]{8}')],
    };
    this.feesData=this.formBuilder.group({
      id: ['', validators.db_int],
      form: ['']
    });
    this.organData=this.formBuilder.group({
      id: ['', validators.db_int],
      form: ['']
    });
  }

  organNeeds() {
    this.http.get(this.global.serverAddress+"funding-needs-organs.php?id=0&patient="+this.global.session) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.os=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  feesNeeds() {
    this.http.get(this.global.serverAddress+"funding-needs-fees.php?id=0&patient="+this.global.session) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.fs=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  donatedOrgans() {
    this.http.get(this.global.serverAddress+"donations-organs.php?id=0&donor=0&patient="+this.global.session) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.dos=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  donatedFees() {
    this.http.get(this.global.serverAddress+"donations-fees.php?id=0&donor=0&patient="+this.global.session) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.dfs=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  viewMore(item: ItemSliding,id: string) {
    this.navCtrl.push(DonorsPatientPage, {'id':id});
  }

  confirmFees(item: ItemSliding,id: string){
       
    this.http.post(this.global.serverAddress+"donations-fees-confirm.php", JSON.stringify(this.feesData.value))
    .subscribe(data => {
      console.log(data["_body"]);
      let response=JSON.parse(data["_body"]);
      if(response.response=="success"){
        let toast = this.toastCtrl.create({
          message: 'Thank you for confirming the donation!',
          duration: 6000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
        this.navCtrl.setRoot(PatientsDonationsPage);
      }else{
        // let alert = this.alertCtrl.create({
        //   title: 'Error',
        //   subTitle: 'Ooh sorry, The confirmation could not be recorded at this time, Please try again!',
        //   buttons: ['Try Again']
        // });
        // alert.present();
        let toast = this.toastCtrl.create({
          message: 'Ooh sorry, The confirmation could not be recorded at this time, Please try again!',
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
      //   title: 'Signup Error',
      //   subTitle: "Network error. Make sure you are connected to the internet",
      //   buttons: ['Try Again']
      // });
      // alert.present();
      let toast = this.toastCtrl.create({
        message: 'Network error. Make sure you are connected to the internet',
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

  confirmOrgan(){   
    this.http.post(this.global.serverAddress+"donations-organs-confirm.php", JSON.stringify(this.organData.value))
    .subscribe(data => {
      console.log(data["_body"]);
      let response=JSON.parse(data["_body"]);
      if(response.response=="success"){
        let toast = this.toastCtrl.create({
          message: 'Thank you for confirming the donation!',
          duration: 6000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
        this.navCtrl.setRoot(PatientsDonationsPage);
      }else{
        // let alert = this.alertCtrl.create({
        //   title: 'Error',
        //   subTitle: 'Ooh sorry, The confiramation could not be recorded at this time, Please try again!',
        //   buttons: ['Try Again']
        // });
        // alert.present();
        let toast = this.toastCtrl.create({
          message: 'Ooh sorry, The confiramation could not be recorded at this time, Please try again!',
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
      //   title: 'Signup Error',
      //   subTitle: "Network error. Make sure you are connected to the internet",
      //   buttons: ['Try Again']
      // });
      // alert.present();
      let toast = this.toastCtrl.create({
        message: 'Network error. Make sure you are connected to the internet',
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsDonationsPage');
    this.organNeeds();
    this.feesNeeds();
    this.donatedOrgans();
    this.donatedFees();
  }
}
