import { combineReducers } from 'redux';
import changeChartData from './changeChartData';

const rootReducer = combineReducers({ symbols: changeChartData });

export default rootReducer;

