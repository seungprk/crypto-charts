import { connect } from 'react-redux';
import Controls from '../components/Controls';

const mapStateToProps = state => ({
  symbols: state.symbols,
  coinList: state.coinList,
});

const ControlsContainer = connect(mapStateToProps)(Controls);

export default ControlsContainer;

