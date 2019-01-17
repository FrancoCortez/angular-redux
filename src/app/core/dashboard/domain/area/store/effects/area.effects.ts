import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromAreaActions from '../actions/area.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AraeService } from 'src/app/service/domain/area.service';

@Injectable()
export class AreaEffects {

  constructor(private actions$: Actions, private areaService: AraeService) {}

  @Effect()
  findAll$: Observable<Action> = this.actions$.pipe(
    ofType(fromAreaActions.AreaActionType.AREA_FIND_ALL),
    mergeMap((action: fromAreaActions.AreaFindAll) => {
      console.log('EFECTO');
      return this.areaService.findAll().pipe(
        map(data => {
          return new fromAreaActions.AreaFindAllSuccess(data);
        }),
        catchError(error => of(new fromAreaActions.AreaFindAllFail(error)))
      );
    })
  );

}
