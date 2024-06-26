import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningComponent } from './deep-learning.component';

describe('DeepLearningComponent', () => {
  let component: DeepLearningComponent;
  let fixture: ComponentFixture<DeepLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeepLearningComponent]
    });
    fixture = TestBed.createComponent(DeepLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
