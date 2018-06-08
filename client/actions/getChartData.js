import changeChartData from './changeChartData';

const getChartData = () => (
  dispatch => fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(res => res.json())
    .then(data => dispatch(changeChartData(data)))
);

export default getChartData;
