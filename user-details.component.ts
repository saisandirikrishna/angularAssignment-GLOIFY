import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
   public userDataArray:any
  constructor(private route:ActivatedRoute, private service:UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    console.log(id)
    this.service.userData(id).subscribe((data:any) => 
    {
      debugger
     this.userDataArray=data.data
     debugger
     console.log(this.userDataArray)
    })
  }

}
