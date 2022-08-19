import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productlist: any;

  searchKey: string = '';

  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getAllData().subscribe((res) => {
      this.productlist = res;
    });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
