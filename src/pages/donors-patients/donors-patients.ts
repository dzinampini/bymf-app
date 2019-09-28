import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalProvider } from "../../providers/global/global";

import { DonorsPatientPage } from '../donors-patient/donors-patient';

/**
 * Generated class for the DonorsPatientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donors-patients',
  templateUrl: 'donors-patients.html',
})
export class DonorsPatientsPage {

  ps = []; //patients
  mis = []; //medical institutions
  cs = []; //cities

  search = {
    city:"",
  };

  constructor(
    public global:GlobalProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http
  ) {
    for (let i = 0; i < 4; i++) {
      this.ps.push( this.ps.length );
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        this.ps.push( this.ps.length );
      }

      console.log('No more patients');
      infiniteScroll.complete();
    }, 500);
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


  viewMore(item: ItemSliding,id: string) {
    this.navCtrl.push(DonorsPatientPage, {'id':id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsPatientsPage');
    this.cities();
    this.patients(); 
  }

}
