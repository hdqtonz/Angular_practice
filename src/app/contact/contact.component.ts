import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private _header: MyserviceService) {
    this._header.headerContactDetails.next(true);
  }
  ngOnDestroy(): void {
    this._header.headerContactDetails.next(false);
  }

  ngOnInit(): void {}
}
