import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  navToDockerClass() {
    this.document.location.href = 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/';
  }

  navToAngularClass() {
    this.document.location.href = 'https://www.udemy.com/course/the-complete-guide-to-angular-2/';
  }

  navToAngularCertificate() {
    this.document.location.href = 'https://www.udemy.com/certificate/UC-96aadcb7-7992-4f40-9dc9-292784005c65/';
  }

  navToDockerKubeCertificate() {
    this.document.location.href = 'https://www.udemy.com/certificate/UC-ba382e33-e737-45ff-8204-15d852ee7776/';
  }

  navToCleanCodeClass() {
    this.document.location.href = 'https://www.udemy.com/course/writing-clean-code/';
  }

  navToAwsClass() {
    this.document.location.href = 'https://www.udemy.com/course/aws-cloud-practitioner-complete-aws-introduction/';
  }


}
