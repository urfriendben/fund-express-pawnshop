import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './index.css';

import Dashboard from './Component/Dashboard';
import Transactions from './Component/Transactions';
import Customers from './Component/Customers';

export default class Admin extends Component {
  render() {
    return (
      <div className="layout-holder">
        <div className="ui menu-sidebar sidebar stackable bottom four item labelled icon menu">
          <div className="item">
          </div>
          <a className="item">
            <i className="id badge icon"></i>
            CUSTOMERS
          </a>
          <a className="item">
            <i className="id tasks icon"></i>
            TRANSACTIONS
          </a>
          <a className="item">
            <i className="bar chart icon"></i>
            ANALYTICS
          </a>
        </div>
        <Switch>
          <Route exact path="/admin/transactions" component={Transactions} />
          <Route exact path="/admin/customers" component={Customers} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}
