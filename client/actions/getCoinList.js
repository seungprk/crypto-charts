import updateCoinList from './updateCoinList';

const getCoinList = () => dispatch => fetch('/coinList')
  .then(res => res.json())
  .then((resJson) => {
    dispatch(updateCoinList(resJson));
  });

export default getCoinList;

