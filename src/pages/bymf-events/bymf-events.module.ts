import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BymfEventsPage } from './bymf-events';

@NgModule({
  declarations: [
    BymfEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(BymfEventsPage),
  ],
})
export class BymfEventsPageModule {}
