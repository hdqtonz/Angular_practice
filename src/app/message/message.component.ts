import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [],
})
export class MessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  message: any;
  othermessage: any;

  ngOnInit(): void {
    // this.message = this.messageService.getMessage();
  }

  getMessage() {
    this.message = this.messageService.getMessage();
    this.othermessage = this.messageService.getMessageFromOtherService();
  }
}
