import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionCriteriaSubComponent } from './inclusion-criteria-sub.component';

describe('InclusionCriteriaSubComponent', () => {
  let component: InclusionCriteriaSubComponent;
  let fixture: ComponentFixture<InclusionCriteriaSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusionCriteriaSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionCriteriaSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
