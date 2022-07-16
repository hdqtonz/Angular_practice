import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  constructor(private el: ElementRef<any>, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#42ba96');
  }

  changeBg(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostBinding('style.backgroundColor') bgColor: any = '#42ba96';
  @HostBinding('class.myClass') className: any;
  @HostBinding('attr.title') myTitle: any;
  @HostListener('click') myClick() {
    this.bgColor = 'blue';
    this.className = true;
    this.myTitle = 'This is my title';
  }

  @HostListener('mouseover') myMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#f24f4d'); //f24f4d
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
  }

  @HostListener('mouseout') myMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#42ba96'); //42ba96
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
