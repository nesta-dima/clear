import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentCleanComponent } from './different-clean.component';

describe('DifferentCleanComponent', () => {
  let component: DifferentCleanComponent;
  let fixture: ComponentFixture<DifferentCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentCleanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
