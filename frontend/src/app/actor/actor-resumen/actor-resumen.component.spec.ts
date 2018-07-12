import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorResumenComponent } from './actor-resumen.component';

describe('ActorResumenComponent', () => {
  let component: ActorResumenComponent;
  let fixture: ComponentFixture<ActorResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
