import changeChartData from './changeChartData';

const getChartData = (symbol, startDate, endDate) => {
  const isBothDatesSet = !!(startDate && endDate);
  const startUnix = Math.floor(Date.parse(startDate) / 1000);
  const endUnix = endDate ? Math.floor(Date.parse(endDate) / 1000) : Math.floor(Date.now() / 1000);
  const numDays = isBothDatesSet ? (endUnix - startUnix) / 60 / 60 / 24 : 30;

  return dispatch => fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&toTs=${endUnix}&limit=${numDays}&aggregate=1`)
    .then(res => res.json())
    .then((obj) => {
      if (obj.Response === 'Error') {
        alert('Data not found');
        return;
      }
      const formatted = obj.Data.map((item) => {
        const date = new Date(item.time * 1000);
        return { date, price: item.close };
      });
      dispatch(changeChartData(symbol, formatted));
    });
};

export default getChartData;
