import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor() {}

  user: Object = {
    name: 'Hiten',
    username: 'dhrpatel',
    password: 'mypassword',
  };

  ngOnInit(): void {
    if (window.localStorage) {
      localStorage.setItem('localData', JSON.stringify(this.user));
      alert('supported');
    }

    localStorage.setItem('localData', JSON.stringify(this.user));
    localStorage.setItem('userData', JSON.stringify(this.user));

    sessionStorage.setItem('sessionData', JSON.stringify(this.user));
    // localStorage.removeItem('localData'); remove Data from localstorage using key
  }
}
