import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css'],
})
export class CookieComponent implements OnInit {
  constructor(private cookieService: CookieService) {}
  cookieValue: any;
  ngOnInit(): void {}

  setSomeCookie() {
    this.cookieService.set('id', uuidv4());
    alert('Cookie set successfully!');
  }

  getCookieValue() {
    this.cookieValue = this.cookieService.get('id');
  }

  deleteCookieValue() {
    this.cookieValue = this.cookieService.delete('id');
  }

  checkCookie() {
    const cookieExists: boolean = this.cookieService.check('id');
    alert(cookieExists ? 'Cookie Avelible' : 'Cookie not avelible');
  }
}
