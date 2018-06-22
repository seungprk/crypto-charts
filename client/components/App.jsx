import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChartContainer from '../containers/ChartContainer';
import Controls from './Controls';

const Wrapper = styled.div`
  margin: 1rem;
`;

const Header = styled.header`
  margin: 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
  font-size: 2em;
`;

const App = props => (
  <Wrapper>
    <Header>CryptoCharts</Header>
    <Controls />
    {props.symbolsOrder.map(symbol => <ChartContainer symbol={symbol} key={symbol} />)}
  </Wrapper>
);

App.propTypes = {
  symbolsOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;

