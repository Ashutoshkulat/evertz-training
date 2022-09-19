import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { productSuccess, reqProduct } from './product.actions';

@Injectable()
export class CoreEffects {

    allProduct$ = createEffect(()=> this.action$.pipe(
        ofType(reqProduct),
        switchMap(()=>this.apiservice.getAllData().pipe(
            map(products => productSuccess({products}))
        ))
    )
    )

    constructor(private action$: Actions, private apiservice: ApiService){}


}
