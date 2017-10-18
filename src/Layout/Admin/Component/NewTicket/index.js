import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import NewCustomer from './Component/NewCustomer';
import ItemList from './Component/ItemList';
import DatePicker from './Component/TicketDate';
import scrollToComponent from 'react-scroll-to-component';



export default class NewTicket extends Component {
  render() {

    return (
      <div className="ui stackable grid layout">
        <div className="ten wide column first-panel list-holder clear-horizontal-padding-right">
          <NewCustomer className="NewCustomer" ref={(section) => { this.NewCustomer = section; }}/>
          <DatePicker className="DatePicker" ref={(section) => { this.DatePicker = section; }}/>
          <ItemList className="ItemList" ref={(section) => { this.ItemList = section; }}/>

        </div>
        <div className="six wide column third-panel mobile-hidden">
         <Button fluid animated='fade' onClick={() => scrollToComponent(this.NewCustomer, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>
            <Button.Content visible>
              Customer
              </Button.Content>
              <Button.Content hidden>
                Move to Customer detail
              </Button.Content>
         </Button>
         <Button fluid animated='fade' onClick={() => scrollToComponent(this.DatePicker, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>
            <Button.Content visible>
              Ticket Date
              </Button.Content>
              <Button.Content hidden>
                Move to Ticket Date details
              </Button.Content>
         </Button>
         <Button fluid animated='fade' onClick={() => scrollToComponent(this.ItemList, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>
            <Button.Content visible>
              ItemList
              </Button.Content>
              <Button.Content hidden>
                Move to item table
              </Button.Content>
         </Button>
        </div>
      </div>
    );
  }
}
