import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{ // membalikkan observable yang bisa di subscribe
    return this.http.get<User[]>(this.apiUrl)
  }
}
