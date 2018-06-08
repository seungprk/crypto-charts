const changeChartData = (state = {}, action) => {
  const modState = Object.assign({}, state);

  switch (action.type) {
    case 'CHANGE_CHART_DATA':
      modState[action.symbol] = action.chartData;
      return modState;
    default:
      return modState;
  }
};

export default changeChartData;

