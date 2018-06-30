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
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  background-color: #30364a;
  color: white;
`;

const Title = styled.span`
  font-size: 2em;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const ChartLayout = styled.div`
  margin: 0 1rem;
`;

const RightLinks = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

const LinkText = styled.span`
  vertical-align: middle;
  margin-right: 0.5rem;
  color: white;

  &:visited {
    color: white;
  }
`;

const Link = styled.a`
  color: white;
  white-space: nowrap;

  &:visited {
    color: white;
  }
`;

const AttribLink = Link.extend`
  margin-left: 1rem;
  white-space: unset;
  text-decoration: none;
  font-size: 0.75rem;
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
            <Link href="https://github.com/seungprk/crypto-charts" target="_blank" rel="noopener noreferrer">
              <LinkText>Github Source</LinkText>
              <Icon src={githubIcon} alt="github icon" />
            </Link>
            <AttribLink href="https://www.cryptocompare.com/" target="_blank" rel="noopener noreferrer">Powered by CryptoCompare</AttribLink>
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

