import { Component, OnInit } from '@angular/core';
import { PdfService } from '../shared/pdf.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {
  isProfileHovered = false;

  constructor(private pdfService: PdfService) { }

  ngOnInit(): void {
  }

  onProfileHover(hovering: boolean): void {
    this.isProfileHovered = hovering;
  }

  downloadPdf(): void {
    this.pdfService.generatePdf();
  }
}
