import changeChartData from './changeChartData';

const getChartData = symbol => (
  dispatch => fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=30&aggregate=1`)
    .then(res => res.json())
    .then((obj) => {
      const formatted = obj.Data.map((item) => {
        const date = new Date(item.time * 1000);
        return { date, price: item.close };
      });
      dispatch(changeChartData(formatted));
    })
);

export default getChartData;
