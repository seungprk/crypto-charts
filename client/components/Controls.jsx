import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.text);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.text} onChange={this.handleChange} />
      </form>
    );
  }
}

export default Controls;

