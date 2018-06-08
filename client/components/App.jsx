import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from '../stores/store';
import ChartContainer from '../containers/ChartContainer';

const Header = styled.header`
  margin: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
  font-size: 2em;
`;

const App = () => (
  <Provider store={store}>
    <div>
      <Header>CrypoCharts</Header>
      <ChartContainer name="BTC" />
      <ChartContainer name="ETH" />
    </div>
  </Provider>
);

export default App;

