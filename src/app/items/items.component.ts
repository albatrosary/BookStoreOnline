import { Component, OnInit } from '@angular/core';

import { Item } from './item';

@Component({
  selector: 'bso-items',
  template: `
  <div *ngFor="let item of items">
    <bso-item
      [image]="item.image"
      [title]="item.title"
      [desc]="item.desc"
      [isbn]="item.isbn"
      [price]="item.price"
    ></bso-item>
  </div>
  `,
  styles: []
})
export class ItemsComponent implements OnInit {

  items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
