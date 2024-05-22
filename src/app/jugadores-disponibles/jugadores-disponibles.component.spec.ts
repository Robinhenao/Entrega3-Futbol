import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresDisponiblesComponent } from './jugadores-disponibles.component';

describe('JugadoresDisponiblesComponent', () => {
  let component: JugadoresDisponiblesComponent;
  let fixture: ComponentFixture<JugadoresDisponiblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugadoresDisponiblesComponent]
    });
    fixture = TestBed.createComponent(JugadoresDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
