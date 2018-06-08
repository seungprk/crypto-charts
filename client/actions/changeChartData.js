const changeChartData = (symbol, chartData) => ({
  type: 'CHANGE_CHART_DATA',
  symbol,
  chartData,
});

export default changeChartData;

