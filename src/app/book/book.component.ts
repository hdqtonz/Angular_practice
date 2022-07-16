import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../model/books.model';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Books[] = [];
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res: any) => {
      this.books = res;
      console.log(this.books);
    });
  }
}
