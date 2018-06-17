import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import store from '../stores/store';
import getChartData from '../actions/getChartData';

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

class ChartControls extends React.Component {
  static padZeroes(int, len) {
    let str = int.toString();
    for (let i = str.length; i < len; i++)  {
      str = '0' + str;
    }
    return str;
  }

  static dateToInputStr(dateObj) {
    const year = ChartControls.padZeroes(dateObj.getFullYear(), 4);
    const month = ChartControls.padZeroes(dateObj.getMonth() + 1, 2);
    const date = ChartControls.padZeroes(dateObj.getDate(), 2);
    return `${year}-${month}-${date}`;
  }

  constructor(props) {
    super(props);
    const oneDayJS = 86400000;
    const today = new Date(Date.now());
    const monthBack = new Date(today - (oneDayJS * 30));

    this.state = {
      startDate: ChartControls.dateToInputStr(monthBack),
      endDate: ChartControls.dateToInputStr(today),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const dispatchAfterUpdate = () => {
      store.dispatch(getChartData(this.props.name, this.state.startDate, this.state.endDate));
    };

    if (e.target.id === 'startDate') {
      this.setState({ startDate: e.target.value }, dispatchAfterUpdate);
    } else if (e.target.id === 'endDate') {
      this.setState({ endDate: e.target.value }, dispatchAfterUpdate);
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>{this.props.name}</Title>
        <Input id="startDate" type="date" value={this.state.startDate} onChange={this.handleChange} />
        <Input id="endDate" type="date" value={this.state.endDate} onChange={this.handleChange} />
        <MoveButton>⇤</MoveButton>
        <MoveButton>⇥</MoveButton>
        <RemoveButton>X</RemoveButton>
      </Wrapper>
    );
  }
}

ChartControls.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ChartControls;

