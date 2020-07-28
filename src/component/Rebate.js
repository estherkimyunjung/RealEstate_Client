import React from 'react'
import axios from 'axios'
import {
  Button,
  Form,
  Container,
  Segment,
  TextArea,
  Input,
  Label,
  Select
} from 'semantic-ui-react'
import '../auth/auth.css'


class Rebate extends React.Component {
  constructor(){
    super()

    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      message: '',
      agent: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    
    const { firstname, lastname, address,  message, agent, email} = this.state
    
    e.target.reset()

    const form = await axios.post('/api/email', {
      firstname,
      lastname,
      address,
      message,
      agent,
      email
    })
  }

  render() {
    console.log("REBATE", this.props.user)

    const genderOptions = [
      { key: '0', text: 'Select Options', value: ' ' },
      { key: '1', text: 'Olivia Lee', value: 'Olivia Lee' },
      { key: '2', text: 'Newton Williams', value: 'Newton Williams' },
      { key: '3', text: 'John Smith', value: 'John Smith' },
      { key: '4', text: 'Grace Davis', value: 'Grace Davis' },
      { key: '5', text: 'Evelyn Lopez', value: 'Evelyn Lopez' },
      { key: '6', text: 'Michael Miller', value: 'Michael Miller' },
    ]

    return (
      <div>
        <Container>
          <br />
          <Segment padded>
            <br />
            <Label attached='top'>
              <h3 style={{ textAlign: 'right', lineHeight: '2em' }}>Rebate Request Here</h3>
            </Label>
            <br /><br /><br />
            <Form onSubmit={(e)=>{this.handleSubmit(e)}}>
              <Form.Group unstackable widths={2}>
                <Form.Input name='firstname' label='First name' value = {this.props.user.firstname} />
                <Form.Input name='lastname' label='Last name' value = {this.props.user.lastname} />
              </Form.Group>
              <Form.Input onChange={this.handleChange} name='address' label='Address' placeholder='Address' />
              <Form.Field
                onChange={this.handleChange}
                name='message'
                id='form-textarea-control-message'
                control={TextArea}
                label='Message'
                placeholder='Message'
              />
              <Form.Group widths={2}>
                <Form.Field
                  onChange={this.handleChange}
                  name='agent'
                  control={Select}
                  options={genderOptions}
                  label={{ children: 'Agent', htmlFor: 'form-select-control-agent' }}
                  placeholder='Agent'
                  search
                  searchInput={{ id: 'form-select-control-agent' }}
                />
                <Form.Field
                  onChange={this.handleChange}
                  name='email'
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
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}
export default Rebate

