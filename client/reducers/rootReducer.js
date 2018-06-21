import { combineReducers } from 'redux';
import symbols from './symbols';
import symbolsOrder from './symbolsOrder';

const rootReducer = combineReducers({
  symbols,
  symbolsOrder,
});

export default rootReducer;

