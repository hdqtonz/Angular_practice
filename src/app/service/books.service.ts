import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Books } from '../model/books.model';

let books: Books[] = [
  { id: 1, name: 'ramayan', author: 'Tulsi Dase', state: 'on' },
  { id: 2, name: 'Angular', author: 'Hiten Patel', state: 'on' },
  { id: 3, name: 'NodeJs', author: 'Kashyap trivedi', state: 'off' },
  { id: 4, name: 'ReactJs', author: 'Brijesh Amrutiya', state: 'on' },
  { id: 5, name: 'C#', author: 'Parth', state: 'on' },
];

let booksObserveble: Observable<any>;
booksObserveble = of(books);

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks(): Observable<Books[]> {
    return booksObserveble;
  }
}
