import {createReducer} from 'typesafe-actions';
import {ViewType} from '../../navigation/StackNavigator';
import {CHANGE_CURRENT, NavAction, SET_VIEW_PROPS} from './actions';

export type NavState = {
  current: ViewType;
  viewProps: any;
};

const initialState: NavState = {
  current: 'Home',
  viewProps: '',
};

const NavReducer = createReducer<NavState, NavAction>(initialState, {
  [CHANGE_CURRENT]: (state, action) => ({...state, current: action.payload}),
  [SET_VIEW_PROPS]: (state, action) => ({...state, viewProps: action.payload}),
});

export default NavReducer;
