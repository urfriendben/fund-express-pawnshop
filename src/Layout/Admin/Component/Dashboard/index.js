import React, { Component } from 'react';
import { Modal, Image } from 'semantic-ui-react';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {renew_count:0};
  }

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
            {[...Array(3)].map((x,i) => {
              return(
                <div className="ui list">
                  <div className={i % 2 == 0 ? "item alert" : "item alert-alt"}>
                    <Image size="mini" shape="circular" src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/>
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
            <h1 className="ui header">Recent activity</h1>
            {[...Array(3)].map((x,i) => {
              return(
                <div className="ui list">
                  <div className="item renew"> {/*&& check for x.renew "item renew"*/}
                    <Image size="mini" shape="circular" src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/>
                    <div className="content">
                      <a className="header"><b>0010323</b></a>
                      <div className="description">Expiring in 3 days.</div>
                    </div>
                  </div>
                </div>
              );
              {/*if(x.renew)*/}
              this.setState({renew_count:this.state.renew_count+1});
            })}
            {[...Array(3)].map((x,i) => {
              return(
                <div className="ui list">
                  <div className="item">
                    <Image size="mini" shape="circular" src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/>
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
