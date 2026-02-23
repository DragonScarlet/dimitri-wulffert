import { Injectable } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  async generatePdfFromElement(
    element: HTMLElement,
    filename: string = 'CV.pdf',
  ): Promise<void> {
    const opt = {
      margin: 0,
      filename: filename,
      image: { type: 'jpeg' as const, quality: 1.0 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      },
      jsPDF: {
        unit: 'mm' as const,
        format: 'a4' as const,
        orientation: 'portrait' as const,
      },
      pagebreak: { mode: 'avoid-all' },
    };

    // Hacking the two page export
    const worker = html2pdf().set(opt).from(element).toPdf();
    const pdfInstance = await worker.get('pdf');
    const pageCount = pdfInstance.internal.getNumberOfPages();
    if (pageCount > 1) {
      for (let i = pageCount; i > 1; i--) {
        pdfInstance.deletePage(i);
      }
    }
    await pdfInstance.save(filename);
  }
}
