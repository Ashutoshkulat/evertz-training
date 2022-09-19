import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { searchProduct } from '../../products/state/product.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  public searchTerm: string = '';
  ngOnInit(): void {}
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.store.dispatch(searchProduct({searchProduct: this.searchTerm}))
  }
}
