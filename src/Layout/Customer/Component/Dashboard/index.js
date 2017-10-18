import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="ui stackable grid layout">
        <div id="profile-holder" className="four wide column panel-holder first-panel">
          <div><Image size="medium" shape="circular" src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/></div>
          <p className="personal-info">Hi! Welcome back Alvin</p>
        </div>
        <div id="activity-holder" className="six wide column panel-holder second-panel list-holder">
          <div id="alert-holder">
            <h1 className="ui header red">Alert Issue(s)</h1>
            {[...Array(3)].map((x,i) => {
              return(
                <div key={i} className="ui list">
                  <div className={i % 2 == 0 ? "item alert" : "item alert-alt"}>
                    <div className="content">
                      <a className="header"><b>00704323</b></a>
                      <div className="description">Transaction overdue for 1 day.</div>
                    </div>
                  </div>
                </div>
              );
            })}
            <br/>
          </div>
          <div id="recent-holder">
            <br/>
            <h1 className="ui header">Renewal(s)</h1>
            {[...Array(3)].map((x,i) => {
              return(
                <div key={i} className="ui list">
                  <div className={i % 2 == 0 ? "item renew" : "item renew-alt"}>
                    <div className="content">
                      <a className="header"><b>0010323</b></a>
                      <div className="description">Expiring in 3 days.</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="quicklinks-holder" className="six wide column panel-holder third-panel list-holder">
          <h1 className="ui header">Notification(s)</h1>
          <div id="recent-holder">
            {[...Array(3)].map((x,i) => {
              return(
                <div key={i} className="ui list">
                  <div className="item">
                    <div className="content">
                      <a className="header"><b>0010323</b></a>
                      <div className="description">Renewal confirmed 1 day ago.</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
