import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongTabPage } from './song-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SongTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongTabPageRoutingModule {}
