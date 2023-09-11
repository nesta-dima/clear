import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCleanComponent } from './maintenance-clean.component';

describe('MaintenanceCleanComponent', () => {
  let component: MaintenanceCleanComponent;
  let fixture: ComponentFixture<MaintenanceCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceCleanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
