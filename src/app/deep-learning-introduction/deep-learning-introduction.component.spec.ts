import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningIntroductionComponent } from './deep-learning-introduction.component';

describe('DeepLearningIntroductionComponent', () => {
  let component: DeepLearningIntroductionComponent;
  let fixture: ComponentFixture<DeepLearningIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeepLearningIntroductionComponent]
    });
    fixture = TestBed.createComponent(DeepLearningIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
