import { addorder } from './../../order/state/order.actions';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AppState } from 'src/app/store/app.state';
import { getCart } from '../state/cart.selectors';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/order.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css'],
})
export class CartTotalComponent implements OnInit {
  @Input() grandTotal;
  @Input() products;
  addform!: FormGroup;
  total: number = 0;
  showBtn: boolean = false;
  products$!: Observable<Product[]>;
  product: any;

  constructor(private store: Store<AppState>, public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getCart);
    
    this.addform = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
    });
    this.store.select(getCart).subscribe((data) => {
      this.product = JSON.parse(JSON.stringify(data));
    });
  }

  addMember() {
    if (!this.addform.valid) {
      return;
    }

    const order: Order = {
      name: this.addform.value.name,
      phone: this.addform.value.phone,
      data:this.product
    };
    // console.log(order);
    
    this.store.dispatch(addorder({ order }));
    this.addform.reset()
    this.router.navigate(['/order'])
    
  }

  // openDialog() {
  //   this.dialog.open(DialogElementsExampleDialog);
  // }
}





// @Component({
//   selector: 'dialog-elements-example-dialog',
//   templateUrl: './dialog-elements-example-dialog.html',
// })
// export class DialogElementsExampleDialog implements OnInit {
//   addform!: FormGroup;
//   products$!: Observable<Product[]>;
//   constructor(private store: Store<AppState>) {}

//   ngOnInit(): void {
//     this.addform = new FormGroup({
//       name: new FormControl(null, [Validators.required]),
//       phone: new FormControl(null, [Validators.required]),
//     });
//     this.products$ = this.store.select(getCart);
//   }

//   addMember() {
//     if (!this.addform.valid) {
//       return;
//     }

//     const order: Order = {
//       name: this.addform.value.name,
//       phone: this.addform.value.phone,
//       ...this.products$
//     };

//     this.store.dispatch(addorder({order}))
//   }
// }

