import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../../shared/interfaces/user';
import { BookService } from '../../book/book.service';
import { Book } from '../../shared/interfaces/book';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  foods: any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  selectedBook: any;
  selectedFav: any;
  user: User;
  readingList: {};
  books: Book[];
  favorite: any;

  constructor(private userService: UserService,
              private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // const param = +this.route.snapshot.paramMap.get('id');
    // if (param) {
    //   console.log(param);
    //   const id = param;
    //   this.getUser(id);
    // }
    // this.getBooks();
  }

  getUser(id: number) {
    this.userService.getUserDetails(id)
      .subscribe(
        (results: User) => {
          this.user = results;
          this.readingList = results.Reading;
          this.favorite = results.Favorite;
        }
      );
  }

  getBooks() {
    this.bookService.getBooks()
      .subscribe(
        (books: Book[]) => this.books = books
      );
  }

  saveBook(bookValue: number): void {
    const ID: {} = {
      bookId: bookValue,
      userId: this.user.id
    };
    console.log(ID);

    this.bookService.saveUserBook(ID)
      .subscribe(
        (data: any) => console.log(data),
        (err: any) => console.log(err),
        () => {
          this.selectedBook = {id: -1};
          this.getUser(this.user.id);
        }
      );
  }

  saveFavorite(favValue: number): void {
    const ID: {} = {
      bookTitle: favValue,
      userId: this.user.id
    };
    console.log(ID);

    this.userService.saveUserFavorite(ID)
      .subscribe(
        (data: any) => console.log(data),
        (err: any) => console.log(err),
        () => {
          this.selectedFav = { id: -1 };
          this.getUser(this.user.id);
       }
      );
  }

  // getUser(id: number) {
  //   this.userService.getUserDetails(id)
  //     .subscribe(
  //       (user: User) => this.user = user
  //     );
  // }
}
