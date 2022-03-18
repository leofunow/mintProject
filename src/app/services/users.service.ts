import {Injectable} from '@angular/core';
import {Account} from "../models/account";
import {HttpService} from "./http.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: Account[] = [{id: 0, login: "admin", password: "admin", snils: 0}];
  private _user_id = -1;

  constructor(private http: HttpService) {

  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  private updateDB() {
    this.http.getUsers().subscribe((data) => {
      let users: Account[] = [];
      for (let key in data) {
        users.push((data as Record<string, Account>)[key]);
      }
      this._users = users;
    }, (error) => {
      console.log(error);
    });
  }

  get users(): Account[] {
    this.updateDB();
    return this._users;
  }

  addUser(login: string, password: string, snils: number) {
    this.updateDB();
    let user: Account = {
      id: this._users[this._users.length - 1].id + 1,
      login: login,
      snils: snils,
      password: password
    };
    this.users.push(user);
    this.http.addUser(user).subscribe();
  }

  set users(value: Account[]) {
    this._users = value;
  }
}
