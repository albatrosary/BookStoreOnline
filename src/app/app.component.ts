import { Component } from '@angular/core';

@Component({
  selector: 'bso-root',
  template: `
    <h1>
      Welcome to {{title}}!
    </h1>
    <a routerLink="items">商品一覧</a>
    <a routerLink="carts">ショッピングカート一覧</a>
    <a routerLink="history">購入履歴</a>
    <a routerLink="user">購入者情報</a>
    <router-outlet></router-outlet> 
  `,
  styles: []
})
export class AppComponent {
  title = 'bso';
}
