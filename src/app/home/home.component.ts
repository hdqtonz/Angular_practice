import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  userName: any = 'Hiten';
  @ViewChild('box') box!: ElementRef<any>;

  @ViewChild(ChildComponent) child!: ChildComponent;

  constructor(private _header: MyserviceService, private renderer: Renderer2) {}

  //--------For View Child-------//
  ngAfterViewInit(): void {
    // console.log(this.box);

    //------------This is not currect way to change dom property------------//

    // this.box.nativeElement.style.backgroundColor = 'blue';
    // this.box.nativeElement.classList = 'boxblue';
    // this.box.nativeElement.innerHTML = 'This is modified HTML';

    console.log(this.child);
    //------------User renderer with @ViewChild() to change dom property------------//
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'green');
    this.renderer.setStyle(this.box.nativeElement, 'color', 'white');

    this.renderer.addClass(this.box.nativeElement, 'myClass');
    this.renderer.setAttribute(
      this.box.nativeElement,
      'title',
      'This is a test title'
    );
  }

  ngOnInit(): void {
    this._header.headerLoginBtn.next(true);
  }
  ngOnDestroy(): void {
    this._header.headerLoginBtn.next(false);
  }

  changeChildProperty() {
    this.child.nameValue = 'Shine and Qtonz';
  }

  callChildMethod() {
    this.child.clickMe();
  }
}
