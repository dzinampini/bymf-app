import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the BymfLocatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bymf-locator',
  templateUrl: 'bymf-locator.html',
})
export class BymfLocatorPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http,
    public toastCtrl: ToastController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BymfLocatorPage');
  }


  //////////////// Bulawayo churches //////////////////////////////////////////////
  bethel(){
    let alert = this.alertCtrl.create({
      title: "Bethel Baptist Church",
      subTitle: "Contact Kedious 0775560151",
      buttons: ['OK']
    });
    alert.present();
  }

  ////////////////// Harare Churches /////////////////////////////////////////////
  calvary(){
    let alert = this.alertCtrl.create({
      title: "Calvary Baptist Church",
      subTitle: "Contact Cletous 0775985609",
      buttons: ['OK']
    });
    alert.present();
  }

  /////////////////////// Gweru Churches ////////////////////////////////////////
  first(){
    let alert = this.alertCtrl.create({
      title: "First Baptist Church, Mkoba",
      subTitle: "Contact Allan - 0778037875",
      buttons: ['OK']
    });
    alert.present();
  }

  senga(){
    let alert = this.alertCtrl.create({
      title: "Senga Baptist Church",
      subTitle: "Contact Methembe 0771601578",
      buttons: ['OK']
    });
    alert.present();
  }
///////////////////// Zvishavane ////////////////////////////////
  tsitsi(){
    let alert = this.alertCtrl.create({
      title: "Tsitsi Baptist Church",
      subTitle: "Contact Mark 0733117380",
      buttons: ['OK']
    });
    alert.present();
  }

  maglass(){
    let alert = this.alertCtrl.create({
      title: "Maglass Baptist Church",
      subTitle: "Contact Thomas 0773706129",
      buttons: ['OK']
    });
    alert.present();
  }
}
