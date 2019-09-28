import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsPatientPage } from './donors-patient';

@NgModule({
  declarations: [
    DonorsPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsPatientPage),
  ],
})
export class DonorsPatientPageModule {}
