import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrowsinessComponent } from './drowsiness.component';

describe('DrowsinessComponent', () => {
  let component: DrowsinessComponent;
  let fixture: ComponentFixture<DrowsinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrowsinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrowsinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
