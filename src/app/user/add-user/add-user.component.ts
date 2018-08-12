import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/interfaces/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  saveUser(formValues: any): void {
    const newUser: User = <User>formValues;
    console.log(newUser);

    this.userService.addUser(newUser)
      .subscribe(
        (data: User) => console.log(data),
        (err: any) => console.log(err),
        () => this.router.navigate(['/books'])
      );
  }
}
