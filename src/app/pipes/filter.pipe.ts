import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Object[], filter: String): Object[] {
    let f = filter.trim().toLowerCase();
    return value.filter((item: Object) => {
      for (let prop in item) {
        if (typeof item[prop] === 'string' && item[prop].trim().toLowerCase().indexOf(f) > -1) {
          return true;
        }
      }

      return false;
    });
  }
}
