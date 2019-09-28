import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalProvider } from "../../providers/global/global";

import { DonorsPatientPage } from '../donors-patient/donors-patient';

@IonicPage()
@Component({
  selector: 'page-donors-donations',
  templateUrl: 'donors-donations.html',
})
export class DonorsDonationsPage {

  ps = []; //patients
  mis = []; //medical institutions
  cs = []; //cities

  dfs = [];
  dos = [];

  search = {
    city:"",
  };

  constructor(
    public global:GlobalProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http
  ) {
  }

  patients() {
    this.http.get(this.global.serverAddress+"patients.php?id=0&city=0") 
      .subscribe(data => {
        console.log(data["_body"]);
        this.ps=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  cities() {
    this.http.get(this.global.serverAddress+"cities.php?id=0") 
      .subscribe(data => {
        console.log(data["_body"]);
        this.cs=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  donatedOrgans() {
    this.http.get(this.global.serverAddress+"donations-organs.php?id=0&donor="+this.global.session+"&patient=0") 
      .subscribe(data => {
        console.log(data["_body"]);
        this.dos=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  donatedFees() {
    this.http.get(this.global.serverAddress+"donations-fees.php?id=0&donor="+this.global.session+"&patient=0") 
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsDonationsPage');
    this.cities();
    this.patients(); 
    this.donatedOrgans();
    this.donatedFees();
  }

}
