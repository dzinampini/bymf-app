//angular components 
import { Component, ViewChild } from '@angular/core';

//ionic-native components 
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//ionic components 
import { Storage } from '@ionic/storage';

//ionic angular components
import { Platform, NavController, Nav, AlertController, ToastController, MenuController} from 'ionic-angular';

//providers and services
import { GlobalProvider } from "../providers/global/global";
import { MyProvider } from '../providers/my/my';

//common pages 
import { WelcomePage } from '../pages/welcome/welcome';


//bymf pages
import { BymfManualPage } from '../pages/bymf-manual/bymf-manual';
import { BymfManualChapterPage } from '../pages/bymf-manual-chapter/bymf-manual-chapter';
import { BymfLocatorPage } from '../pages/bymf-locator/bymf-locator';
import { BymfEventsPage } from '../pages/bymf-events/bymf-events';
import { BymfContactPage } from '../pages/bymf-contact/bymf-contact';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Nav) navCtrl;

  // make HelloIonicPage the root (or first) page
  rootPage = WelcomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public global: GlobalProvider,
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public storage: Storage ) {
      this.initializeApp();

      platform.ready().then(() => {
        statusBar.styleDefault();
        this.storage.ready().then(()=> {
          this.storage.get('serverAddress').then((val) =>{
            this.setServerAddress(val);
          });
          this.storage.get('role').then((val) =>{
            this.setRole(val);
          });
          this.storage.get('session').then((val) =>{
            this.setAccount(val);
          });          
        });
        splashScreen.hide();
      });
    }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  setAccount(val){
    this.global.session=val;

    console.log(this.global.session);
      this.pages = [
        { title: 'Manual', component: BymfManualPage },
        { title: 'Church Locator', component: BymfLocatorPage },
        { title: 'Events Timeline', component: BymfEventsPage },
        { title: 'Contact', component: BymfContactPage },
      ];
      this.navCtrl.setRoot(WelcomePage);
  }

  setRole(val){
    this.global.role=val; //determine the correct 
  }


  setServerAddress(val){
    this.global.serverAddress="http://bymf.org.zw/api/";
  }

}