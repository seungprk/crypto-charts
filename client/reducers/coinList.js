const coinList = (state = [{ name: 'Bitcoin', symbol: 'BTC' }], action) => {
  switch (action.type) {
    case 'UPDATE_COIN_LIST':
      return action.coinList;
    default:
      return state;
  }
};

export default coinList;

