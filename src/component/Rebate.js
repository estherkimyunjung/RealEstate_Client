import React from 'react'

import { 
  Button, 
  Form, 
  Container, 
  Segment, 
  TextArea, 
  Input, 
  Label, 
  Select } from 'semantic-ui-react'

import '../auth/auth.css'


class Rebate extends React.Component {

  render() {

    const genderOptions = [
      { key: '0', text: 'Select Options', value: ' ' },
      { key: '1', text: 'Agent1', value: 'Agent1' },
      { key: '2', text: 'Agent2', value: 'Agent2' },
      { key: '3', text: 'Agent3', value: 'Agent3' },
    ]

    return (
      <div>
        <Container>
          <br/>
          <Segment padded>
            <br/>
            <Label attached='top'><h3 style={{textAlign:'right', lineHeight: '2em'}}>Rebate Request Here</h3></Label>
            <br/><br/><br/>
            <Form>
              <Form.Group unstackable widths={2}>
                <Form.Input label='First name' placeholder='First name' />
                <Form.Input label='Last name' placeholder='Last name' />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label='Address' placeholder='Address' />
                <Form.Input label='Phone' placeholder='Phone' />
              </Form.Group>
              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Opinion'
                placeholder='Opinion'
              />
              <Form.Group widths={2}>
                <Form.Field
                  control={Select}
                  options={genderOptions}
                  label={{ children: 'Agent', htmlFor: 'form-select-control-gender' }}
                  placeholder='Agent'
                  search
                  searchInput={{ id: 'form-select-control-gender' }}
                />

                <Form.Field
                  id='form-input-control-error-email'
                  control={Input}
                  label='Email'
                  placeholder='joe@schmoe.com'
                  error={{
                    content: 'Please enter a valid email address',
                    pointing: 'below',
                  }}
                />
              </Form.Group>
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        </Container>
      </div>

    );
  }
}

export default Rebate;

