import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './index.css';

import Dashboard from './Component/Dashboard';
import Pawner from './Component/Pawner';
export default class Admin extends Component {
  
  render() {
    return (
      <div className="layout-holder">
        
        <Switch>
          <Route exact path="/new" component={Dashboard} />
          <Route exact path="" component={Pawner} />
        </Switch>
        
      </div>
    );
  }
}

