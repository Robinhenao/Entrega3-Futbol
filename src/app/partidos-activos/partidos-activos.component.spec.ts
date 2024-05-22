import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosActivosComponent } from './partidos-activos.component';

describe('PartidosActivosComponent', () => {
  let component: PartidosActivosComponent;
  let fixture: ComponentFixture<PartidosActivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartidosActivosComponent]
    });
    fixture = TestBed.createComponent(PartidosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
