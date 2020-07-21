import React from 'react';
import NavBar from './comon/NavBar.js';
import Contents from './comon/Contents';
import AboutUs from './comon/AboutUs';
import Login from './auth/SignIn'
import SignUp from './auth/SignUp'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Contact from './container/Contact.js';
// import {
//   Button,
//   Form,
//   Grid,
//   Message,
//   Segment,
// } from 'semantic-ui-react';


class App extends React.Component {
  
  state = {
    loggedIn: true 
  }

  handleStateChanges = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  
  render(){

    return (
      <BrowserRouter>
        <NavBar/>
        <Contents/>
        <Contact/>
        <AboutUs/>

        <Switch>
          <Route path='/signup' component={SignUp}/>
          <Route path='/aboutUs' component={AboutUs}/>
          <Route path='/login' render={(routerProps) => <Login user={this.state.user}/>}/>
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
      </BrowserRouter>
    )
  }
}

export default App;
