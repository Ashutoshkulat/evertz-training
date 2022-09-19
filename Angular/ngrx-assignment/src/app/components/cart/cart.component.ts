import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AppState } from 'src/app/store/app.state';
import { deleteCart } from './state/cart.actions';
import { getCart } from './state/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products$!: Observable<Product[]>;
  grandTotal: number = 0;
  product: any;
  showForm: boolean = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getCart);
    this.showForm = false;

    this.store.select(getCart).subscribe((data) => {
      this.product = JSON.parse(JSON.stringify(data));
    });
    
     this.product.map((a: any) => {
       this.grandTotal += a.price;
     });
  }
  onDelete(id: number) {
    this.store.dispatch(deleteCart({ id }));
  }

  toHidecart() {
    this.showForm = true;
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.product.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
}
