import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusionCriteriaComponent } from './exclusion-criteria.component';

describe('ExclusionCriteriaComponent', () => {
  let component: ExclusionCriteriaComponent;
  let fixture: ComponentFixture<ExclusionCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusionCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
