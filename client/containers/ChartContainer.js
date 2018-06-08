import { connect } from 'react-redux';
import Chart from '../components/Chart';

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name,
  chartData: state.symbols[ownProps.name] || [{ date: new Date(), price: 0 }],
});

const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;

