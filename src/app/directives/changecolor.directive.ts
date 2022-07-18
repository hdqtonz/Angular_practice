import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]',
})
export class ChangecolorDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.style.color = 'red';
  }
  changeColor(changeColor: string) {
    this.el.nativeElement.style.color = changeColor;
  }
}
