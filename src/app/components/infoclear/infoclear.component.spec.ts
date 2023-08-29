import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoclearComponent } from './infoclear.component';

describe('InfoclearComponent', () => {
  let component: InfoclearComponent;
  let fixture: ComponentFixture<InfoclearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoclearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
