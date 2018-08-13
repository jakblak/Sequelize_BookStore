import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: UsersComponent
}, {
  path: 'add-user',
  pathMatch: 'full',
  component: AddUserComponent
}, {
  // path: 'edit-user',
  path: ':id',
  pathMatch: 'full',
  component: UserEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
