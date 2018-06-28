import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './stores/store';
import AppContainer from './containers/AppContainer';

injectGlobal`
  html {
    background-color: #30364a;
  }
  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app'),
);

