import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; //added
import { User } from '../user.class'; //added


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

 users: User[] = []; //create property(empty array)

  constructor(
    private usrsvc: UserService //inject user service
  ) { }

  ngOnInit(): void {
    this.usrsvc.list().subscribe (
      users => {
        console.log("Users:", users)
        this.users = users;
      },

      err => {console.error (err);}
    ); 
  }

}
