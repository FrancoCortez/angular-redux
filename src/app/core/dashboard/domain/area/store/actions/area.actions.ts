import { Action } from '@ngrx/store';
import { AreaResponseModel } from 'src/app/models/domain/area/area-response-model';

export enum AreaActionType {
  AREA_FIND_ALL = '[AREA] Find all area',
  AREA_FIND_ALL_SUCCESS = '[AREA] Find all area success',
  AREA_FIND_ALL_FAIL = '[AREA] Find all area fail'
}

export class AreaFindAll implements Action {
  readonly type = AreaActionType.AREA_FIND_ALL;
}
export class AreaFindAllSuccess implements Action {
  readonly type = AreaActionType.AREA_FIND_ALL_SUCCESS;
  constructor(public payload: AreaResponseModel[]) {}
}
export class AreaFindAllFail implements Action {
  readonly type = AreaActionType.AREA_FIND_ALL_FAIL;
  constructor(public payload: any) {}
}



export type areaActions = AreaFindAll | AreaFindAllSuccess | AreaFindAllFail;
