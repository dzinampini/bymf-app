import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, AlertController, ToastController,} from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalProvider } from "../../providers/global/global";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-patients-fees-feedback',
  templateUrl: 'patients-fees-feedback.html',
})
export class PatientsFeesFeedbackPage {
  exs = [];

  exe = {
    institution:"",
    service:"",
    amount:"",
    patient:this.global.session
  };


  constructor(
    public global:GlobalProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder,
    public http: Http,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsFeesFeedbackPage');
    this.expenses();
  }

  expenses() {
    this.http.get(this.global.serverAddress+"expenses.php?id=0&patient="+this.global.session) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.exs=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  addExpense(){   
    this.http.post(this.global.serverAddress+"expenses-add.php", JSON.stringify(this.exe))
    .subscribe(data => {
      console.log(data["_body"]);
      let response=JSON.parse(data["_body"]);
      if(response.response=="success"){
        // let toast = this.toastCtrl.create({
        //   message: 'Expense successfully recorded. You should also go with the receipts to the institution that registered you so that the expenses can be approved',
        //   duration: 6000,
        //   position: 'top',
        //   cssClass: 'dark-trans',
        //   closeButtonText: 'OK',
        //   showCloseButton: true
        // });
        // toast.present();
        let toast = this.toastCtrl.create({
          message: 'Expense successfully recorded. You should also go with the receipts to the institution that registered you so that the expenses can be approved',
          duration: 6000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
        this.navCtrl.setRoot(PatientsFeesFeedbackPage);
      }else{
        // let alert = this.alertCtrl.create({
        //   title: 'Error',
        //   subTitle: 'Ooh sorry, Your donation could not be recorded at this time, Please try again!',
        //   buttons: ['Try Again']
        // });
        // alert.present();
        let toast = this.toastCtrl.create({
          message: 'Ooh sorry, Your donation could not be recorded at this time, Please try again!',
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

}
