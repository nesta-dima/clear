import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCleanComponent } from './general-clean.component';

describe('GeneralCleanComponent', () => {
  let component: GeneralCleanComponent;
  let fixture: ComponentFixture<GeneralCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCleanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
