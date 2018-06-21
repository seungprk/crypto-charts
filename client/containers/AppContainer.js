import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  symbolsOrder: state.symbolsOrder,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;

