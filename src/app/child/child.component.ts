import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TestDirective } from '../directives/test.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, AfterContentInit {
  @ContentChild('childContent') childPara!: ElementRef;
  nameValue: string = 'Defult value from child';

  @ViewChild(TestDirective) myDir!: TestDirective;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  clickMe() {
    alert(this.nameValue);
    var text = this.renderer.createText(' this text is created by renderer');
    this.renderer.appendChild(this.childPara.nativeElement, text);
  }
  //------------With Content Child we allways use ngAfterContentInit----------//
  ngAfterContentInit(): void {
    console.log(this.childPara);
    this.renderer.setStyle(this.childPara.nativeElement, 'color', 'red');
  }

  changeColor(color: string) {
    this.myDir.changeBg(color);
  }
}
