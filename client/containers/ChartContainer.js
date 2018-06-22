import { connect } from 'react-redux';
import Chart from '../components/Chart';

const mapStateToProps = (state, ownProps) => {
  let coinName = '';
  for (let i = 0; i < state.coinList.length; i += 1) {
    const coin = state.coinList[i];
    if (coin.symbol === ownProps.symbol) {
      coinName = coin.name;
      break;
    }
  }

  return {
    symbol: ownProps.symbol,
    name: coinName,
    chartData: state.symbols[ownProps.symbol] || [{ date: new Date(), price: 0 }],
  };
};

const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;

