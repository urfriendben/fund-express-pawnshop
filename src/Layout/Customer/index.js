import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import Transactions from './Component/Transactions';
import Dashboard from './Component/Dashboard';

export default class Customer extends Component {
  render() {
    return (
      <div className="layout-holder">
        <div className="ui menu-sidebar sidebar stackable bottom two item labelled icon menu">
          <Link as="a" to="/cust" className="item">
          </Link>
          <Link as="a" to="/cust/transactions" className="item">
            <i className="id tasks icon"></i>
            TRANSACTIONS
          </Link>
        </div>
        <Switch>
          <Route exact path="/cust/transactions" component={Transactions} />
          <Route path="/cust" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}
