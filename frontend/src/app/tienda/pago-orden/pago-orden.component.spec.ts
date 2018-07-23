import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoOrdenComponent } from './pago-orden.component';

describe('PagoOrdenComponent', () => {
  let component: PagoOrdenComponent;
  let fixture: ComponentFixture<PagoOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
