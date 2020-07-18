import React, {Component} from 'react'

class SignUp extends Component{

    handleChange = (e) => {
      // console.log(e.target)
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
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(console.log)
    }


   
    render(){
        return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={(e) => this.signUp(e)}>
            <label>UserName</label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text" />
            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default SignUp
