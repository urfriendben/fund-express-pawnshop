import React, { Component } from 'react';
import { Segment, Modal, Header, Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

export default class Transactions extends Component {
  constructor() {
    super();
    this.state = {today:false,standard:true,critical:true};
  }

  row = (x,i) => {
    return(
      <div className={this.state.transaction == i ? "item active" : "item"} onClick={() => {this.setState({transaction:i})}}>
        <img className="ui middle aligned avatar image" src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/>
        <div className="content">
          <a className="header">Rachel</a>
          <div className="description">Pawned transaction <a><b>0010323</b></a> just now.</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ui stackable grid layout">
        <div className="ten wide column first-panel list-holder clear-horizontal-padding-right">
          <Segment basic className="second-panel clear-vertical-margin">
            <Button.Group>
              <Button onClick={() => {this.setState({today:!this.state.today})}}>{this.state.today ? "Today" : "This Week"}</Button>
              <Button.Or text=""/>
              <Button onClick={() => {this.state.standard ? this.setState({critical:true}) : null;this.setState({standard:!this.state.standard})}} color={this.state.standard ? "blue" : null}>Standard</Button>
              <Button onClick={() => {this.state.critical ? this.setState({standard:true}) : null;this.setState({critical:!this.state.critical})}} color={this.state.critical ? "orange" : null}>Critical</Button>
            </Button.Group>
          </Segment>
          <div>
            {[...Array(10)].map((x,i) => {
              return(
                <div className="ui list">
                  <MediaQuery maxDeviceWidth={768}>
                    <Modal trigger={this.row(x,i)} closeIcon>
                      <Header content="#transaction"/>
                      <Modal.Content>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button color="green">Renew</Button>
                      </Modal.Actions>
                    </Modal>
                  </MediaQuery>
                  <MediaQuery minDeviceWidth={768}>
                    {this.row(x,i)}
                  </MediaQuery>
                </div>
              );
            })}
          </div>
        </div>
        <div className="six wide column third-panel mobile-hidden">
        </div>
      </div>
    );
  }
}
