import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: BooksComponent
}, {
  path: 'add-book',
  pathMatch: 'full',
  component: AddBookComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
