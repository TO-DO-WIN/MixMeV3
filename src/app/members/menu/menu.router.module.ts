import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import {MenuPage} from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'cabinet',
        children: [
          {
            path: '',
            loadChildren: '../cabinet/cabinet.module#CabinetPageModule'
          }
        ]
      },
      {
        path: 'favorite',
        children: [
          {
            path: '',
            loadChildren: '../favorite/favorite.module#FavoritePageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/cabinet',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MenuRouterModule {
}
