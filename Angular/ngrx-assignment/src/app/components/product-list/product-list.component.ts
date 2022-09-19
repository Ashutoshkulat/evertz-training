import { AppState } from './../../store/app.state';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from '../cart/state/cart.actions';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() product;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
  // cart
  addtocart(data){
    // this.cart.push(data)
    const cart:Product ={
      ...data
    }
    this.store.dispatch(addToCart({cart}))
    // console.log(cart);
    
  }
}
