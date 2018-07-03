import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  padding: 0.25rem;
  border: 2px inset lightgray;
  border-radius: 3px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: white;
`;

const Button = styled.button`
  display: inline-block;
  border: 2px outset lightgray;
  border-radius: 2px;
  background-color: lightgray;
  margin-left: 0.5rem;
  height: 2em;
`;

export { Input, Button };

