import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    BookRoutingModule
  ],
  declarations: [BooksComponent, AddBookComponent]
})
export class BookModule { }
