import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './comon.css'
import { Segment, Menu, Button, Icon } from 'semantic-ui-react'

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
    console.log("NAVBAR", this.props.properties)
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
            <Link to="/home" style={{ color: 'black', textDecoration: 'none' }}>
              <Icon name='building outline' />
              Welcome to Home 1800
            </Link>
          </Menu.Item>

          <Menu.Item>
          </Menu.Item>

          <Menu.Item
            name='property'
            active={activeItem === 'property'}
            onClick={this.handleItemClick}>
            <Link to="/property" style={{ color: 'black', textDecoration: 'none' }}>
              <Icon name='building' />
              Property
            </Link>
          </Menu.Item>

          <Menu.Item
            name='agent'
            active={activeItem === 'agent'}
            onClick={this.handleItemClick}>
            <Link to="/agent" style={{ color: 'black', textDecoration: 'none' }}>
              <Icon name='handshake' />
              Agent
            </Link>
          </Menu.Item>

          <Menu.Item
            name='rebate'
            active={activeItem === 'rebate'}
            onClick={this.handleItemClick}>
            <Link to="/rebate" style={{ color: 'black', textDecoration: 'none' }}>
              <Icon name='money' />
              Rebate
            </Link>
          </Menu.Item>

          <Menu.Item
            name='aboutUs'
            active={activeItem === 'aboutUs'}
            onClick={this.handleItemClick}>
            <Link to="/aboutUs" style={{ color: 'black', textDecoration: 'none' }}>
              <Icon name='group' />
              About Us
            </Link>
          </Menu.Item>

          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}>
            <Link to="/contact" style={{ color: 'black', textDecoration: 'none' }}>
              <Icon name='plug' />
              Contact Us
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default withRouter(NavBar);

