import { combineReducers } from 'redux';
import symbols from './symbols';
import symbolsOrder from './symbolsOrder';
import coinList from './coinList';

const rootReducer = combineReducers({
  symbols,
  symbolsOrder,
  coinList,
});

export default rootReducer;

