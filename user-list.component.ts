import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { UserService } from '../user.service';
import { userInterface } from '../userInterface';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

 public usersArray:any;
 public UserArray:any=[]
 public userData:userInterface[]=[]
  constructor(private users:UserService) { }

  ngOnInit(): void {
    this.users.getUser().subscribe((data:any) => 
    {
      this.UserArray=data.data
    })
  
  }

}
