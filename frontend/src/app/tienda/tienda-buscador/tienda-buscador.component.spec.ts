import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaBuscadorComponent } from './tienda-buscador.component';

describe('TiendaBuscadorComponent', () => {
  let component: TiendaBuscadorComponent;
  let fixture: ComponentFixture<TiendaBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaBuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
