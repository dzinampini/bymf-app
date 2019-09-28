import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsMessagePage } from './donors-message';

@NgModule({
  declarations: [
    DonorsMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsMessagePage),
  ],
})
export class DonorsMessagePageModule {}
