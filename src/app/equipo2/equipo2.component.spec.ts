import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Equipo2Component } from './equipo2.component';

describe('Equipo2Component', () => {
  let component: Equipo2Component;
  let fixture: ComponentFixture<Equipo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Equipo2Component]
    });
    fixture = TestBed.createComponent(Equipo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
