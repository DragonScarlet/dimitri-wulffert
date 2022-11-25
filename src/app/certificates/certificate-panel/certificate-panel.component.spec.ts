import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatePanelComponent } from './certificate-panel.component';

describe('CertificatePanelComponent', () => {
  let component: CertificatePanelComponent;
  let fixture: ComponentFixture<CertificatePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
