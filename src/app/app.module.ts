//angular components 
import { Component, ViewChild } from '@angular/core';
import { HttpModule} from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ionic-native components 
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//ionic components 
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';

//ionic angular components
import { Platform, NavController, Nav, AlertController, MenuController} from 'ionic-angular';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//providers and services and components
import { GlobalProvider } from "../providers/global/global";
import { MyProvider } from '../providers/my/my';
import { MyApp } from './app.component';

//common pages 
import { WelcomePage } from '../pages/welcome/welcome';

//bymf pages
import { BymfManualPage } from '../pages/bymf-manual/bymf-manual';
import { BymfManualChapterPage } from '../pages/bymf-manual-chapter/bymf-manual-chapter';
import { BymfLocatorPage } from '../pages/bymf-locator/bymf-locator';
import { BymfEventsPage } from '../pages/bymf-events/bymf-events';
import { BymfContactPage } from '../pages/bymf-contact/bymf-contact';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage, 
    BymfManualPage,
    BymfManualChapterPage,
    BymfLocatorPage,
    BymfEventsPage,
    BymfContactPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    BymfManualPage,
    BymfManualChapterPage,
    BymfLocatorPage,
    BymfEventsPage,
    BymfContactPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyProvider,
    GlobalProvider,
    // FileTransfer,
    // FileUploadOptions,
    // FileTransferObject,
    // File,
    // Camera,
    // CallNumber
    
  ]
})
export class AppModule {}
