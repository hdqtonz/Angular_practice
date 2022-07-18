import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count: number = 0;
  message: any;
  constructor() {}

  increaseByOne() {
    this.count = this.count + 1;
    this.message = 'No : ' + this.count;
  }

  decreaseByOne() {
    this.count = this.count - 1;
    this.message = 'No : ' + this.count;
  }

  ngOnInit(): void {}
}
