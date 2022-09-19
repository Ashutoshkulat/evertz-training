import { getOders } from './state/order.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { getCart } from '../cart/state/cart.selectors';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order$!:Observable<Order[]>;
  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.order$ = this.store.select(getOders);
  }

}
