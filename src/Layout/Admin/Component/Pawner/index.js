import React, { Component } from 'react';
import NewPawner from './Component/NewPawner';
import ItemList from './Component/ItemList';
import DatePicker from './Component/TicketDate';
export default class Pawner extends Component {
  render() {

    return (
      <div>
        <NewPawner/>
        <DatePicker/>
        <ItemList/>
      </div>
    );
  }
}
