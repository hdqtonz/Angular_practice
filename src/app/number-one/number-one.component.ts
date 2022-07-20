import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NumberService } from '../service/number.service';

@Component({
  selector: 'app-number-one',
  templateUrl: './number-one.component.html',
  styleUrls: ['./number-one.component.css'],
  providers: [NumberService],
})
export class NumberOneComponent implements OnInit {
  constructor(private numberService: NumberService) {}
  listOne: any;
  @ViewChild('num') num!: ElementRef;
  ngOnInit(): void {
    this.listOne = this.numberService.getList();
  }

  addNumber(num: any) {
    this.numberService.addNumber(num);
    this.num.nativeElement.value = null;
  }
}
