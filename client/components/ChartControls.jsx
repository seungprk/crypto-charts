import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: flex;
`;

const Title = styled.span`
  font-weight: bold;
  margin-right: 1rem;
`;

const Input = styled.input`
  display: inline-block;
`;

const MoveButton = styled.button`
  display: inline-block;
`;

const RemoveButton = styled.button`
  display: inline-block;
  margin-left: auto;
`;

const ChartControls = props => (
  <Wrapper>
    <Title>{props.name}</Title>
    <Input type="date" />
    <Input type="date" />
    <MoveButton>⇤</MoveButton>
    <MoveButton>⇥</MoveButton>
    <RemoveButton>X</RemoveButton>
  </Wrapper>
);

ChartControls.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ChartControls;

