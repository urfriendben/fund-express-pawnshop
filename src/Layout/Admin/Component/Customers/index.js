import React, { Component } from 'react';
import { Grid, Segment, Modal, Accordion, Header, Item, Button, Image, Label } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

export default class Customers extends Component {
  constructor() {
    super();
    this.state = {today:false,standard:true,critical:true};
  }

  row = (x,i) => {
    var style = this.state.customer_num == i ? "active" : null;
    return(
      <Item className={style} onClick={() => {this.setState({customer_num:i,customer_info_num:0,customer:{name:"test",tel:"93945954",mail:"test@email.com"}})}}>
        <Grid>
          <Grid.Column verticalAlign="middle">
            <Image size="tiny" circular src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png"/>
          </Grid.Column>
          <Grid.Column width="13" verticalAlign="middle">
            <a className="header">Rachel</a>
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <Label circular>1</Label>
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <Label circular color="red">1</Label>
          </Grid.Column>
        </Grid>
      </Item>
    );
  }

  render() {
    return (
      <div className="ui stackable grid layout">
        <div className="ten wide column first-panel list-holder clear-horizontal-padding-right">
          <Segment basic className="second-panel clear-vertical-margin">
          </Segment>
          <div>
            {[...Array(20)].map((x,i) => {
              return(
                <div key={i} className={i % 2 == 0 ? "ui list" : "ui list alternating"}>
                  <MediaQuery maxDeviceWidth={768}>
                    <Modal trigger={this.row(x,i)} closeIcon>
                      <Header content="#customer"/>
                      <Modal.Content>
                      </Modal.Content>
                      <Modal.Actions>
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
          {this.state.customer != undefined ?
            <Grid columns="1">
              <Grid.Row>
                <Grid.Column>
                  <Header floated="left" content={this.state.customer.name}/>
                  <Header sub floated="right">
                    created: 01/01/17<br/>updated: 02/01/17
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Accordion fluid styled>
                    <Accordion.Title active={this.state.customer_info_num === 0} index={0} onClick={() => {this.setState({customer_info_num:0})}}>
                      Contact Info
                    </Accordion.Title>
                    <Accordion.Content active={this.state.customer_info_num === 0}>
                      <a href={"tel:+65" + this.state.customer.tel}>{this.state.customer.tel}</a>
                      <br/>
                      <a href={"mailto:" + this.state.customer.mail}>{this.state.customer.mail}</a>
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
