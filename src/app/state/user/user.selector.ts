import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

// it is a whole state, eg. { users: [], loading: false, loaded: false, error: null }
export const selectUserState = createFeatureSelector<UserState>('users');


// here we are getting the Users[]
export const selectUsers = createSelector(selectUserState, (state) => state.users);


// fetch loading here
export const selectLoading = createSelector(selectUserState, (state) => state.loading);


// fetch loaded here
export const selectLoaded = createSelector(selectUserState, (state) => state.loaded);

// fetch error here
export const selectError = createSelector(selectUserState, (state) => state.error);

