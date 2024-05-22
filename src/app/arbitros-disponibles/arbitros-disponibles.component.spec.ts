import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrosDisponiblesComponent } from './arbitros-disponibles.component';

describe('ArbitrosDisponiblesComponent', () => {
  let component: ArbitrosDisponiblesComponent;
  let fixture: ComponentFixture<ArbitrosDisponiblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbitrosDisponiblesComponent]
    });
    fixture = TestBed.createComponent(ArbitrosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
