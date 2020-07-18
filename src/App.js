import React from 'react';
import Login from './actions/auth/Login'
import SignUp from './actions/auth/SignUp'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles.css'
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
  
  render(){

    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' render={(routerProps) => <Login user={this.state.user}/>}/>
          {/* component about us / contact us */}
          {/* <Route exact path='/houses' render={() => <HouseDisplay houses={this.state.houses}/> with props*/}
          {/* <Route path='/houses' render={(routerProps) => <HouseDisplay {...routerProps}houses={this.state.houses}/> with routerProps and props*/}
          {/* <Route path='/houses/:id' component={HouseDiplay}/> without props but info component currnet house id is: {this.props.match.params.id}*/}
          {/* <Route path='/houses/new' render={(routerProps) => <HouseForm {...routerProps} addHouse={this.addHouse}/> */}
          {/* <Link to='/home'>Go to Home</Link> import {Link} from react-router-dom redireact the rout*/}
          {/* handleSubmit = () => {this.props.history.push('/house')} redirect after submit*/}
          {/* <Link to='/home'>Go to Home</Link> */}
          <Route path='/profile' component={Profile}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
