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
      startDate: moment(),
      endDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    });
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
            <Grid columns="4">
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                <label>Start Date(mm/dd/yyyy)</label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange }
                    isClearable={true}
                    placeholderText="Please select a date(mm/dd/yyyy)"
                  />
                </Grid.Column>
                <Grid.Column>
                  <label>Expiry Date(mm/dd/yyyy)</label>
                  <DatePicker
                      selected={this.state.endDate}
                      onChange={this.handleEndDateChange }
                      isClearable={true}
                      placeholderText="Please select a date(mm/dd/yyyy)"
                    />
                  </Grid.Column>
                </Grid>
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
