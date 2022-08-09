import { Injectable } from '@angular/core';
import { User } from '../types/User.type';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string =
    'https://prueba-tecnica-covinoc.herokuapp.com/api/user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/getUsers');
  }

  updateUser(user: User, userId?: number) {
    console.log(user);
    this.http
      .put<any>(this.baseUrl + `/updateUser/${userId}`, user, {
        headers: new HttpHeaders({
          'Content-Type': 'application/raw',
        }),
      })
      .subscribe((data) => {});
  }
}
