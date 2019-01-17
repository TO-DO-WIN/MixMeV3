import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RandomDrinkPage } from './random-drink.page';

const routes: Routes = [
  {
    path: '',
    component: RandomDrinkPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RandomDrinkPage]
})
export class RandomDrinkPageModule {}
