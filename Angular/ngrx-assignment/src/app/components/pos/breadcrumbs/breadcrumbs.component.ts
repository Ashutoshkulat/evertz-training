import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { SearchProduct } from '../../products/state/product.selectors';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
   
  searchKey!:string
  constructor(private store:Store<AppState>) { 

    this.store.select(SearchProduct).subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  ngOnInit(): void {
  }

}
