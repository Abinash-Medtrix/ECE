import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroscopicDiagnosisComponent } from './microscopic-diagnosis.component';

describe('MicroscopicDiagnosisComponent', () => {
  let component: MicroscopicDiagnosisComponent;
  let fixture: ComponentFixture<MicroscopicDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroscopicDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroscopicDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
