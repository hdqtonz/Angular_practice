import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChangecolorDirective } from '../directives/changecolor.directive';

@Component({
  selector: 'app-parent-color',
  templateUrl: './parent-color.component.html',
  styleUrls: ['./parent-color.component.css'],
})
export class ParentColorComponent implements OnInit {
  @ViewChild(ChangecolorDirective) changecolor!: ChangecolorDirective;
  constructor() {}

  change(color: string) {
    this.changecolor.changeColor(color);
  }

  ngOnInit(): void {}
}
