import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlectureComponent } from './addlecture.component';

describe('AddlectureComponent', () => {
  let component: AddlectureComponent;
  let fixture: ComponentFixture<AddlectureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddlectureComponent]
    });
    fixture = TestBed.createComponent(AddlectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
