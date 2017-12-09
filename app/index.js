'use strict';

import { Provider } from 'react-redux';
import store from './store';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

render(
  <Provider store={store}>
    <Router basename="/">
      <Main />
    </Router>
  </Provider>,
  document.getElementById('main')
);
