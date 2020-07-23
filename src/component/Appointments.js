import React from 'react'
import { List, Image, Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import '../auth/auth.css'

const genderOptions = [
  { key: '1', text: 'Agent1', value: 'Agent1' },
  { key: '2', text: 'Agent2', value: 'Agent2' },
  { key: '3', text: 'Agent3', value: 'Agent3' },
]

const Appointments = (props) => (
  <div>
    <h1>Appointment Informations</h1>
    <List celled>
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
        <List.Content>
          <List.Header>Snickerdoodle</List.Header>
        An excellent companion
      </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
        <List.Content>
          <List.Header>Poodle</List.Header>A poodle, it's pretty basic
      </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
        <List.Content>
          <List.Header>Paulo</List.Header>
        He's also a dog
      </List.Content>
      </List.Item>
    </List>
    <Form>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-first-name'
          control={Input}
          label='First name'
          placeholder='First name'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Last name'
          placeholder='Last name'
        />
        <Form.Field
          control={Select}
          options={genderOptions}
          label={{ children: 'Agent', htmlFor: 'form-select-control-gender' }}
          placeholder='Agent'
          search
          searchInput={{ id: 'form-select-control-gender' }}
        />
      </Form.Group>
      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='Opinion'
        placeholder='Opinion'
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
      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Confirm'
        label='Label with htmlFor'
      />
    </Form>
  </div>

)

export default Appointments

