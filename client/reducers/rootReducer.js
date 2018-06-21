import { combineReducers } from 'redux';
import updateSymbols from './updateSymbols';
import reorderChart from './reorderChart';

const rootReducer = combineReducers({
  symbols: updateSymbols,
  symbolsOrder: reorderChart,
});

export default rootReducer;

