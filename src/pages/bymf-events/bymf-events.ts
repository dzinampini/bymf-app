import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalProvider } from "../../providers/global/global";

/**
 * Generated class for the BymfEventsPage page
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 **/

@IonicPage()
@Component({
  selector: 'page-bymf-events',
  templateUrl: 'bymf-events.html',
})
export class BymfEventsPage {
  events = [];

  constructor(
    public global:GlobalProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BymfEventsPage');
    this.maevent();
  }

  maevent() {
    this.http.get(this.global.serverAddress+"events.php") 
      .subscribe(data => {
        console.log(data["_body"]);
        this.events=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }
}
