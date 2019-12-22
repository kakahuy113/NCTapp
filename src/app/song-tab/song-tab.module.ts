import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongTabPageRoutingModule } from './song-tab-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SongTabPage } from './song-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongTabPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SongTabPage]
})
export class SongTabPageModule {}
