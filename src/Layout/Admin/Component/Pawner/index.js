import React, { Component } from 'react';
import NewPawner from './Component/NewPawner';
import ItemList from './Component/ItemList';
export default class Pawner extends Component {
  render() {

    return (
      <div>
        <NewPawner/>
        <ItemList/>
      </div>
    );
  }
}
