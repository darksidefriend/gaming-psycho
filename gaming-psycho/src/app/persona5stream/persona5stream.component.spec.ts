import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona5streamComponent } from './persona5stream.component';

describe('Persona5streamComponent', () => {
  let component: Persona5streamComponent;
  let fixture: ComponentFixture<Persona5streamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Persona5streamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Persona5streamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
