import { combineReducers } from 'redux';
import updateSymbols from './updateSymbols';

const rootReducer = combineReducers({ symbols: updateSymbols });

export default rootReducer;

