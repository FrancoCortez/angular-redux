import { areaActions, AreaActionType } from '../actions/area.actions';
import { AreaResponseModel } from 'src/app/models/domain/area/area-response-model';

export interface AreaState {
  actionCrud: boolean;
  error: any;
  areas: AreaResponseModel[];
  area: AreaResponseModel;
  _id: string;
  areasLoader: boolean;
  areasLoading: boolean;
}

export interface AppState {
  area: AreaState;
}

const initAreaState: AreaState = {
  actionCrud: false,
  error: null,
  areas: [],
  area: null,
  _id: '',
  areasLoader: false,
  areasLoading: false,
};

export function areaReducer (state = initAreaState, actions: areaActions): AreaState {
  switch (actions.type) {

    case AreaActionType.AREA_FIND_ALL: return {
      ...state,
      error: null,
      actionCrud: false,
      areasLoader: false,
      areasLoading: true,
    };
    case AreaActionType.AREA_FIND_ALL_SUCCESS: return {
      ...state,
      areas: [...actions.payload],
      error: null,
      actionCrud: false,
      areasLoader: true,
      areasLoading: false,
    };
    case AreaActionType.AREA_FIND_ALL_FAIL: return {
      ...state,
      error: actions.payload,
      actionCrud: false,
      areasLoader: false,
      areasLoading: false,
      areas: []
    };


    case AreaActionType.AREA_FIND_BY_ID: return {
      ...state,
      error: null,
      _id: actions.payload,
      actionCrud: false,
      areasLoader: false,
      areasLoading: true,
    };
    case AreaActionType.AREA_FIND_BY_ID_SUCCESS: return {
      ...state,
      area: actions.payload,
      error: null,
      actionCrud: false,
      areasLoader: true,
      areasLoading: false,
    };
    case AreaActionType.AREA_FIND_BY_ID_FAIL: return {
      ...state,
      error: actions.payload,
      actionCrud: false,
      areasLoader: false,
      areasLoading: false,
      area: null
    };






    case AreaActionType.AREA_ADD: return {
      ...state,
      error: null,
      actionCrud: true,
      areasLoader: false,
      areasLoading: false,
    };
    case AreaActionType.AREA_ADD_SUCCESS: return {
      ...state,
      error: null,
      actionCrud: false,
      areasLoader: false,
      areasLoading: false,
      areas: [...state.areas, {_id: actions.payload._id, name: actions.payload.name, description: actions.payload.description} ]
    };
    case AreaActionType.AREA_ADD_FAIL: return {
      ...state,
      error: actions.payload,
      actionCrud: false,
      areasLoader: false,
      areasLoading: false,
    };


    case AreaActionType.AREA_EDIT: return {
      ...state,
      error: null,
      _id: actions._id,
      actionCrud: true,
      areasLoader: false,
      areasLoading: false,
    };
    case AreaActionType.AREA_EDIT_SUCCESS: return {
      ...state,
      error: null,
      actionCrud: false,
      areasLoader: false,
      areasLoading: false,
      areas: [...state.areas, {_id: actions.payload._id, name: actions.payload.name, description: actions.payload.description} ]
    };
    case AreaActionType.AREA_EDIT_FAIL: return {
      ...state,
      error: actions.payload,
      actionCrud: false,
      areasLoader: false,
      areasLoading: false,
    };


    case AreaActionType.AREA_DELETE: return {
      ...state,
      error: null,
      _id: actions.payload,
      actionCrud: true,
      areasLoader: false,
      areasLoading: false,
    };
    case AreaActionType.AREA_DELETE_SUCCESS: return {
      ...state,
      error: null,
      actionCrud: false,
      areasLoader: false,
      areasLoading: false,
      areas: [...state.areas.filter(fil => fil._id !== actions.payload)]
    };
    case AreaActionType.AREA_DELETE_FAIL: return {
      ...state,
      error: actions.payload,
      actionCrud: false,
      areasLoader: false,
      areasLoading: false,
      _id: ''
    };

    default: return state;
  }
}
