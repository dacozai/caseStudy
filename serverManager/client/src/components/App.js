import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import {Provider} from 'react-redux';
import store from '../store';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
