import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingerTabPage } from './singer-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SingerTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingerTabPageRoutingModule {}
