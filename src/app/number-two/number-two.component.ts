import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NumberService } from '../service/number.service';

@Component({
  selector: 'app-number-two',
  templateUrl: './number-two.component.html',
  styleUrls: ['./number-two.component.css'],
  // providers: [NumberService],
})
export class NumberTwoComponent implements OnInit {
  @ViewChild('num') num!: ElementRef;
  listOne: any;

  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
    this.listOne = this.numberService.getList();
  }

  addNumber(num: any) {
    this.numberService.addNumber(num);
    this.num.nativeElement.value = '';
  }
}
