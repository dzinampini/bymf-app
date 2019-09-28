import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, AlertController, ToastController,} from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalProvider } from "../../providers/global/global";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { DonorsPatientPage } from '../donors-patient/donors-patient'; //no page we will head to so yeah

@IonicPage()
@Component({
  selector: 'page-donors-patient',
  templateUrl: 'donors-patient.html',
})
export class DonorsPatientPage {


  fs = ""; //fees needs 
  dfs = []; //donated fees 
  os = []; //organ needs
  dos = []; //donated organs
  ps = [];
  cas = [];
  cas_length = 0; 
  exs = [];
  cos = []; 

  search = {
    city:"",
  };

  id:""; //patient id
  
  fd = {
    donation: 0,
    donor: this.global.session,
    patient: this.navParams.get("id"),
    amount: 0,
    proof: ""
  };

  od = {
    donation: "",
    donor: this.global.session,
    patient: this.navParams.get("id"),
    note: ""
  };

  private formData: FormGroup;
  private formDataForOrganDonation: FormGroup;

  constructor(
    public global:GlobalProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder,
    public http: Http,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
  ) {
    this.id=this.navParams.get("id");

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
    };
    this.formData=this.formBuilder.group({
      amount: ['',validators.money],
      proof: ['',validators.text],
      form: ['']
    });

    this.formDataForOrganDonation=this.formBuilder.group({
      note: ['',validators.text],
      donation: ['',validators.db_int],
      form: ['']
    });
  }

patients() {
    this.http.get(this.global.serverAddress+"patients.php?id="+this.id) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.ps=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  organNeeds() {
    this.http.get(this.global.serverAddress+"funding-needs-organs.php?id=0&patient="+this.id) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.os=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  feesNeeds() {
    this.http.get(this.global.serverAddress+"funding-needs-fees.php?id=0&patient="+this.id) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.fs=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  donatedOrgans() {
    this.http.get(this.global.serverAddress+"donations-organs.php?id=0&donor=0&patient="+this.id) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.dos=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  donatedFees() {
    this.http.get(this.global.serverAddress+"donations-fees.php?id=0&donor=0&patient="+this.id) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.dfs=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  campaigns() {
    this.http.get(this.global.serverAddress+"campaigns.php?id=0&donor="+this.global.session+"&patient="+this.id) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.cas=JSON.parse(data["_body"]);
        this.cas_length = this.cas.length; 
      }, error => {
        console.log("failed");
      }
    );
  }

  expenses() {
    this.http.get(this.global.serverAddress+"expenses.php?id=0&patient="+this.id) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.exs=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  courts() {
    this.http.get(this.global.serverAddress+"courts.php?id=0&donor=0&patient="+this.id) 
      .subscribe(data => {
        console.log(data["_body"]);
        this.cos=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  

  shareCampaign(item: ItemSliding,id: string) {
    // this.navCtrl.push(DonorsPatientPage, {'id':id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsPatientPage');
    this.patients();
    this.feesNeeds();
    this.organNeeds();
    this.donatedFees();
    this.donatedOrgans();
    this.campaigns(); 
    this.expenses();
    this.courts();
  }

  donateFees(){   
    this.http.post(this.global.serverAddress+"donations-fees-add.php", JSON.stringify(this.fd))
    .subscribe(data => {
      console.log(data["_body"]);
      let response=JSON.parse(data["_body"]);
      if(response.response=="success"){
        let toast = this.toastCtrl.create({
          message: 'Thank you very much for your donation!',
          duration: 6000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
        this.navCtrl.push(DonorsPatientPage, {'id':this.id});
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

  donateOrgan(){   
    this.http.post(this.global.serverAddress+"donations-organs-add.php", JSON.stringify(this.od))
    .subscribe(data => {
      console.log(data["_body"]);
      let response=JSON.parse(data["_body"]);
      if(response.response=="success"){
        let toast = this.toastCtrl.create({
          message: 'Thank you very much for your donation! The patient shall be in touch',
          duration: 6000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
        this.navCtrl.push(DonorsPatientPage, {'id':this.id});
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
