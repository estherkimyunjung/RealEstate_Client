import React, { Component } from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import { 
  Container, 
  Segment,
  Icon } from 'semantic-ui-react'


class AboutUs extends Component {
  
  render() {

    return (
      <div>
        <Container>
          <Segment>
            <h1>AboutUs</h1>
            <Segment>
            <Map lat={this.props.latitude} long={this.props.longitude}/>
            </Segment>
          </Segment>
        </Container>
      </div>
    )
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
export default connect(mapStateToProps)(AboutUs)


