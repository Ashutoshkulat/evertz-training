import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getOders } from '../order/state/order.selectors';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  order$!: Observable<Order[]>;
  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.order$ = this.store.select(getOders);
  }
}
