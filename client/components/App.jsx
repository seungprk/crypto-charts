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

const RightLinks = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const A = styled.a`
  color: white;

  &:visited {
    color: white;
  }
`;

const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 1rem;
  vertical-align: middle;
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
          <RightLinks>
            <a href="https://github.com/seungprk/crypto-charts">
              <Icon src={githubIcon} alt="github icon" />
            </a>
            <A href="https://www.cryptocompare.com/" target="_blank" rel="noopener noreferrer">Powered by CrytpoCompare</A>
          </RightLinks>
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

