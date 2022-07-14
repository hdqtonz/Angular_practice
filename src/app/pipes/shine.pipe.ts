import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shine',
})
export class ShinePipe implements PipeTransform {
  transform(value: any, limit: any, ...args: any[]) {
    // console.log(value);
    // return 'Namaste ' + value;
    if (value.length > limit) {
      return value.substr(0, limit) + ' .... pipe applied';
    } else {
      return value;
    }
  }
}
