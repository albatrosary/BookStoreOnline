import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsComponent, ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render items', async(() => {

    component.items = [{
      image: 'image_data',
      title: 'title_data',
      desc: 'desc_data',
      isbn: 123456789,
      price: 12345
    },
    {
      image: 'image_data',
      title: 'title_data',
      desc: 'desc_data',
      isbn: 123456789,
      price: 12345
    }];

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('p')[0].textContent).toContain('image_data');
    expect(compiled.querySelectorAll('p')[1].textContent).toContain('title_data');
    expect(compiled.querySelectorAll('p')[2].textContent).toContain('desc_data');
    expect(compiled.querySelectorAll('p')[3].textContent).toContain('123456789');
    expect(compiled.querySelectorAll('p')[4].textContent).toContain('12345');
    expect(compiled.querySelectorAll('p')[5].textContent).toContain('image_data');
    expect(compiled.querySelectorAll('p')[6].textContent).toContain('title_data');
    expect(compiled.querySelectorAll('p')[7].textContent).toContain('desc_data');
    expect(compiled.querySelectorAll('p')[8].textContent).toContain('123456789');
    expect(compiled.querySelectorAll('p')[9].textContent).toContain('12345');
  }));
});

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bso-item',
  template: `
  <p>{{image}}</p>
  <p>{{title}}</p>
  <p>{{desc}}</p>
  <p>{{isbn}}</p>
  <p>{{price}}</p>
  `
})

export class ItemComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() desc: string;
  @Input() isbn: number;
  @Input() price: number;

  constructor() { }

  ngOnInit() { }
}