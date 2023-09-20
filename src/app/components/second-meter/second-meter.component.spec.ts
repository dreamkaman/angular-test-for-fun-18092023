import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMeterComponent } from './second-meter.component';

describe('SecondMeterComponent', () => {
  let component: SecondMeterComponent;
  let fixture: ComponentFixture<SecondMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
