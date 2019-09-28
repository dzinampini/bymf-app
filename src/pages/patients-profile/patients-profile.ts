import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, AlertController, ToastController} from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalProvider } from "../../providers/global/global";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-patients-profile',
  templateUrl: 'patients-profile.html',
})
export class PatientsProfilePage {
  ps = []; //patients

  passwords = {
    id:this.global.session,
    // old:"",
    // old2:"",
    new1:"",
    new2:"",
  };

  private passwordData: FormGroup;

  constructor(
    public global:GlobalProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    ) {
      this.patients();

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
  
      this.passwordData=this.formBuilder.group(
        {
        // old: ['',],
        // old2: ['',],
        new1: ['',validators.password],
        new2: [''],
        form: ['']
        }, 
        {validator: this.checkPasswords }
      );
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('new1').value;
    let confirmPass = group.get('new2').value;
    return pass === confirmPass ? null : { notSame: true }     
  }

  patients() {
    this.http.get(this.global.serverAddress+"patients.php?id="+this.global.session) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.ps=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  updatePassword(){   
    this.http.post(this.global.serverAddress+"patients/_update-password.php", JSON.stringify(this.passwords))
    .subscribe(data => {
      console.log(data["_body"]);
      let response=JSON.parse(data["_body"]);
      if(response.response=="success"){
        let toast = this.toastCtrl.create({
          message: 'Your password has been changed!',
          duration: 6000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
        this.navCtrl.setRoot(PatientsProfilePage);
      }else{
        // let alert = this.alertCtrl.create({
        //   title: 'Error',
        //   subTitle: 'Ooh sorry, Your password could not be changed now, please try again',
        //   buttons: ['Try Again']
        // });
        // alert.present();
        let toast = this.toastCtrl.create({
          message: 'Ooh sorry, Your password could not be changed now, please try again',
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
    console.log('ionViewDidLoad PatientsProfilePage');
  }

}
