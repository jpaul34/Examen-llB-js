import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaFacturaComponent } from './tienda-factura.component';

describe('TiendaFacturaComponent', () => {
  let component: TiendaFacturaComponent;
  let fixture: ComponentFixture<TiendaFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
