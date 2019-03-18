import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourPickerVersionTwoComponent } from './colour-picker-version-two.component';

describe('ColourPickerVersionTwoComponent', () => {
  let component: ColourPickerVersionTwoComponent;
  let fixture: ComponentFixture<ColourPickerVersionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColourPickerVersionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourPickerVersionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
