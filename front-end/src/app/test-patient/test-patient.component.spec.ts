import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPatientComponent } from './test-patient.component';

describe('TestPatientComponent', () => {
  let component: TestPatientComponent;
  let fixture: ComponentFixture<TestPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
