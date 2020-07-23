import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './comon.css'


class SlideAdv extends Component {

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

