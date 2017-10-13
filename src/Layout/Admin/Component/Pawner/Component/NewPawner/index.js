import React from 'react'
import { Grid, Segment, Image, Form,Button, Header, Modal, Icon,Input, Dropdown } from 'semantic-ui-react'
const stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }]
const raceOptions = [ { key: 'CH', value: 'chinese', text: 'CHINESE' },{ key: 'IN', value: 'indian', text: 'INDIAN' },{ key: 'EU', value: 'eurasian', text: 'EURASIAN' },{ key: 'MY', value: 'malay', text: 'MALAY' }]
const sexOptions = [ { key: 'm', value: 'male', text: 'MALE' },{ key: 'f', value: 'female', text: 'FEMALE' }]
const GridExampleResponsiveWidth = () => (
  <div>
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={3}>
        space1
      </Grid.Column>
      <Grid.Column mobile={48} tablet={16} computer={10}>
          <Segment padded>
          <div class="ui">
          <Form>
          <Form.Input label='Search Pawner' placeholder='Enter Pawner name' type='pawner'icon='users' iconPosition='left' />
          </Form>
          </div>
          <div class="ui">
          <Modal trigger={<Button primary Icon='plus'>ADD</Button>}>
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
              <Button basic color='red'>
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
        space 2
      </Grid.Column>
    </Grid>

  </div>
)

export default GridExampleResponsiveWidth