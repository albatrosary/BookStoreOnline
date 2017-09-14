import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';


describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as items`, async(() => {
    
    component.image = 'image_data';
    component.title = 'title_data';
    component.desc = 'desc_data';
    component.isbn = 123456789;
    component.price = 12345;

    expect(component.image).toEqual('image_data');
    expect(component.title).toEqual('title_data');
    expect(component.desc).toEqual('desc_data');
    expect(component.isbn).toEqual(123456789);
    expect(component.price).toEqual(12345); // ¥12,345
  }));


  it('should render items', async(() => {

    component.image = 'image_data';
    component.title = 'title_data';
    component.desc = 'desc_data';
    component.isbn = 123456789;
    component.price = 12345;

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('title_data');
    expect(compiled.querySelector('p').textContent).toContain('desc_data');
    expect(compiled.querySelectorAll('p')[1].textContent).toContain('123456789');
    expect(compiled.querySelectorAll('p')[2].textContent).toContain('¥12,345');
  }));
});
