import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from './auth/Login'
import SignUp from './auth/SignUp'
import NavBar from './comon/NavBar';
import SlideAdv from './comon/SliderAdv'
import ContactUs from './comon/ContactUs'
import AboutUs from './comon/AboutUs';
import Profile from './comon/Profile'
import Contents from './container/Contents';
import Properties from './component/Properties';
import Agents from './component/Agents';

import { Loader, Dimmer, Segment, Image } from 'semantic-ui-react'


const USER_API = 'http://localhost:3000/api/v1/users'
const CLIENT_API = 'http://localhost:3000/api/v1/clients'
const AGENT_API = 'http://localhost:3000/api/v1/agents'
// const COMPANY_API = 'http://localhost:3000/api/v1/companies'
const PROPERTY_API = 'http://localhost:3000/api/v1/properties'
const APPOINTMENT_API = 'http://localhost:3000/api/v1/appointments'

class App extends React.Component {

  state = {
    loggedIn: true,
    token: localStorage.token,
    user: JSON.parse(localStorage.getItem('user')),
    properties: [],
    agents: [],
    companyInfo: [],
    eventName: 'main',
    isLoading: true
  }

  componentDidMount() {
    this.fetchProperties()
    this.fetchAgents()
    // this.fetchCompany()
  }

  fetchProperties = () => {
    fetch(PROPERTY_API)
    .then(res => res.json())
    .then(properties => {
      // console.log("properties", properties)
      this.setState({
        properties: properties,
        isLoading: false
      })
    })
  }

  fetchAgents = () => {
    fetch(AGENT_API)
    .then(res => res.json())
    .then(agents => {
      console.log("agents", agents)
      this.setState({
        agents: agents,
        isLoading: false
      })
    })
  }

  // fetchCompany = () => {
  //   fetch(COMPANY_API)
  //   .then(res => res.json())
  //   .then(companyInfo => {
  //     console.log("companyInfo", companyInfo)
  //     this.setState({
  //       companyInfo: companyInfo,
  //       isLoading: false
  //     })
  //   })
  // }

  fetchUser = () => {
    fetch(USER_API + `/${this.state.user.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
      .then(res => res.json())
      .then(userInfo => {
        localStorage.setItem('user', JSON.stringify({ ...userInfo, token: this.state.token }))
        this.setState({
          user: JSON.parse(localStorage.getItem('user'))
        })
      })
  }

  editUserInfo = (user) => {
    // debugger
    const option = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        zipcode: user.zipcode
      })
    }
    fetch(USER_API + `/${user.id}`, option)
      .then(res => res.json())
      .then(userInfo => {
        this.fetchUser()
      })
  }

  handleStateChanges = (key, value) => {
    this.setState({
      [key]: value
    })
  }


  render() {

    console.log("EST", this.state.properties)
    return (
      <div className="App">
        {this.state.isLoading
          ? <Segment>
            <Dimmer active>
              <Loader size='big'>Loading</Loader>
            </Dimmer>      
          </Segment>
          : <BrowserRouter>
              {/* static components Navbar / Contact / AboutUs*/}
              <NavBar handleStateChange={this.handleStateChanges} properties={this.state.properties} />
              
              {/* Slide All Properties Advertising Images */}
              <SlideAdv handleStateChange={this.handleStateChanges} properties={this.state.properties} />

              {/* Condition Rendering other components */}
              <Switch>
                <Route path='/login' render={(routerProps) =>
                  <Login 
                  user={this.state.user} 
                  handleStateChange={this.handleStateChanges} />} />
                <Route path='/signup' component={SignUp} />
                <Route exact path="/profile" component={() =>
                  this.state.token
                  ? <Profile
                  editUserInfo={this.editUserInfo}
                  user={this.state.user} />
                  : <Redirect to='/login' />} />
                <Route exact path='/home' render={(routerProps) =>
                  <Contents 
                    properties={this.state.properties} 
                    handleStateChange={this.handleStateChanges} />} />
                <Route exact path='/property' render={(routerProps) =>
                  <Properties 
                    properties={this.state.properties} 
                    handleStateChange={this.handleStateChanges} />} />
                <Route exact path='/agent' render={(routerProps) =>
                  <Agents 
                    agents={this.state.agents} 
                    handleStateChange={this.handleStateChanges} />} />
                <Route exact path='/contactUs' render={(routerProps) =>
                  <ContactUs 
                    companyInfo={this.state.companyInfo} 
                    handleStateChange={this.handleStateChanges} /> }/>


                {/* component about us / contact us */}
                {/* <Route exact path='/houses' render={() => <HouseDisplay houses={this.state.houses}/> with props*/}
                {/* <Route path='/houses' render={(routerProps) => <HouseDisplay {...routerProps}houses={this.state.houses}/> with routerProps and props*/}
                {/* <Route path='/houses/:id' component={HouseDiplay}/> without props but info component currnet house id is: {this.props.match.params.id}*/}
                {/* <Route path='/houses/new' render={(routerProps) => <HouseForm {...routerProps} addHouse={this.addHouse}/> */}
                {/* <Link to='/home'>Go to Home</Link> import {Link} from react-router-dom redireact the rout*/}
                {/* handleSubmit = () => {this.props.history.push('/house')} redirect after submit*/}
                {/* <Link to='/home'>Go to Home</Link> */}
                {/* <Route path='/profile' component={Profile}/> */}
                {/* <Route exact path="/dashboard" component={() => 
                this.state.token 
                ? <Dashboard/> 
                : <Redirect to='/login'/>} />
              <Route exact path="/about" component={About}/> */}

              </Switch>
              <AboutUs />
          </BrowserRouter>
        }
      </div>
    )
  }
}

export default App;

