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
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }
	
  render() {
  	 var modal = [];
    modal.push(
    	<div className="ui grid">
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
        <a className="btn" onClick={this.toggle}>Create</a>
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
      		 <h2 className="ui floated header">New Pawner</h2>
      		  <div class="ui clearing divider"></div>
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
      			{modal}
      		</div>
      		<div className="three wide column"></div>
        </div>

    );
  }
}


