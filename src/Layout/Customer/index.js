import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import Dashboard from './Component/Dashboard';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="*" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}
