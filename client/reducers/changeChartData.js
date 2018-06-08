const changeChartData = (state = [{ date: new Date(), price: 0 }], action) => {
  switch (action.type) {
    case 'CHANGE_CHART_DATA':
      return action.data;
    default:
      return state;
  }
};

export default changeChartData;

