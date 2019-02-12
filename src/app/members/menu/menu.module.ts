import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

import { IonicModule} from '@ionic/angular';

import { MenuPage } from './menu.page';

import { MenuRouterModule } from './menu.router.module';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRouterModule,
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
