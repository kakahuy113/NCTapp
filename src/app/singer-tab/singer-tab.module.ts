import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingerTabPageRoutingModule } from './singer-tab-routing.module';

import { SingerTabPage } from './singer-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingerTabPageRoutingModule
  ],
  declarations: [SingerTabPage]
})
export class SingerTabPageModule {}