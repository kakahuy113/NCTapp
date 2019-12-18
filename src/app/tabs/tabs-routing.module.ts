import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {path: '' , redirectTo: 'tabs/song' , pathMatch: 'full'},
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'song',
        children: [
        {
          path: '',
          loadChildren: () => import('../song-tab/song-tab.module').then( m => m.SongTabPageModule)
        },
        {
          path: 'detail/:id',
          loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)
        },
        ]
      },
      {
        path: 'singer',
        loadChildren: () => import('../singer-tab/singer-tab.module').then( m => m.SingerTabPageModule)
      },
     
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}