import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingerTabPageRoutingModule } from './singer-tab-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { SingerTabPage } from './singer-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingerTabPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SingerTabPage]
})
export class SingerTabPageModule {}
