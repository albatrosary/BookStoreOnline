import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bso-item',
  template: `
  <a>
    <img ngSrc="image" alt="...">
  </a>
  <div>
    <h2>{{title}}</h2>
    <p>{{desc}}</p>
    <p>{{isbn}}</p>
    <p>{{price | currency:'JPY':true}}</p>
    <p><a>詳細</a></p>
  </div>
  `,
  styles: []
})
export class ItemComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() desc: string;
  @Input() isbn: number;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
