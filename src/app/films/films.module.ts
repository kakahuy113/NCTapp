import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FilmsPageRoutingModule } from './films-routing.module';

import { FilmsPage } from './films.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [FilmsPage]
})
export class FilmsPageModule {}
