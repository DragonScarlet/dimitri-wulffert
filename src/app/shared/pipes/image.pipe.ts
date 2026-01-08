import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'image',
    standalone: false
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string {

    let urlImg: string = 'assets/countries/';

    switch (value) {
      case 'CO':
        urlImg += 'co.svg';
        break;

      case 'DE':
        urlImg += 'de.svg';
        break;

      case 'US':
        urlImg += 'us.svg';
        break;

      case 'JP':
        urlImg += 'jp.svg';
        break;

      case 'CN':
        urlImg += 'cn.svg';
        break;

      default:
        urlImg = 'unknownImage.svg';
        break;
    }

    return urlImg;
  }

}
