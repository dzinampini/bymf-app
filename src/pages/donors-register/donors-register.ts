import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GlobalProvider } from "../../providers/global/global";
import { WelcomePage } from '../welcome/welcome';
import { DonorsLoginPage } from '../donors-login/donors-login';


@IonicPage()
@Component({
  selector: 'page-donors-register',
  templateUrl: 'donors-register.html',
})
export class DonorsRegisterPage {
  data = {
    first_name:"",
    surname:"",
    phone:"",
    nat_id:"",
    password:""
  };
  private formData: FormGroup;

  constructor(
    public global:GlobalProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private storage: Storage
    ) {
      var validators={
        "phone":[Validators.required,Validators.pattern("[0-9]{9}")],
        "db_int":[Validators.required], 
        "money":[Validators.required,Validators.pattern("[0-9]{1,5}")], 
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
      };
      this.formData=this.formBuilder.group({
        first_name: ['',validators.name],
        surname: ['',validators.name],
        phone: ['',validators.phone],
        nat_id: ['',validators.nat_id],
        password: ['', validators.password],
        form: ['']
      });
  }

  register(){   
    this.http.post(this.global.serverAddress+"donors/_register.php", JSON.stringify(this.data))
    .subscribe(data => {
      console.log(data["_body"]);
      let response=JSON.parse(data["_body"]);
      if(response.response=="success"){
        let toast = this.toastCtrl.create({
          message: 'Account registration successful!',
          duration: 6000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
        this.navCtrl.setRoot(DonorsLoginPage);// find another way to present this page setRoot not working
      }else{
        let alert = this.alertCtrl.create({
          title: 'Signup Error',
          subTitle: 'Account registration failed. Make sure all fields have valid data before you try again',
          buttons: ['Try Again']
        });
        alert.present();
      }
    }, error => {
      let alert = this.alertCtrl.create({
        title: 'Signup Error',
        subTitle: "Network error. Make sure you are connected to the internet",
        buttons: ['Try Again']
      });
      alert.present();
    }
    );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsRegisterPage');
  }

  login() {
    this.navCtrl.push(DonorsLoginPage);
  }

}
