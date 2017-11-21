import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusionCriteriaSubComponent } from './exclusion-criteria-sub.component';

describe('ExclusionCriteriaSubComponent', () => {
  let component: ExclusionCriteriaSubComponent;
  let fixture: ComponentFixture<ExclusionCriteriaSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusionCriteriaSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionCriteriaSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
