import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', loadChildren: './items/items.module#ItemsModule' },
  { path: 'carts', loadChildren: './carts/carts.module#CartsModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
