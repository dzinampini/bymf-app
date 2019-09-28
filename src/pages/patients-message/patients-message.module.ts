import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientsMessagePage } from './patients-message';

@NgModule({
  declarations: [
    PatientsMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(PatientsMessagePage),
  ],
})
export class PatientsMessagePageModule {}
