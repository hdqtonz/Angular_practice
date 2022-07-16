import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // localStorage.clear();
    let data: any = localStorage.getItem('localData');
    JSON.parse(data);
    console.log(data);
    // console.log(localStorage.getItem('localData'));
    // console.log(sessionStorage.getItem('sessionData'));
    // console.log(localStorage.getItem('userData'));

    sessionStorage.removeItem('sessionData');

    if (sessionStorage.length > 0) {
      alert('Data Avelible');
    } else {
      alert('Data not Avliable');
    }
  }
}
