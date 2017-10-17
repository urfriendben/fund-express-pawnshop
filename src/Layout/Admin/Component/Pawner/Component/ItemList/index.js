import React, { Component } from 'react'
import {Grid, Segment, Button, Checkbox, Icon, Table, Input  } from 'semantic-ui-react'

class ItemList extends Component {


  constructor (props) {
    super(props);
    this.state = {
      toggle: false,
      rows: []
    }
     this.addRow = this.addRow.bind(this);
  }

  addRow(){
     var rows = this.state.rows;
     rows.push({name:this.itemName.inputRef.value,weight:this.itemWeight.inputRef.value,type:this.itemType.inputRef.value,price:this.itemPrice.inputRef.value});
     this.setState({rows:rows});
    }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            space1
          </Grid.Column>
          <Grid.Column mobile={48} tablet={16} computer={10}>
          <Table celled striped>
              <Table.Header>
              <Table.Row>
                <Table.HeaderCell >Remove/Add Item</Table.HeaderCell>
                <Table.HeaderCell>Pawn Item Name</Table.HeaderCell>
                <Table.HeaderCell>Pawn Item Weight</Table.HeaderCell>
                <Table.HeaderCell>Pawn Item Type</Table.HeaderCell>
                <Table.HeaderCell>Pawn Item Price</Table.HeaderCell>
              </Table.Row>
              </Table.Header>
              <Table.Body>
                   {this.state.rows.map((data) => {return (

                     <Table.Row>
                     <Table.Cell><Button basic color='red'>
                       <Icon name='remove'/> Remove
                     </Button></Table.Cell>
                     <Table.Cell>{data.name}</Table.Cell>
                     <Table.Cell>{data.weight}</Table.Cell>
                     <Table.Cell>{data.type}</Table.Cell>
                     <Table.Cell>{data.price}</Table.Cell>
                     </Table.Row>
                   );})}
              </Table.Body>
              <Table.Footer full-Width>
                <Table.Row>
                <Table.Cell>
                   <Button primary fluid onClick={this.addRow} >ADD</Button>
                 </Table.Cell>
                <Table.Cell>
                    <Input focus fluid ref={input => this.itemName = input} placeholder='Enter Item Name' />
                 </Table.Cell>
                 <Table.Cell>
                    <Input focus  fluid ref={input => this.itemWeight = input} placeholder='Enter Item Weight' />
                  </Table.Cell>
                  <Table.Cell>
                     <Input focus  fluid ref={input => this.itemType = input} placeholder='Enter Item Type' />
                   </Table.Cell>
                   <Table.Cell>
                    <Input focus fluid ref={input => this.itemPrice = input} placeholder='Enter Item Price' />
                  </Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            space 2
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}


export default ItemList
