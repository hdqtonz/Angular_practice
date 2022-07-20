import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  list: Array<number> = [100];
  constructor() {}

  addNumber(value: number) {
    return this.list.push(value);
  }

  getList() {
    return this.list;
  }
}
