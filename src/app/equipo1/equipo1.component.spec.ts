import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Equipo1Component } from './equipo1.component';

describe('Equipo1Component', () => {
  let component: Equipo1Component;
  let fixture: ComponentFixture<Equipo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Equipo1Component]
    });
    fixture = TestBed.createComponent(Equipo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
