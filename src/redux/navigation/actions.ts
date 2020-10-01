import {ViewType} from './../../navigation/StackNavigator';
import {ActionType, createAction} from 'typesafe-actions';

export const CHANGE_CURRENT = 'navigation/CHANGE_CURRENT';
export const SET_VIEW_PROPS = 'navigation/SET_VIEW_PROPS';

export const changeCurrent = createAction(CHANGE_CURRENT)<ViewType>();
export const setViewProps = createAction(SET_VIEW_PROPS)<any>();

const actions = {changeCurrent, setViewProps};
export type NavAction = ActionType<typeof actions>;
