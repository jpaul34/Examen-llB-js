import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaNoDisponibleComponent } from './pelicula-no-disponible.component';

describe('PeliculaNoDisponibleComponent', () => {
  let component: PeliculaNoDisponibleComponent;
  let fixture: ComponentFixture<PeliculaNoDisponibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaNoDisponibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaNoDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
