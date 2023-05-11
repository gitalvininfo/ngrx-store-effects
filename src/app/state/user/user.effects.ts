// loadUsers, addUser, removeUser

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from "./user.actions";
import { UserService } from "src/app/services/user.service";
import { catchError, map, of, switchMap } from "rxjs";
import { User } from "src/app/models/user.model";

@Injectable()

export class UserEffects {

    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.loadUsers),
            switchMap(() =>
                this._userService.getUsers().pipe(
                    map((users) => UserActions.loadUsersSuccess({ users: users as ReadonlyArray<User> })),
                    catchError((error) => of(UserActions.loadUsersFailure({ error })))
                )
            )
        )
    }
    )

    addUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.addUser),
            switchMap(payload =>
                this._userService.addUser(payload.user).pipe(
                    map(data => UserActions.addUserSuccess({ user: payload.user })),
                    catchError(error => of(UserActions.addUserFailure({ error })))
                )
            )
        )
    })

    removeUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.removeUser),
            switchMap(payload =>
                this._userService.deleteUser(payload.id).pipe(
                    map(data => UserActions.removeUserSuccess({ id: payload.id })),
                    catchError(error => of(UserActions.removeUserFailure({ error })))
                )
            )
        )
    })


    constructor(private actions$: Actions, private _userService: UserService) {

    }

}