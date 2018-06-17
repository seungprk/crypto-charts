import changeChartData from './changeChartData';

const getChartData = (symbol, startDate, endDate) => {
  const oneDayUnix = 86400;
  const today = new Date(Date.now());
  today.setUTCHours(0);
  today.setUTCMinutes(0);
  today.setUTCSeconds(0);
  today.setUTCMilliseconds(0);

  const todayUnix = Math.floor(today.getTime() / 1000);
  let startUnix = Math.floor(Date.parse(startDate) / 1000);
  let endUnix = Math.floor(Date.parse(endDate) / 1000);

  if (endUnix > todayUnix - oneDayUnix) {
    endUnix = todayUnix - oneDayUnix;
  }
  endUnix += oneDayUnix;
  startUnix += oneDayUnix;

  const numDays = (endUnix - startUnix) / 60 / 60 / 24;

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
