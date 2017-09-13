import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [ItemsComponent, ItemComponent]
})
export class ItemsModule { }
