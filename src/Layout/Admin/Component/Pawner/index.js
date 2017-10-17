import React, { Component } from 'react';
import NewPawner from './Component/NewPawner';
import ItemList from './Component/ItemList';
import DatePicker from './Component/TicketDate';
export default class Pawner extends Component {
  render() {

    return (
      <div className="ui stackable grid layout">
        <div className="ten wide column first-panel list-holder clear-horizontal-padding-right">
          <NewPawner/>
          <DatePicker/>
          <ItemList/>
        </div>
        <div className="six wide column third-panel mobile-hidden">
        </div>
      </div>
    );
  }
}
