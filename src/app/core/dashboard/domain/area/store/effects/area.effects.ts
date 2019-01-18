import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromAreaActions from '../actions/area.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AraeService } from 'src/app/service/domain/area.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable()
export class AreaEffects {

  constructor(private actions$: Actions, private areaService: AraeService, private router: Router) { }

  @Effect()
  findAll$: Observable<Action> = this.actions$.pipe(
    ofType(fromAreaActions.AreaActionType.AREA_FIND_ALL),
    mergeMap(() =>
      this.areaService.findAll().pipe(
        map(data => new fromAreaActions.AreaFindAllSuccess(data)),
        catchError(error => of(new fromAreaActions.AreaFindAllFail(error)))
      )
    )
  );

  @Effect()
  findById$: Observable<Action> = this.actions$.pipe(
    ofType(fromAreaActions.AreaActionType.AREA_FIND_BY_ID),
    mergeMap((action: fromAreaActions.AreaFindById) =>
      this.areaService.findById(action.payload).pipe(
        map(data => new fromAreaActions.AreaFindByIdSuccess(data)),
        catchError(error => of(new fromAreaActions.AreaFindByIdFail(error)))
      )
    )
  );

  @Effect()
  add$: Observable<Action> = this.actions$.pipe(
    ofType(fromAreaActions.AreaActionType.AREA_ADD),
    mergeMap((action: fromAreaActions.AreaAdd) =>
      this.areaService.add(action.payload).pipe(
        map(data => {
          this.swalSuccess('Éxito', 'El área se a agregado con éxito.');
          return new fromAreaActions.AreaAddSuccess(data);
        }),
        catchError(error => of(new fromAreaActions.AreaAddFail(error)))
      )
    )
  );

  @Effect()
  edit$: Observable<Action> = this.actions$.pipe(
    ofType(fromAreaActions.AreaActionType.AREA_EDIT),
    mergeMap((action: fromAreaActions.AreaEdit) =>
      this.areaService.edit(action.payload, action._id).pipe(
        map(data => {
          this.swalSuccess('Éxito', 'El área se a editado con éxito.');
          this.router.navigate(['dashboard/area']);
          return new fromAreaActions.AreaEditSuccess(data);
        }),
        catchError(error => of(new fromAreaActions.AreaEditFail(error)))
      )
    )
  );

  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType(fromAreaActions.AreaActionType.AREA_DELETE),
    mergeMap((action: fromAreaActions.AreaDelete) =>
      this.areaService.deleteById(action.payload).pipe(
        map((resp) => {
          this.swalSuccess('Éxito', 'El área se a eliminado con éxito.');
          this.router.navigate(['dashboard/area']);
          return new fromAreaActions.AreaDeleteSuccess(action.payload);
        }),
        catchError(error => of(new fromAreaActions.AreaDeleteFail(error)))
      )
    )
  );

  private swalSuccess(title: string, msg: string) {
    Swal({
      title: title,
      text: msg,
      type: 'success',
      confirmButtonColor: '#932390',
      confirmButtonClass: 'mat-elevation-z2 mat-raised-button mat-primary',
      confirmButtonText: 'Aceptar'
    });
  }

  private swalError(title: string, msg: string) {
    Swal({
      title: title,
      text: msg,
      type: 'error',
      confirmButtonColor: '#932390',
      confirmButtonClass: 'mat-elevation-z2 mat-raised-button mat-primary',
      confirmButtonText: 'Aceptar'
    });
  }
}
