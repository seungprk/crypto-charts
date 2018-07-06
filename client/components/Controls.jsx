import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import store from '../stores/store';
import addChart from '../actions/addChart';
import { Input, Button } from './styled/shared';

const Form = styled.form`
  display: inline-block;
`;

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ text: '' });

    const { coinList } = this.props;
    const text = this.state.text.toUpperCase();

    for (let i = 0; i < coinList.length; i += 1) {
      const coin = coinList[i];
      if (coin.name.toUpperCase() === text || coin.symbol === text) {
        store.dispatch(addChart(coin.symbol));
        return;
      }
    }
    alert('Invalid name!');
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Input type="text" placeholder="Add Cryptocurrency" value={this.state.text} onChange={this.handleChange} />
      </Form>
    );
  }
}

Controls.propTypes = {
  coinList: PropTypes.arrayOf(PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default Controls;

