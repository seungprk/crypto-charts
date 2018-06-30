import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import ChartContainer from '../containers/ChartContainer';
import store from '../stores/store';
import getCoinList from '../actions/getCoinList';

const ChartLayout = styled.div`
  margin: 0 1rem;
`;

class App extends React.Component {
  componentDidMount() {
    store.dispatch(getCoinList());
  }

  render() {
    return (
      <div>
        <Header />
        <ChartLayout>
          {this.props.symbolsOrder.map(symbol => <ChartContainer symbol={symbol} key={symbol} />)}
        </ChartLayout>
      </div>
    );
  }
}

App.propTypes = {
  symbolsOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;

