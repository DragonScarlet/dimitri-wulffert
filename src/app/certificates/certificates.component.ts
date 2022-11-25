import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { DOCUMENT } from '@angular/common';
import {CertificatesService} from "./certificates.service";
import {retry} from "rxjs";

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor(private certificatesService: CertificatesService) { }

  ngOnInit(): void {
  }

  getCertificates(){
    return this.certificatesService.certificates;
  }

}
