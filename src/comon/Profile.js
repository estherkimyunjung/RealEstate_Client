import React, { Component } from 'react';

import { 
  Grid, 
  Segment, 
  Button, 
  Form } from 'semantic-ui-react'


  export default class Profile extends Component {
  state = {
    edit: false,
    username: this.props.user.username,
    firstname: this.props.user.firstname,
    lastname: this.props.user.lastname,
    email: this.props.user.email,
    role: this.props.user.role,
    avatar: this.props.user.avatar,
    zipcode: this.props.user.zipcode,
    id: this.props.user.id
  }

  handleSubmit = () => {
    let user = { id: this.state.id, username: this.state.username, firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, role: this.state.role, avatar: this.state.avatar, zipcode: this.state.zipcode }

    this.props.editUserInfo(user)
    this.handleChange("edit", !this.state.edit)
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    console.log("Profile User", this.state.user)
    const { username, firstname, lastname, email, role, avatar, zipcode } = this.props.user
    return (
      <Grid doubling style={{ paddingTop: "20px", paddingLeft: "80px" }}>
        <Grid.Column width="4">
          <Segment>
            <image src={avatar} alt={'avatar'} />
            <h4>User name: </h4><p>{username}</p>
            <h4>First name: </h4><p>{firstname}</p>
            <h4>Last name: </h4><p>{lastname}</p>
            <h4>Email: </h4><p>{email}</p>
            <h4>Role: </h4><p>{role}</p>
            <h4>Zip Code: </h4><p>{zipcode}</p>
            <Button content="Edit User" style={{ background: "#ad9d89" }} onClick={() => this.handleChange("edit", !this.state.edit)} />
          </Segment>
        </Grid.Column>
        <Grid.Column width="10">
          <Segment>
            {this.state.edit
              ?
              <div>
                <Form>
                    <Form.Field>
                      <label>User name</label>
                      <input value={this.state.username} name="username" onChange={(e) => this.handleChange(e.target.name, e.target.value)} placeholder={username} />
                    </Form.Field>
                    <Form.Field>
                      <label>First name</label>
                      <input value={this.state.firstname} name="firstname" onChange={(e) => this.handleChange(e.target.name, e.target.value)} placeholder={firstname} />
                    </Form.Field>
                    <Form.Field>
                      <label>Last name</label>
                      <input value={this.state.lastname} name="lastname" onChange={(e) => this.handleChange(e.target.name, e.target.value)} placeholder={lastname} />
                    </Form.Field>
                    <Form.Field>
                      <label>Email</label>
                      <input value={this.state.email} name="email" onChange={(e) => this.handleChange(e.target.name, e.target.value)} placeholder={email} />
                    </Form.Field>
                    <Form.Field>
                      <label>Zipcode</label>
                      <input name="zipcode" value={this.state.zipcode} type="number" onChange={(e) => this.handleChange(e.target.name, e.target.value)} placeholder={zipcode} />
                    </Form.Field>
                    <Form.Field>
                      <label>Picture URL</label>
                      <input name="avatar" value={this.state.avatar} type="text" onChange={(e) => this.handleChange(e.target.name, e.target.value)} placeholder='https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png' />
                    </Form.Field>
                  <Button content="Cancel" style={{ background: "#ad9d89" }} onClick={() => this.handleChange("edit", !this.state.edit)} />
                  <Button content="Submit" color="blue" style={{float: "right"}} onClick={() => this.handleSubmit()} />
                </Form>
              </div>
              :
              <div>
                <h3>Suggested Property / Agent</h3>
              </div>
            }
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

