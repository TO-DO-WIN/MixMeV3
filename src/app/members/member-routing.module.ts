import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule'},
  { path: 'cabinet', loadChildren: './cabinet/cabinet.module#CabinetPageModule' },
  { path: 'create-drink', loadChildren: './create-drink/create-drink.module#CreateDrinkPageModule' },
  { path: 'favorite', loadChildren: './favorite/favorite.module#FavoritePageModule' },
  { path: 'shopping', loadChildren: './shopping/shopping.module#ShoppingPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'special', loadChildren: './special/special.module#SpecialPageModule' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
