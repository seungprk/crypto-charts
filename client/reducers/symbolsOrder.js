const swapMutate = (leftIndex, rightIndex, arr) => {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

const reorderChart = (state = ['BTC'], action) => {
  const modState = state.slice();
  const symbolIndex = modState.indexOf(action.symbol);

  switch (action.type) {
    case 'REORDER_CHART':
      if (action.direction === 'left' && modState[0] !== action.symbol) {
        swapMutate(symbolIndex, symbolIndex - 1, modState);
      } else if (action.direction === 'right' && modState[modState.length - 1] !== action.symbol) {
        swapMutate(symbolIndex, symbolIndex + 1, modState);
      }
      return modState;
    case 'ADD_CHART':
      if (modState.indexOf(action.symbol) === -1) {
        modState.push(action.symbol);
      }
      return modState;
    case 'REMOVE_CHART':
      modState.splice(symbolIndex, 1);
      return modState;
    default:
      return modState;
  }
};

export default reorderChart;

