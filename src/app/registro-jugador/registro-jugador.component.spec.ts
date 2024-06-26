import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroJugadorComponent } from './registro-jugador.component';

describe('RegistroJugadorComponent', () => {
  let component: RegistroJugadorComponent;
  let fixture: ComponentFixture<RegistroJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroJugadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
