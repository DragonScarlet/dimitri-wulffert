import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PdfService } from '../shared/pdf.service';
import { CvComponent } from '../cv/cv.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {
  isProfileHovered = false;

  @ViewChild('cvContent') cvContent!: CvComponent;
  @ViewChild('cvElement') cvElement!: ElementRef;

  constructor(private pdfService: PdfService) { }

  ngOnInit(): void {
  }

  onProfileHover(hovering: boolean): void {
    this.isProfileHovered = hovering;
  }

  downloadPdf(): void {
    setTimeout(() => {
      const element = this.cvElement.nativeElement.querySelector('.a4-page') as HTMLElement;
      this.pdfService.generatePdfFromElement(element, 'Dimitri_Wulffert_CV.pdf');
    }, 100);
  }
}
