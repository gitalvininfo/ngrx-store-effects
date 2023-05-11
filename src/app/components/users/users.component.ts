import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserSelectors from 'src/app/state/user/user.selector';
import * as UserActions from "../../state/user/user.actions";
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this._store.select(UserSelectors.selectUsers);
  loading$ = this._store.select(UserSelectors.selectLoading);
  loaded$ = this._store.select(UserSelectors.selectLoaded);
  error$ = this._store.select(UserSelectors.selectError)

  constructor(private _store: Store) {

  }

  ngOnInit(): void {
    this._store.dispatch(UserActions.loadUsers())
  }

  deleteUser(id: number): void {
    this._store.dispatch(UserActions.removeUser({ id: +id }));
  }

  addMore() {
    const user: User = { id: Math.floor(Math.random() * 1000) + 1, name: 'alvin', email: 'alvin@test.com' }
    this._store.dispatch(UserActions.addUser({ user }));
  }

}
