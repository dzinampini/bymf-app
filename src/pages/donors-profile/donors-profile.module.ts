import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsProfilePage } from './donors-profile';

@NgModule({
  declarations: [
    DonorsProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsProfilePage),
  ],
})
export class DonorsProfilePageModule {}
