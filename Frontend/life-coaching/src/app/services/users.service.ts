import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  host = 'http://localhost:4242'

   // login a user
   userLogin(userInfo: any): Observable<any>{
    return this.http.post(`${this.host}/users/login`, userInfo)
  }
}
