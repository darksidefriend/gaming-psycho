import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericantrucksimulatorComponent } from './americantrucksimulator.component';

describe('AmericantrucksimulatorComponent', () => {
  let component: AmericantrucksimulatorComponent;
  let fixture: ComponentFixture<AmericantrucksimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericantrucksimulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmericantrucksimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
