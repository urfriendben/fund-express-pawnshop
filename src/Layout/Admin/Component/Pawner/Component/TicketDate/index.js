import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Grid, Segment } from 'semantic-ui-react'
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class TicketDate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    console.log(date)
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            space1
          </Grid.Column>
          <Grid.Column mobile={48} tablet={16} computer={10}>
          <Segment padded>
            <label>Start Date</label>
            <DatePicker selected={this.state.date} onChange={this.handleChange} />
              </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={3}>
          space 2
        </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default TicketDate
