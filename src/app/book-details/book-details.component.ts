import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../model/books.model';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  books!: Books[];
  constructor(private bookService: BooksService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res: any) => {
      this.books = res;
      console.log(this.books);
    });
  }

  close() {
    this.router.navigate([{ outlets: { bookList: null } }]);
  }
}
