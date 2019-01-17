import { areaActions, AreaActionType } from '../actions/area.actions';
import { AreaResponseModel } from 'src/app/models/domain/area/area-response-model';

export interface AreaState {
  actionCrud: boolean;
  error: any;
  areas: AreaResponseModel[];
}

export interface AppState {
  area: AreaState;
}

const initAreaState: AreaState = {
  actionCrud: false,
  error: null,
  areas: [],
};

export function areaReducer (state = initAreaState, actions: areaActions): AreaState {
  switch (actions.type) {
    case AreaActionType.AREA_FIND_ALL: return {
      ...state,
      error: null,
      actionCrud: false
    };
    case AreaActionType.AREA_FIND_ALL_SUCCESS: return {
      ...state,
      areas: [...actions.payload]
    };
    case AreaActionType.AREA_FIND_ALL_FAIL: return {
      ...state,
      error: actions.payload
    };
    default: return state;
  }
}
