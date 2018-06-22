import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chartjs from 'chart.js';
import store from '../stores/store';
import getChartData from '../actions/getChartData';
import ChartControls from './ChartControls';

const Card = styled.div`
  display: inline-block;
  width: 500px;
  background: #fff;
  border-radius: 2px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

const Header = styled.div`
  margin-bottom: 1rem;
`;

const Links = styled.div`
  margin-top: 1rem;
  font-size: 0.75rem;
`;

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.lineChart = new Chartjs(this.canvas.current, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: this.props.symbol,
          data: [],
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2,
        }],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            distribution: 'series',
            ticks: {
              source: 'labels',
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Closing price ($)',
            },
          }],
        },
      },
    });

    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    const dates = [];
    const prices = [];
    this.props.chartData.forEach((item) => {
      const dateStr = `${item.date.getMonth() + 1}/${item.date.getDate()}/${item.date.getFullYear()}`;
      dates.push(dateStr);
      prices.push(item.price);
    });

    this.lineChart.data.labels = dates;
    this.lineChart.data.datasets[0].data = prices;
    this.lineChart.update();
  }

  render() {
    return (
      <Card>
        <Header>
          <ChartControls symbol={this.props.symbol} />
        </Header>
        <canvas ref={this.canvas} />
        <Links>
          <a href="https://www.cryptocompare.com/" target="_blank" rel="noopener noreferrer">Powered by CrytpoCompare</a>
        </Links>
      </Card>
    );
  }
}

Chart.propTypes = {
  symbol: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    price: PropTypes.number,
  })).isRequired,
};

export default Chart;

