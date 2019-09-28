import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientsDonationsPage } from './patients-donations';

@NgModule({
  declarations: [
    PatientsDonationsPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientsDonationsPage),
  ],
})
export class PatientsDonationsPageModule {}
