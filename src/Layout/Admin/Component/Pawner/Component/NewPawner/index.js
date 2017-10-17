import React, { Component } from 'react'
import { Grid, Segment, Image, Form,Button, Header, Modal, Icon,Input, Dropdown,Popup } from 'semantic-ui-react'
const stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }]
const raceOptions = [ { key: 'CH', value: 'chinese', text: 'CHINESE' },{ key: 'IN', value: 'indian', text: 'INDIAN' },{ key: 'EU', value: 'eurasian', text: 'EURASIAN' },{ key: 'MY', value: 'malay', text: 'MALAY' }]
const sexOptions = [ { key: 'm', value: 'male', text: 'MALE' },{ key: 'f', value: 'female', text: 'FEMALE' }]
class NewPawner extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
     const { open, dimmer } = this.state
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={3}>
          </Grid.Column>
          <Grid.Column mobile={48} tablet={16} computer={10}>
              <Segment padded>

              <div class="ui">
              <Form>
              <Form.Input onChange={e => console.log(e.target.value)} label='Search Pawner' placeholder='Enter Pawner name' type='pawner'icon='users' iconPosition='left' />
              </Form>
              </div>
              <div class="ui">
              <Button primary onClick={this.show(true)}>New Pawner</Button>
              <Button >Search Pawner</Button>
              <Modal  dimmer={dimmer} open={open} onClose={this.close}>
                  <Header content='New Add Pawner' />
                  <Modal.Content>
                   <Form>
                     <Form.Input label='Pawner Nric' type='nric' placeholder='Enter Pawner nric' />
                     <Form.Input label='Pawner Name' type='name' placeholder='Enter Pawner name' />
                     <Dropdown placeholder='Race' search selection options={raceOptions} />
                     {' '}
                     <Dropdown placeholder='Sex' search selection options={sexOptions} />
                     {' '}
                     <Dropdown placeholder='Nation' search selection options={stateOptions} />
                     <Form.Input label='Address' type='address' placeholder='Enter Address' />
                      <Form.Input label='TEL' type='tel' placeholder='Enter Tel No' />
                     <Form.Input label='SMS' type='sms' placeholder='Enter SMS No' />
                    </Form>
                  </Modal.Content>
                  <Modal.Actions>
                  <Button basic color='red' onClick={this.close} >
                    <Icon name='remove' /> No
                  </Button>
                  <Button color='green'>
                    <Icon name='checkmark' /> Yes
                  </Button>
                </Modal.Actions>
                </Modal>
                </div>
              </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default NewPawner
