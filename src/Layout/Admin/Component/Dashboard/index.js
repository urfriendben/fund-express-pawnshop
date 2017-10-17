import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="ui stackable grid layout">
        <div id="profile-holder" className="four wide column panel-holder first-panel">
          <div><Image size="medium" circular src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/></div>
          <p className="personal-info">Hi! Welcome back Alvin</p>
        </div>
        <div id="activity-holder" className="six wide column panel-holder second-panel list-holder">
          <div id="alert-holder">
            <h1 className="ui header red">Alert Issue(s)</h1>
            <div className="ui list">
              <div className="item alert">
                <img className="ui middle aligned avatar image" src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/>
                <div className="content">
                  <a className="header">Rachel</a>
                  <div className="description">Transaction <a><b>00704323</b></a> overdue for 1 day.</div>
                </div>
              </div>
            </div>
            <br/>
          </div>
          <div id="recent-holder">
            <br/>
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
        </div>
        <div id="quicklinks-holder" className="six wide column panel-holder third-panel list-holder">
          <h1 className="ui header">Quicklinks</h1>
          <div className="ui selection celled list">
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
