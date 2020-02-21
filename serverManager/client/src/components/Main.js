import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Welcome from './validus/Welcome';
import MyDashBoard from './validus/Dashboard';
import NewCall from './validus/Newcall';

export class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={MyDashBoard} />
          <Route exact path="/newcall" component={NewCall} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;
