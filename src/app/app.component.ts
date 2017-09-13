import { Component } from '@angular/core';

@Component({
  selector: 'bso-root',
  template: `
    <h1>
      Welcome to {{title}}!!
      <alert type="success">hello</alert>
    </h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'bso';
}
