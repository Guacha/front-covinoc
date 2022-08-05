import { Injectable } from '@angular/core';
import {User} from '../types/User.type';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'https://prueba-tecnica-covinoc.herokuapp.com/api/user';

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "/getUsers");
  }
}
