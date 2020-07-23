import React, { Component } from 'react';
import RealEstateInfo from '../component/RealEstateInfo';
import PropertiesContainer from '../component/PropertiesContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/container.css'
import { Container, Grid, Segment } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap';


class SlideAdv extends Component {
  state = {}
  render() {
    console.log('properties', this.props.properties)
    return (
      <div>
        {/* Slide All Properties Advertising Images */}
        <Container className="sildeCon">
          <Carousel>
            {this.props.properties.map(p =>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={p.image}
                  alt="First slide"
                  style={{ height: '600px' }}
                />
                <Carousel.Caption className="dimmer">
                  <h3 className="sildeCon title">{p.address}</h3>
                  <h3 className="sildeCon title">${p.prices}</h3>
                </Carousel.Caption>
              </Carousel.Item>)}
          </Carousel>
        </Container>
      </div>
    );
  }
}
export default SlideAdv;

