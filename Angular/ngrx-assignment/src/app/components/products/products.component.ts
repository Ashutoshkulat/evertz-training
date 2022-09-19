import { getProducts } from './state/product.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AppState } from 'src/app/store/app.state';
import { reqProduct } from './state/product.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$:Observable<Product[]>=this.store.select(getProducts);
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.products$ = this.store.select(getProducts)
    this.store.dispatch(reqProduct())
  }
}
