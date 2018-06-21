const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use(express.static('public'));

fetch('https://min-api.cryptocompare.com/data/all/coinlist')
  .catch((error) => {
    console.log('Failed to fetch coin list...');
    console.error(error);
  })
  .then(res => res.json())
  .then((resJson) => {
    const coinList = Object.keys(resJson.Data).map((key) => {
      const coin = resJson.Data[key];
      return {
        name: coin.CoinName,
        symbol: coin.Symbol,
      };
    });

    app.get('/coinlist', (req, res) => {
      res.send(coinList);
    });

    app.listen(3000, () => console.log('Listening on port 3000...'));
  });

