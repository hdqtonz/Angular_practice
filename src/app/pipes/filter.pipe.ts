import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false, // Impure Pipe
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    if (searchTerm.length === 0) {
      return value;
    }
    return value.filter((search: any) => {
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
