import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { productState } from 'src/app/state/product/product.selectors';
import * as ProductActions from "../../state/product/product.actions";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products$ = this._store.select(productState);

  constructor(private _store: Store<{ products: ReadonlyArray<Product> }>) {

  }

  addProduct(): void {
    const rnd = Date.now().toString()
    const product: Product = { id: rnd, name: `Product - ${rnd}`, price: 200 }

    this._store.dispatch(ProductActions.addProduct({ product }))
  }

  removeProduct(id: string): void {
    this._store.dispatch(ProductActions.removeProduct({ id }))
  }
}
