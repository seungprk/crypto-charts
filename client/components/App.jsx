import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from '../stores/store';
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

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <Header>CrypoCharts</Header>
      <Controls />
      <ChartContainer name="BTC" />
      <ChartContainer name="ETH" />
    </Wrapper>
  </Provider>
);

export default App;

