import React, { Component } from 'react'

class SignUp extends Component {

  handleChange = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signUp = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        role: this.state.role,
        avatar: this.state.avatar
      })
    })
      .then(res => res.json())
      .then(console.log)
      e.target.reset()
  }



  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={(e) => this.signUp(e)}>
          <label>User Name</label>
          <input onChange={(e) => this.handleChange(e)} name="username" type="text" />
          <label>Password</label>
          <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
          <label>First Name</label>
          <input onChange={(e) => this.handleChange(e)} name="firstname" type="text" />
          <label>Last Name</label>
          <input onChange={(e) => this.handleChange(e)} name="lastname" type="text" />
          <label>Email</label>
          <input onChange={(e) => this.handleChange(e)} name="email" type="text" />
          <label>Role</label>
          <input onChange={(e) => this.handleChange(e)} name="role" type="text" />
          <label>Image</label>
          <input onChange={(e) => this.handleChange(e)} name="avatar" type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SignUp
