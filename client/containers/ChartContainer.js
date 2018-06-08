import { connect } from 'react-redux';
import Chart from '../components/Chart';

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name,
  chartData: state.chartData,
});

const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;

