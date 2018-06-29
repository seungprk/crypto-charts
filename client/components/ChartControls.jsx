import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import store from '../stores/store';
import getChartData from '../actions/getChartData';
import removeChart from '../actions/removeChart';
import reorderChart from '../actions/reorderChart';
import { Input, Button } from './styled/shared';

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const RightWrapper = styled.div`
  display: inline-block;
  margin-left: auto;
  white-space: nowrap;
`;

const Title = styled.span`
  font-weight: bold;
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
    this.handleRemove = this.handleRemove.bind(this);
    this.handleReorder = this.handleReorder.bind(this);
  }

  componentDidMount() {
    store.dispatch(getChartData(this.props.symbol, this.state.startDate, this.state.endDate));
  }

  handleChange(e) {
    const dispatchAfterUpdate = () => {
      store.dispatch(getChartData(this.props.symbol, this.state.startDate, this.state.endDate));
    };

    if (e.target.id === 'startDate') {
      this.setState({ startDate: e.target.value }, dispatchAfterUpdate);
    } else if (e.target.id === 'endDate') {
      this.setState({ endDate: e.target.value }, dispatchAfterUpdate);
    }
  }

  handleRemove() {
    store.dispatch(removeChart(this.props.symbol));
  }

  handleReorder(e) {
    if (e.target.textContent === '⇤') {
      store.dispatch(reorderChart(this.props.symbol, 'left'));
    } else if (e.target.textContent === '⇥') {
      store.dispatch(reorderChart(this.props.symbol, 'right'));
    }
  }

  render() {
    return (
      <FlexWrapper>
        <Title>{this.props.title}</Title>
        <RightWrapper>
          <Input id="startDate" type="date" value={this.state.startDate} onChange={this.handleChange} />
          <Input id="endDate" type="date" value={this.state.endDate} onChange={this.handleChange} />
          <Button onClick={this.handleReorder}>⇤</Button>
          <Button onClick={this.handleReorder}>⇥</Button>
          <Button onClick={this.handleRemove}>X</Button>
        </RightWrapper>
      </FlexWrapper>
    );
  }
}

ChartControls.propTypes = {
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ChartControls;

