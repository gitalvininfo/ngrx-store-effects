import { createReducer, on } from "@ngrx/store";
import * as ProductActions from "./product.actions";
import { Product } from "src/app/models/product.model";

export const initialState: ReadonlyArray<Product> = [];

export const productReducer = createReducer(
    initialState,
    on(ProductActions.addProduct, (state, { product }) => ([...state, product])),
    on(ProductActions.removeProduct, (state, { id }) => (state.filter(product => product.id != id)))
)