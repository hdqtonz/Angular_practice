import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements OnInit, AfterViewInit {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('state') state!: ElementRef;

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.name.nativeElement.style.borderColor = 'orange';
    this.renderer.setStyle(this.name.nativeElement, 'backgroundColor', 'black');
    this.renderer.setStyle(this.name.nativeElement, 'color', 'white');
    this.state.nativeElement.style.borderColor = 'green';
  }

  ngOnInit(): void {}
}
