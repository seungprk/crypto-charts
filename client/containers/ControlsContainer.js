import { connect } from 'react-redux';
import Controls from '../components/Controls';

const mapStateToProps = state => ({
  symbols: state.symbols,
});

const ControlsContainer = connect(mapStateToProps)(Controls);

export default ControlsContainer;

