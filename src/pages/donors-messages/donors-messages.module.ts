import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsMessagesPage } from './donors-messages';

@NgModule({
  declarations: [
    DonorsMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsMessagesPage),
  ],
})
export class DonorsMessagesPageModule {}
