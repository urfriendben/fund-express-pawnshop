import React, { Component } from 'react';
import { Button, Icon, Step,Sticky} from 'semantic-ui-react';
import NewCustomer from './Component/NewCustomer';
import ItemList from './Component/ItemList';
import DatePicker from './Component/TicketDate';
import scrollToComponent from 'react-scroll-to-component';



export default class NewTicket extends Component {
  state = { active: true }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleToggle = () => this.setState({ active: !this.state.active })
  render() {
    const { active, contextRef } = this.state
    return (
      <div className="ui stackable grid layout">
        <div className="ten wide column first-panel list-holder clear-horizontal-padding-right">
          <NewCustomer className="NewCustomer" ref={(section) => { this.NewCustomer = section; }}/>
          <DatePicker className="DatePicker" ref={(section) => { this.DatePicker = section; }}/>
          <ItemList className="ItemList" ref={(section) => { this.ItemList = section; }}/>

        </div>
        <div className="six wide column third-panel mobile-hidden" ref={this.handleContextRef}>
        <Sticky context={contextRef}>


                                     <Step.Group vertical>
                                        <Step  onClick={() => scrollToComponent(this.NewCustomer, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>
                                          <Icon name='user' />
                                          <Step.Content>
                                            <Step.Title>Customer</Step.Title>
                                            <Step.Description>Move to Customer Section</Step.Description>
                                          </Step.Content>
                                        </Step>
                                        <Step  onClick={() => scrollToComponent(this.DatePicker, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})} >
                                          <Icon name='calendar' />
                                          <Step.Content>
                                            <Step.Title>Ticket Date</Step.Title>
                                            <Step.Description>Start & Expiry Date of ticket</Step.Description>
                                          </Step.Content>
                                        </Step>
                                        <Step onClick={() => scrollToComponent(this.ItemList, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>
                                          <Icon name='unordered list' />
                                          <Step.Content>
                                            <Step.Title>Item List</Step.Title>
                                            <Step.Description>List of item for pawn</Step.Description>
                                          </Step.Content>
                                        </Step>
                                        </Step.Group>

                </Sticky>
                </div>
      </div>
    );
  }
}
