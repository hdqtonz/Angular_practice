import { Injectable } from '@angular/core';
import { OthermessageService } from './othermessage.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  otherMessage: any;
  constructor(private othermessageService: OthermessageService) {}

  getMessage() {
    return 'Hello! From Message Service';
  }

  getMessageFromOtherService() {
    this.otherMessage = this.othermessageService.getOtherMessage();
    return this.otherMessage;
  }
}
