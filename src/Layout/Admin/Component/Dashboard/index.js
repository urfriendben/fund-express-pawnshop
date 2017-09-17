import React, { Component } from 'react';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="ui stackable grid">
        <div id="profile-holder" className="four wide column panel-holder">
          <img className="ui centered medium circular image" src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/>
          <p className="personal-info">Hi! Welcome back Alvin</p>
        </div>
        <div id="activity-holder" className="six wide column panel-holder">
          <h1 className="ui header">Recent activity</h1>
          <div className="ui list">
            <div className="item">
              <img className="ui middle aligned avatar image" src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/>
              <div className="content">
                <a className="header">Rachel</a>
                <div className="description">Pawned transaction <a><b>0010323</b></a> just now.</div>
              </div>
            </div>
            <div className="item renew">
              <img className="ui middle aligned avatar image" src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/>
              <div className="content">
                  <a className="header">David</a>
                <div className="description">Renewed transaction <a><b>0583483</b></a> 10 hours ago</div>
              </div>
            </div>
          </div>
        </div>
        <div id="quicklinks-holder" className="six wide column panel-holder">
          <h1 className="ui header">Quicklinks</h1>
          <div className="ui selection celled list">
            <div className="item">
              <i className="middle aligned plus icon"></i>
              <div className="content">
                <p className="header">Add Customer</p>
                <div className="description">New account and details.</div>
              </div>
            </div>
            <div className="item">
              <i className="middle aligned plus icon"></i>
              <div className="content">
                <p className="header">Add Transaction</p>
                <div className="description">New pawn for existing customer.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
