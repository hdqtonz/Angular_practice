import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor() {}

  headerContactDetails = new BehaviorSubject(false);
  headerLoginBtn = new BehaviorSubject(false);
  manuLink = new BehaviorSubject(false);
}
