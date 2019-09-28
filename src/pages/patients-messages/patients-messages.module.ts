import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientsMessagesPage } from './patients-messages';

@NgModule({
  declarations: [
    PatientsMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientsMessagesPage),
  ],
})
export class PatientsMessagesPageModule {}
