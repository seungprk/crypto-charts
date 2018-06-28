import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChartContainer from '../containers/ChartContainer';
import ControlsContainer from '../containers/ControlsContainer';
import store from '../stores/store';
import getCoinList from '../actions/getCoinList';
import githubIcon from '../github.svg';

const Wrapper = styled.div`
  background-color: #30364a;
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

const ChartLayout = styled.div`
  margin: 0 1rem;
`;

const A = styled.a`
  font-size: 0.75rem;
  color: white;
`;

const Icon = styled.img`
  height: 1rem;
  width: 1rem;
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
          <a href="#">
            <Icon src={githubIcon} alt="github icon" />
          </a>
          <A href="https://www.cryptocompare.com/" target="_blank" rel="noopener noreferrer">Powered by CrytpoCompare</A>
        </Header>
        <ChartLayout>
          {this.props.symbolsOrder.map(symbol => <ChartContainer symbol={symbol} key={symbol} />)}
        </ChartLayout>
      </Wrapper>
    );
  }
}

App.propTypes = {
  symbolsOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;

