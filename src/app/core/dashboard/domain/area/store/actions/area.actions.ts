import { Action } from '@ngrx/store';
import { AreaResponseModel } from 'src/app/models/domain/area/area-response-model';
import { AreaRequestModel } from 'src/app/models/domain/area/area-request-model';
import { AreaModelDetail } from 'src/app/models/domain/area/area.model';

export enum AreaActionType {
  AREA_FIND_ALL = '[AREA] Find all area',
  AREA_FIND_ALL_SUCCESS = '[AREA] Find all area success',
  AREA_FIND_ALL_FAIL = '[AREA] Find all area fail',

  AREA_FIND_BY_ID = '[AREA] Find by id area',
  AREA_FIND_BY_ID_SUCCESS = '[AREA] Find by id area success',
  AREA_FIND_BY_ID_FAIL = '[AREA] Find by id area fail',

  AREA_ADD = '[AREA] Add area',
  AREA_ADD_SUCCESS = '[AREA] Add area success',
  AREA_ADD_FAIL = '[AREA] Add area fail',

  AREA_EDIT = '[AREA] Edit area',
  AREA_EDIT_SUCCESS = '[AREA] Edit area success',
  AREA_EDIT_FAIL = '[AREA] Edit area fail',

  AREA_DELETE = '[AREA] Delete area',
  AREA_DELETE_SUCCESS = '[AREA] Delete area success',
  AREA_DELETE_FAIL = '[AREA] Delete area fail'
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


export class AreaFindById implements Action {
  readonly type = AreaActionType.AREA_FIND_BY_ID;
  constructor(public payload: string) {}
}
export class AreaFindByIdSuccess implements Action {
  readonly type = AreaActionType.AREA_FIND_BY_ID_SUCCESS;
  constructor(public payload: AreaModelDetail) {}
}
export class AreaFindByIdFail implements Action {
  readonly type = AreaActionType.AREA_FIND_BY_ID_FAIL;
  constructor(public payload: any) {}
}



export class AreaAdd implements Action {
  readonly type = AreaActionType.AREA_ADD;
  constructor(public payload: AreaRequestModel) {}
}
export class AreaAddSuccess implements Action {
  readonly type = AreaActionType.AREA_ADD_SUCCESS;
  constructor(public payload: AreaResponseModel) {}
}
export class AreaAddFail implements Action {
  readonly type = AreaActionType.AREA_ADD_FAIL;
  constructor(public payload: any) {}
}

export class AreaEdit implements Action {
  readonly type = AreaActionType.AREA_EDIT;
  constructor(public payload: AreaRequestModel, public _id: string) {}
}
export class AreaEditSuccess implements Action {
  readonly type = AreaActionType.AREA_EDIT_SUCCESS;
  constructor(public payload: AreaResponseModel) {}
}
export class AreaEditFail implements Action {
  readonly type = AreaActionType.AREA_EDIT_FAIL;
  constructor(public payload: any) {}
}




export class AreaDelete implements Action {
  readonly type = AreaActionType.AREA_DELETE;
  constructor(public payload: string) {}
}
export class AreaDeleteSuccess implements Action {
  readonly type = AreaActionType.AREA_DELETE_SUCCESS;
  constructor(public payload: string) {}
}
export class AreaDeleteFail implements Action {
  readonly type = AreaActionType.AREA_DELETE_FAIL;
  constructor(public payload: any) {}
}


export type areaActions = AreaFindAll   | AreaFindAllSuccess     | AreaFindAllFail    |
                          AreaAdd       | AreaAddSuccess         | AreaAddFail        |
                          AreaFindById  | AreaFindByIdSuccess    |AreaFindByIdFail    |
                          AreaEdit      | AreaEditSuccess        | AreaEditFail       |
                          AreaDelete    | AreaDeleteSuccess      | AreaDeleteFail     ;
