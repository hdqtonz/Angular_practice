import { Component, OnInit } from '@angular/core';
import { Books } from '../model/books.model';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css'],
})
export class NgTemplateComponent implements OnInit {
  displayDiv: boolean = true;
  displayTemplate: boolean = true;

  books: any;
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res: Books[]) => {
      this.books = res;
    });
  }
}
