import React from 'react';
import ReactDOM from 'react-dom';
import store from './state-manager/store';
import { Provider } from 'react-redux';

import './styles/index.css';
import { App } from './containers';
import './styles/semantic/dist/semantic.min.css';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(

      <Provider store={store}>
        <App />
      </Provider>,

	document.getElementById('root')
);
