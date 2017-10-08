import React, { Component } from 'react';
import $ from 'jquery'; 

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

export default class Pawner extends Component {

	constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      toggle: false
    }
     this.addRow = this.addRow.bind(this);
        this.state = {
          rows: []
        }
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle

    }));
  }
  getInitialState() {
    return {
      userInput: ''
    };
  }
	 addRow() {
        var nextState = this.state;
        nextState.rows.push('<td>asdasdasdasd</td>');
        this.setState(nextState);
        console.log(this.refs.itemName.value)
        console.log(this.refs.itemWeight.value)
        console.log(this.refs.itemType.value)
        console.log(this.refs.itemPrice.value)
    }
    
  render() {
  	 var modal = [];
    modal.push(
    	<div className="stackable ui grid">
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">

        <form className="ui form">
        <h2 className="ui dividing header">Shipping Information</h2>
        <div className="field">
        	<label>Pawner IC</label>
        	<div className="fifteen wide field">
        	<input type="text" name="nric" placeholder="Enter your nric"/>
      		</div>
        </div>
          <div className="field">
          	<label>Name</label>
          	<div className="fifteen wide field">
          	<input type="text" name="name" placeholder="Enter your name"/>
        		</div>
          </div>
          <div className="three fields">
          		<div className="field">
			      <label>Race</label>
			      <select className="ui fluid dropdown">
			        <option value="">choose your race</option>
			    <option value="chinese">Chinese</option>
			    <option value="malay">Malay</option>
			    <option value="india">India</option>
			    <option value="eurasians">Eurasians</option>
			      </select>
			    </div>
			    <div className="field">
			      <label>Race</label>
			      <select className="ui fluid dropdown">
			        <option value="">choose your sex</option>
			    <option value="male">Male</option>
			    <option value="female">Female</option>
			    </select>
			    </div>
			    <div className="field">
			      <label>Race</label>
				      <select className="ui fluid dropdown">
				        <option value="">choose your nation</option>
				    <option value="Afghanistan">Afghanistan</option>
    				<option value="Aland Islands">Aland Islands</option>
				    </select>
			    </div>
			    
          	</div>
          	<div className="field">
			    	<label>Address</label>
			    	<div className="fields">
			    		<div className="fifteen wide field">
					        <input type="text" name="address" placeholder="Address"/>
					     </div>
			    	</div>
			</div>
			<div className="five field">
			      <label>Tel</label>
			      <div className="field">
					        <input type="text" name="phone" placeholder="phone number"/>
					</div>
			    </div>
			    <div className="five field">
			      <label>Sms no</label>
			      <div className="field">
					<input type="text" name="sms" placeholder="Sms number"/>
				 </div>
			    </div>
        </form>
      </div>
      <div className="modal-footer">
        <a className="btn" onClick={this.onCreate}>Create</a>
        <a className="btn" onClick={this.toggle}>Cancel</a>
      </div>
      </div>
    </div>
    );
    return (
      <div className="stackable ui grid">
      <div className="three wide column"></div>
          <div className="ten wide column">
           <div className="ui segment">
           <div className="ui top attached large label">New Pawner</div>
            <div className="ui clearing divider"></div>
            <form className="ui form">
              <div className="field">
              <label>First Name</label>
              <div className="ui action input">
              <input type="text" placeholder="name"/>
              <a className="ui btn-large" onClick={this.toggle} >ADD</a>
              </div>
            </div>
            </form>
            </div>
          </div>
          <div className="three wide column"></div>
          <div className="three wide column"></div>
          <div className="ten wide column">
           <div className="ui segment">
           <div className="ui top attached large label">General Info</div>
            <div className="ui clearing divider"></div>
            <form className="ui form">
              <div className="field">
              <label>Pawn Date</label>
                
            </div>
            </form>
            </div>
          </div>
          <div className="three wide column"></div>
          <div className="three wide column"></div>
          <div className="ten wide column">
           <div className="ui segment">
           <div className="ui top attached large label">Item List</div>
            <div className="ui clearing divider"></div>
              <table className="ui compact celled definition table">
              <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Weight</th>
                    <th>Type</th>
                    <th>Price</th>
                  </tr>
                </thead>
                   <tbody>
                     <tr>
                    <td className="collapsing">
                        <div className="ui checkbox">
                      <input type="checkbox" name="example"/>
                      <label></label>
                    </div>
                    </td>
                    <td>John Lilki</td>
                      <td>September 14, 2013</td>
                      <td>jhlilk22@yahoo.com</td>
                      <td>No</td>
                  </tr>
                  <tr>
                    <td className="collapsing">
                        <div className="ui checkbox">
                      <input type="checkbox" name="example"/>
                      <label></label>
                    </div>
                    </td>
                    <td>John Lilki</td>
                      <td>September 14, 2013</td>
                      <td>jhlilk22@yahoo.com</td>
                      <td>No</td>
                  </tr>
                  <tr>
                    <td className="collapsing">
                        <div className="ui checkbox">
                      <input type="checkbox" name="example"/>
                      <label></label>
                    </div>
                    </td>
                    <td>John Lilki</td>
                      <td>September 14, 2013</td>
                      <td>jhlilk22@yahoo.com</td>
                      <td>No</td>
                  </tr>

                  {this.state.rows.map(row => <tr><td>asdasd</td></tr>)}
                   
                   </tbody>
                    <tfoot className="full-width">
                    <tr>
                          <th><button className="ui right floated small primary labeled icon button" onClick={this.addRow}>
                              <i className="plus icon"></i> Add Item
                            </button></th>
                          <th>
                            <td><input type="text" id="itemName" name="name" placeholder="Enter Name"  ref="itemName" /></td>
                          </th>
                            <th>
                            <td><input type="text" id="itemWeight" name="weight" placeholder="Enter Weight" ref="itemWeight" /></td>
                          </th>
                          <th>
                            <td><input type="text" id="itemType" name="type" placeholder="Enter Type" ref="itemType"/></td>
                          </th>
                          <th>
                            <td><input type="text" id="itemPrice" name="price" placeholder="Enter Price" ref="itemPrice" /></td>
                          </th>
                        </tr>
                    </tfoot>
              </table>
            </div>
          </div>
          {modal}
          <div className="three wide column"></div>

        </div>
    );
  }
}


