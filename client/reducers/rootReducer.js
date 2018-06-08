import { combineReducers } from 'redux';
import changeChartData from './changeChartData';

const rootReducer = combineReducers({ chartData: changeChartData });

export default rootReducer;

