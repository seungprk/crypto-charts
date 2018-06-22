import { connect } from 'react-redux';
import Chart from '../components/Chart';

const mapStateToProps = (state, ownProps) => ({
  symbol: ownProps.symbol,
  chartData: state.symbols[ownProps.symbol] || [{ date: new Date(), price: 0 }],
});

const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;

