import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerScienceComponent } from './computer-science.component';

describe('ComputerScienceComponent', () => {
  let component: ComputerScienceComponent;
  let fixture: ComponentFixture<ComputerScienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerScienceComponent]
    });
    fixture = TestBed.createComponent(ComputerScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
