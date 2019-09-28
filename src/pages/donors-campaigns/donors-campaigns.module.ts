import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsCampaignsPage } from './donors-campaigns';

@NgModule({
  declarations: [
    DonorsCampaignsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsCampaignsPage),
  ],
})
export class DonorsCampaignsPageModule {}
