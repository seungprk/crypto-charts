import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chartjs from 'chart.js';
import ChartControls from './ChartControls';

const Card = styled.div`
  box-sizing: border-box
  display: inline-block;
  width: calc(50% - 0.5rem);
  min-width: 500px;
  background: #fff;
  border-radius: 2px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:nth-child(even) {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
    min-width: unset;
  }
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
          borderColor: '#5886af',
        }],
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          displayColors: false,
          callbacks: {
            label: tooltipItem => `$${tooltipItem.yLabel.toLocaleString()}`,
          },
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
            ticks: {
              callback: value => `$${value.toLocaleString()}`,
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
        <ChartControls title={`${this.props.name} (${this.props.symbol})`} symbol={this.props.symbol} />
        <canvas ref={this.canvas} />
      </Card>
    );
  }
}

Chart.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    price: PropTypes.number,
  })).isRequired,
};

export default Chart;

