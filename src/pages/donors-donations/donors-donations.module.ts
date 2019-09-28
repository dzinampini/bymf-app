import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsDonationsPage } from './donors-donations';

@NgModule({
  declarations: [
    DonorsDonationsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsDonationsPage),
  ],
})
export class DonorsDonationsPageModule {}
