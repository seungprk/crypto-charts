import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  symbols: Object.keys(state.symbols),
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;

