import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersdetailsComponent } from './teachersdetails.component';

describe('TeachersdetailsComponent', () => {
  let component: TeachersdetailsComponent;
  let fixture: ComponentFixture<TeachersdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
