import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrls: ['./mypipe.component.css'],
})
export class MypipeComponent implements OnInit, OnDestroy {
  text = 'Hi!, My name is Hiten';
  date = new Date();
  nameSearch: string = '';
  Products: Array<any> = [
    { name: 'TV', price: '18000', avalible: 'Avalible' },
    { name: 'Mobile', price: '8000', avalible: 'Not Avalible' },
    { name: 'Laptop', price: '40000', avalible: 'Avalible' },
    { name: 'Apple', price: '80000', avalible: 'Avalible' },
    { name: 'Toaster', price: '2500', avalible: 'Avalible' },
    { name: 'Washing Machine', price: '30000', avalible: 'Avalible' },
  ];

  someName = [
    'Hiten Dalsaniya',
    'Kashyap Trivedi',
    'Brijesh Amrutiya',
    'rekshit',
    'Yogita Donga',
    'Meera',
    'Vibha Shudra',
  ];
  data: any = [
    { name: 'Hiten', last: 'Dalsaniya', handle: '@hdr' },
    { name: 'Piyush', last: 'kanani', handle: '@pkp' },
    { name: 'meera', last: 'Patel', handle: '@mrp' },
  ];

  constructor(private _header: MyserviceService) {}

  ngOnInit(): void {
    this._header.manuLink.next(true);
  }

  ngOnDestroy(): void {
    this._header.manuLink.next(false);
  }

  //------- For understanding Pure and Impure pipe ----//
  onAddNewProduct(add: any) {
    this.Products.push({
      id: 7,
      name: add.value,
      price: '3900',
      avalible: 'Avalible',
    });
  }
}
