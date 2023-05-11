import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "/api/users"

  constructor(private _http: HttpClient) { }

  addUser(user: User) {
    return this._http.post(this.baseURL, user);
  }

  getUsers() {
    return this._http.get(this.baseURL).pipe(delay(400));
  }

  deleteUser(id: number) {
    return this._http.delete(`${this.baseURL}/${id}`)
  }
}
