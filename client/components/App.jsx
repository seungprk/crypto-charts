import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChartContainer from '../containers/ChartContainer';
import ControlsContainer from '../containers/ControlsContainer';
import store from '../stores/store';
import getCoinList from '../actions/getCoinList';

const Wrapper = styled.div`
  background-color: #c4d0ee;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #30364a;
  color: white;
`;

const Title = styled.span`
  font-size: 2em;
`;

class App extends React.Component {
  componentDidMount() {
    store.dispatch(getCoinList());
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Title>CryptoCharts</Title>
          <ControlsContainer />
        </Header>
        {this.props.symbolsOrder.map(symbol => <ChartContainer symbol={symbol} key={symbol} />)}
      </Wrapper>
    );
  }
}

App.propTypes = {
  symbolsOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;

