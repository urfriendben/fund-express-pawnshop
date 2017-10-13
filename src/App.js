import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';

import Admin from './Layout/Admin';
import Customer from './Layout/Customer';

class App extends Component {
  constructor() {
    super();
    //this.state({});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <button className="ui menu-btn labeled icon huge button">
            <i className="sidebar icon"></i>
            Menu
          </button>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/customer" component={Customer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
