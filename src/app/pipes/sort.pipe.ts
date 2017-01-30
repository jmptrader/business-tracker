import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: Object[], sortField: string, ascending: boolean): Object[] {
    return items.sort((a, b) => {
      let aField = a[sortField];
      let bField = b[sortField];

      if (typeof aField === 'string') {
        aField = aField.toLowerCase();
        bField = bField.toLowerCase();
      }

      let ascNum = (ascending) ? -1 : 1;

      if (aField < bField) {
        return ascNum;
      } else if (aField > bField) {
        return -ascNum;
      }

      return 0;
    });
  }

}
