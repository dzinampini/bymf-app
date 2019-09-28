import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientsLoginPage } from './patients-login';

@NgModule({
  declarations: [
    PatientsLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientsLoginPage),
  ],
})
export class PatientsLoginPageModule {}
