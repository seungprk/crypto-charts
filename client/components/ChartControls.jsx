import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import store from '../stores/store';
import getChartData from '../actions/getChartData';
import removeChart from '../actions/removeChart';
import reorderChart from '../actions/reorderChart';
import { Input, Button } from './styled/shared';

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const DatesWrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
`;

const Float = styled.div`
  display: inline-block;
  float: right;
  margin-left: auto;
  white-space: nowrap;
  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  display: inline-block;
  font-weight: bold;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
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
      <Wrapper>
        <Float>
          <Button onClick={this.handleReorder}>⇤</Button>
          <Button onClick={this.handleReorder}>⇥</Button>
          <Button onClick={this.handleRemove}>X</Button>
        </Float>
        <div>
          <Title>{this.props.title}</Title>
          <DatesWrapper>
            <Input id="startDate" type="date" value={this.state.startDate} onChange={this.handleChange} />
            <Input id="endDate" type="date" value={this.state.endDate} onChange={this.handleChange} />
          </DatesWrapper>
        </div>
      </Wrapper>
    );
  }
}

ChartControls.propTypes = {
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ChartControls;

