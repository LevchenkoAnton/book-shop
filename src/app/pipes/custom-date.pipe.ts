import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, locale?: string, format?: string): any {
    const date = new Date(value);
    let result;

    switch (format) {
      case 'full':
        result = date.toLocaleString(locale, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
        break;
      default:
        result = date.toLocaleString(locale);
        break;
    }

    return result;
  }

}
