import {combineReducers} from 'redux';
import NavReducer from './navigation/reducer';

const rootReducer = combineReducers({
  NavReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
