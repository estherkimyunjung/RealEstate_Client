import React, { Component } from 'react';
import { connect } from 'react-redux'
import Map from '../container/Map'
import { Container, Grid, Segment, Divider, Header, Icon } from 'semantic-ui-react'

class Contact extends Component {
  render() {
    return (
      <Container className='contact'>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column className='contactInfo'>
              <Segment>
              <h2>{this.props.logo}</h2>
              <h2><strong>{this.props.name}</strong></h2>
              <h4>Location : {this.props.address}</h4>
              <h4>Phone : {this.props.phone}</h4>
              <h4>E-mail : {this.props.email}</h4>
              </Segment>
              <br/>
              <h3 style={{textAlign:'center', lineHeight: '2em', color: "#764b28"}}><strong>{this.props.sloganOne}</strong></h3>
              <h3 style={{textAlign:'center',lineHeight: '2em', color: "#764b28"}}><strong>{this.props.sloganTwo}</strong></h3>
              <h3 style={{textAlign:'center',lineHeight: '2em', color: "#764b28"}}><strong>{this.props.sloganThree}</strong></h3>
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <Map lat={this.props.latitude} long={this.props.longitude}/>
            </Grid.Column>
          </Grid>
          <Divider vertical>Map</Divider>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    id: 1,
    logo: <Icon name='building outline'/>,
    name: state.company.name,
    address: state.company.address,
    zipcode: state.company.zipcode,
    latitude: state.company.latitude,
    longitude: state.company.longitude,
    phone: state.company.phone,
    email: state.company.email,
    sloganOne: state.company.descriptionOne,
    sloganTwo: state.company.descriptionTwo,
    sloganThree: state.company.descriptionThree
  }
}


export default connect(mapStateToProps)(Contact)