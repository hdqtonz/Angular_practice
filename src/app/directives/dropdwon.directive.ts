import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdwon]',
})
export class DropdwonDirective {
  constructor() {}
  @HostBinding('class.active') className: any;
  @HostListener('click')
  myDropdown() {
    this.className = !this.className;
  }
}
