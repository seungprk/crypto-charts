const updateSymbols = (state = { BTC: [] }, action) => {
  const modState = Object.assign({}, state);

  switch (action.type) {
    case 'CHANGE_CHART_DATA':
      modState[action.symbol] = action.chartData;
      return modState;
    case 'REMOVE_CHART':
      delete modState[action.symbol];
      return modState;
    default:
      return modState;
  }
};

export default updateSymbols;

