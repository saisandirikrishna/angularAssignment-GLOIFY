import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserClass } from './user-class';
import { Observable } from 'rxjs';
import { userInterface } from './userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  getUser():Observable<userInterface[]> {
    return this.http.get<userInterface[]>('https://reqres.in/api/users?delay=3')
  }
  userData(id:any) {
    return this.http.get('https://reqres.in/api/users?delay=3'+id)
  }
}
