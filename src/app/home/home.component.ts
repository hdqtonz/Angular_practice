import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MyserviceService } from '../service/myservice.service';
// import * as $ from 'jquery';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  userName: any = 'Hiten';
  @ViewChild('box') box!: ElementRef<any>;
  @ViewChild('myTest') myTest!: ElementRef<any>;

  @ViewChild(ChildComponent) child!: ChildComponent;

  constructor(private _header: MyserviceService, private renderer: Renderer2) {}

  //--------For View Child-------//
  ngAfterViewInit(): void {
    // console.log(this.box);

    //------------This is not currect way to change dom property------------//

    // this.box.nativeElement.style.backgroundColor = 'blue';
    // this.box.nativeElement.classList = 'boxblue';
    // this.box.nativeElement.innerHTML = 'This is modified HTML';

    // console.log(this.child);
    //------------User renderer with @ViewChild() to change dom property------------//
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'orange');
    this.renderer.setStyle(this.box.nativeElement, 'color', 'black');

    this.renderer.addClass(this.box.nativeElement, 'myClass');
    this.renderer.setAttribute(
      this.box.nativeElement,
      'title',
      'This is a test title'
    );

    console.log(this.myTest.nativeElement);
    this.myTest.nativeElement.innerHTML = 'Hello Keshyap';

    this.renderer.listen(this.myTest.nativeElement, 'click', () => {
      alert('My test viwe child');
    });
  }

  ngOnInit(): void {
    this._header.headerLoginBtn.next(true);

    //   $(window).scroll(function () {
    //     // console.log('window scrolling');
    //   });
  }

  // @HostListener('window:scroll', ['$event']) myScroll() {
  //   console.log('Scrolling');
  // }

  ngOnDestroy(): void {
    this._header.headerLoginBtn.next(false);
  }

  changeChildProperty() {
    this.child.nameValue = 'Shine and Qtonz';
  }

  callChildMethod() {
    this.child.clickMe();
  }

  // @HostListener('click') myClikc() {
  //   alert('Clicked');
  // }
}
