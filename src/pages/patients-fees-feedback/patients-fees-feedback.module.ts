import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientsFeesFeedbackPage } from './patients-fees-feedback';

@NgModule({
  declarations: [
    PatientsFeesFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientsFeesFeedbackPage),
  ],
})
export class PatientsFeesFeedbackPageModule {}
