import {Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Certificate} from "./Certificate";

@Component({
    selector: 'app-certificate-panel',
    templateUrl: './certificate-panel.component.html',
    styleUrls: ['./certificate-panel.component.css'],
    standalone: false
})
export class CertificatePanelComponent implements OnInit {
  @Input() certificate: Certificate;
  showInProgress = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  navToCourse() {
      this.document.location.href = this.certificate.linkCourse;
  }

  navToCertificate() {
    this.document.location.href = this.certificate.linkCertificate;
  }
}
