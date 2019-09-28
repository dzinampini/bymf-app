import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsPatientsPage } from './donors-patients';

@NgModule({
  declarations: [
    DonorsPatientsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsPatientsPage),
  ],
})
export class DonorsPatientsPageModule {}
