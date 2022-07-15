import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectBehaviorService {
  constructor() {}

  // userName = new Subject<any>();
  userName = new BehaviorSubject<any>('Shine Infosoft');
}
