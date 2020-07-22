import React, { Component } from 'react'
import { Segment, Menu, Button, Icon } from 'semantic-ui-react'
import { withRouter, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './comon.css'

class NavBar extends Component {

  state = {
    activeItem: 'home'
  }

  handleLogout = () => {
    localStorage.clear()
    this.props.handleStateChange("token", null)
  }
  //  These menu options will need to point to methods in app.js to display the appropriate content.
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        {/* TopBar */}
        <Segment inverted className="topBar">
          <Link to="/home">
            <Button basic color='yellow' inverted
              name='Home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>Home 1800</Button>
          </Link>
          <Link to="/signup">
            <Button name='SignUp'
              active={activeItem === 'SignUp'}
              onClick={this.handleItemClick}
              basic color='yellow'
              inverted floated='right'
              style={{ width: '90px' }}>SignUp</Button>
          </Link>
          {localStorage.token
            ? <Link to="">
              <Button name='Logout'
                active={activeItem === 'Logout'}
                onClick={this.handleLogout}
                basic color='yellow'
                inverted floated='right'
                style={{ width: '90px' }}>Logout</Button>
            </Link>
            : <Link to="/login">
              <Button name='Login'
                active={activeItem === 'Login'}
                onClick={this.handleItemClick}
                basic color='yellow'
                inverted floated='right'
                style={{ width: '90px' }}>Login</Button>
            </Link>}
          <Link to="/profile">
            <Button name='Profile'
              active={activeItem === 'Profile'}
              onClick={this.handleItemClick}
              basic color='yellow'
              inverted circular
              icon='user outline'
              floated='right' />
          </Link>
        </Segment>
        {/* NavBar */}
        <Menu widths={7} className="navBar">
          <Menu.Item>
          <Link to="/home" style={{color:'black', textDecoration:'none'}}>
            <Icon name='building outline' />
            Welcome to Home 1800
          </Link>

          </Menu.Item>

          <Menu.Item>
          </Menu.Item>

          <Menu.Item
            name='property'
            active={activeItem === 'property'}
            onClick={this.handleItemClick}
          > <Icon name='building'/>
          Property</Menu.Item>

          <Menu.Item
            name='agent'
            active={activeItem === 'agent'}
            onClick={this.handleItemClick}
          > <Icon name='handshake'/>
          Agent</Menu.Item>

          <Menu.Item
            name='rebate'
            active={activeItem === 'rebate'}
            onClick={this.handleItemClick}
          > <Icon name='money'/>
          Rebate</Menu.Item>

          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          > <Icon name='group'/>
          About Us</Menu.Item>

          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          > <Icon name='plug'/>
          Contact Us</Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default withRouter(NavBar);
