import React from 'react';
import styled from 'styled-components';
import store from '../stores/store';
import addChart from '../actions/addChart';

const Form = styled.form`
  margin-bottom: 1rem; 
`;

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      symbolsMap: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/coinlist')
      .then(res => res.json())
      .then((resJson) => {
        const symbolsMap = resJson.reduce((accum, coin) => {
          accum[coin.name.toUpperCase()] = coin.symbol;
          accum[coin.symbol] = coin.symbol;
          return accum;
        }, {});
        this.setState({ symbolsMap });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const symbol = this.state.symbolsMap[this.state.text.toUpperCase()];
    if (symbol) {
      store.dispatch(addChart(symbol));
    } else {
      alert('Invalid name!');
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button>Add Symbol</button>
      </Form>
    );
  }
}

export default Controls;

