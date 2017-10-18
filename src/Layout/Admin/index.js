import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import Dashboard from './Component/Dashboard';
import Transactions from './Component/Transactions';
import Customers from './Component/Customers';

export default class Admin extends Component {
  render() {
    return (
      <div className="layout-holder">
        <div className="ui menu-sidebar sidebar stackable bottom four item labelled icon menu">
          <Link to="/admin" className="item">
          </Link>
          <Link to="/admin/customers" className="item">
            <i className="id badge icon"></i>
            CUSTOMERS
          </Link>
          <Link to="/admin/transactions" className="item">
            <i className="id tasks icon"></i>
            TRANSACTIONS
          </Link>
          <Link to="/admin/customers" className="item">
            <i className="bar chart icon"></i>
            ANALYTICS
          </Link>
        </div>
        <Switch>
          <Route exact path="/admin/transactions" component={Transactions} />
          <Route exact path="/admin/customers" component={Customers} />
          <Route path="/admin" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}
