const coinList = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_COIN_LIST':
      console.log(action.coinList);
      return action.coinList;
    default:
      return state;
  }
};

export default coinList;

