import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossDescriptionComponent } from './gross-description.component';

describe('GrossDescriptionComponent', () => {
  let component: GrossDescriptionComponent;
  let fixture: ComponentFixture<GrossDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
