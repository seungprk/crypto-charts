const reorderChart = (symbol, direction) => ({
  type: 'REORDER_CHART',
  symbol,
  direction,
});

export default reorderChart;

