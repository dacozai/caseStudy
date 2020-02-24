import {combineReducers} from 'redux';
import leadsReducer from './leads';
import callsReducer from './calls';

export default combineReducers({
  leadsReducer,
  callsReducer
});

