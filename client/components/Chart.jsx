import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chartjs from 'chart.js';
import store from '../stores/store';
import getChartData from '../actions/getChartData';

const Card = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 2px;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

const Title = styled.div`
  font-weight: bold;
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
          label: this.props.name,
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

    store.dispatch(getChartData());
  }

  componentDidUpdate() {
    const dates = [];
    const prices = [];

    Object.entries(this.props.data.bpi).forEach((tuple) => {
      dates.push(tuple[0]);
      prices.push(tuple[1]);
    });

    this.lineChart.data.labels = dates;
    this.lineChart.data.datasets[0].data = prices;
    this.lineChart.update();
  }

  render() {
    return (
      <Card>
        <Title>{this.props.name}</Title>
        <canvas ref={this.canvas} />
        <Links>
          <a href="https://www.coindesk.com/price/">Powered by CoinDesk</a>
        </Links>
      </Card>
    );
  }
}

Chart.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    bpi: PropTypes.object.isRequired,
  }).isRequired,
};

export default Chart;

