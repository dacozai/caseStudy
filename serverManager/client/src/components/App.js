import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome/Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Header from './layout/Header';
import DashBoard from './leaads/Dashboard';

import {Provider} from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="container">
        <Router>
          <Switch>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>

        </Router>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
