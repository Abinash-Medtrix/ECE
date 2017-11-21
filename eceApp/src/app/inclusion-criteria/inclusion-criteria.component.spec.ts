import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionCriteriaComponent } from './inclusion-criteria.component';

describe('InclusionCriteriaComponent', () => {
  let component: InclusionCriteriaComponent;
  let fixture: ComponentFixture<InclusionCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusionCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
