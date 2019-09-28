import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
// import { BymfManualPage } from '../bymf-manual/bymf-manual';
import { BymfManualChapterPage } from '../bymf-manual-chapter/bymf-manual-chapter';
import { BymfLocatorPage } from '../bymf-locator/bymf-locator';
import { BymfEventsPage } from '../bymf-events/bymf-events';
import { BymfContactPage } from '../bymf-contact/bymf-contact';

/**
 * Generated class for the BymfManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bymf-manual',
  templateUrl: 'bymf-manual.html',
})
export class BymfManualPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    // for(let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'Chapter' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
    this.items=[
      {
        "title":"1",
        "note":"Introduction. BYMF Aims, Membership, etc",
        "icon":"arrow-forward"
      },
      {
        "title":"2",
        "note":"Steps 1 & 2",
        "icon":"arrow-forward"
      },
      {
        "title":"3",
        "note":"Convention EC & its Functions",
        "icon":"arrow-forward"
      },
      {
        "title":"4",
        "note":"The Formation of BCZ",
        "icon":"arrow-forward"
      },
      {
        "title":"5",
        "note":"Christian Family",
        "icon":"arrow-forward"
      },
      {
        "title":"6",
        "note":"First Aid",
        "icon":"arrow-forward"
      },
      {
        "title":"7",
        "note":"Management of Finances",
        "icon":"arrow-forward"
      },
      {
        "title":"8",
        "note":"The youngmen and unemployment",
        "icon":"arrow-forward"
      },
      {
        "title":"9",
        "note":"BWA & AABF",
        "icon":"arrow-forward"
      },
      {
        "title":"10",
        "note":"Project Proposal",
        "icon":"arrow-forward"
      },
      {
        "title":"11",
        "note":"List of Baptist Churches in Zimbabwe",
        "icon":"arrow-forward"
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(BymfManualChapterPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BymfManualPage');
  }

}
