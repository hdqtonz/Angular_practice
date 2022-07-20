import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OthermessageService {
  constructor() {}

  getOtherMessage() {
    return 'Message From Other Service';
  }
}
