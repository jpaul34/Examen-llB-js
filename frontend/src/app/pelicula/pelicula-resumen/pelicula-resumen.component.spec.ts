import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaResumenComponent } from './pelicula-resumen.component';

describe('PeliculaResumenComponent', () => {
  let component: PeliculaResumenComponent;
  let fixture: ComponentFixture<PeliculaResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
