import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*   { path: '', redirectTo: 'tabs', pathMatch: 'full' }, */  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  /* {
    path: 'song-tab',
    loadChildren: () => import('./song-tab/song-tab.module').then( m => m.SongTabPageModule)
  },
  {
    path: 'singer-tab',
    loadChildren: () => import('./singer-tab/singer-tab.module').then( m => m.SingerTabPageModule)
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
