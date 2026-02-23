import { Injectable } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  async generatePdf(): Promise<void> {
    const cvHtml = await fetch('assets/cv.html').then(res => res.text());
    
    const element = document.createElement('div');
    element.innerHTML = cvHtml;
    document.body.appendChild(element);

    const opt = {
      margin: 0,
      filename: 'Dimitri_Wulffert_CV.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, allowTaint: true, logging: false },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
    };

    const a4Page = element.querySelector('.a4-page') as HTMLElement;
    await html2pdf().set(opt).from(a4Page).save();
    
    document.body.removeChild(element);
  }
}
