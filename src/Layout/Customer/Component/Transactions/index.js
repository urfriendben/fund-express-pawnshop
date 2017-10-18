import React, { Component } from 'react';
import { Grid, List, Segment, Accordion, Modal, Header, Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

export default class Transactions extends Component {
  constructor() {
    super();
    this.state = {today:false,standard:true,critical:true};
  }

  row = (x,i) => {
    var style = (this.state.transaction_num == i ? "item active" : "item");
    style += (i % 2 == 0 && this.state.transaction_num != i ? " renew" : "");
    style += (i % 3 == 0 && this.state.transaction_num != i ? " alert" : "");
    return(
      <div className={style} onClick={() => {this.setState({transaction_num:i,transaction_item_num:0,transaction:{id:"0010323"},renew:0})}}>
        <div className="content">
          <a className="header"><b>0010323</b></a>
          <div className="description">Pawned transaction just now.</div>
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
              <Button onClick={() => {this.state.standard ? this.setState({critical:true}) : null;this.setState({standard:!this.state.standard})}} color={this.state.standard ? "blue" : null}>Standard</Button>
              <Button onClick={() => {this.state.critical ? this.setState({standard:true}) : null;this.setState({critical:!this.state.critical})}} color={this.state.critical ? "orange" : null}>Critical</Button>
            </Button.Group>
          </Segment>
          <div>
            {[...Array(10)].map((x,i) => {
              var transaction = x;
              return(
                <div key={i} className="ui list">
                  <MediaQuery maxDeviceWidth={768}>
                    <Modal trigger={this.row(x,i)} closeIcon>
                      <Header content="#transaction"/>
                      <Modal.Content>
                        {/* Copy right bar code for display*/}
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
        <div className="six wide column panel-holder list-holder inverted third-panel mobile-hidden">
          {this.state.transaction != undefined ?
            <Grid columns="1">
              <Grid.Row>
                <Grid.Column>
                  <Header floated="left" content={this.state.transaction.id}/>
                  <Header sub floated="right">
                    created: 01/01/17<br/>updated: 02/01/17
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Accordion fluid styled>
                    {[...Array(5)].map((x,i) => {
                      return(
                        <div key={i}>
                          <Accordion.Title active={this.state.transaction_item_num === i} index={i} onClick={() => {this.setState({transaction_item_num:i})}}>
                            item {i}
                          </Accordion.Title>
                          <Accordion.Content active={this.state.transaction_item_num === i}>
                            content
                          </Accordion.Content>
                        </div>
                      );
                    })}
                  </Accordion>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Accordion fluid styled>
                    <Accordion.Title active={this.state.renew === 1} index={0} onClick={() => {this.setState({renew:(this.state.renew + 1) % 2})}}>
                      Renew transaction now?
                    </Accordion.Title>
                    <Accordion.Content active={this.state.renew === 1}>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column>
                            <Button floated="right" color="teal" content="Renew"/>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Accordion.Content>
                  </Accordion>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          : null}
        </div>
      </div>
    );
  }
}
