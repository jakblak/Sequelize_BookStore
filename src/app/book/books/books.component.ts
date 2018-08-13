import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../../shared/interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.allBooks();
  }

  allBooks() {
    this.bookService.getBooks()
      .subscribe(
        (books: Book[]) => this.books = books
      );
  }
}
