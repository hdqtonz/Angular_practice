import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css'],
})
export class NgContainerComponent implements OnInit {
  books: any;
  display: boolean = true;
  constructor(private bookService: BooksService) {}

  obj = {
    data: 'hello world',
    name: 'test name',
  };

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res) => {
      this.books = res;
    });
  }
}
