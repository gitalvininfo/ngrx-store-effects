import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/models/product.model";


export const productState = createFeatureSelector<ReadonlyArray<Product>>("products");

// export const productSelector = createSelector(productState);