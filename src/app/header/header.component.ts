import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  manuLink: boolean = false;
  conDitails: boolean = true;
  loginBtn: boolean = false;
  constructor(private _header: MyserviceService) {}

  // -----------------------------------------------------//
  // -------- For Understanding Behaviorsubject  ---------//
  // -----------------------------------------------------//

  //********Created Dynamic header/navbar********//

  ngOnInit(): void {
    this._header.headerContactDetails.subscribe((res) => {
      this.conDitails = res;
    });

    this._header.headerLoginBtn.subscribe((res) => {
      this.loginBtn = res;
    });

    this._header.manuLink.subscribe((res) => {
      this.manuLink = res;
    });
  }
}
