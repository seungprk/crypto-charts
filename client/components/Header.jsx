import React from 'react';
import styled from 'styled-components';
import ControlsContainer from '../containers/ControlsContainer';
import githubIcon from '../github.svg';

const Wrapper = styled.header`
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

const Header = () => (
  <Wrapper>
    <Title>CryptoCharts</Title>
    <ControlsContainer />
    <RightLinks>
      <Link href="https://github.com/seungprk/crypto-charts" target="_blank" rel="noopener noreferrer">
        <LinkText>Github Source</LinkText>
        <Icon src={githubIcon} alt="github icon" />
      </Link>
      <AttribLink href="https://www.cryptocompare.com/" target="_blank" rel="noopener noreferrer">Data from CryptoCompare</AttribLink>
    </RightLinks>
  </Wrapper>
);

export default Header;

