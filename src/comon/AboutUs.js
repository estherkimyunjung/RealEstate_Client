import React, { Component } from 'react';
import Map from './Map'
import { Container, Segment } from 'semantic-ui-react'


class AboutUs extends Component {
  state = {}
  render() {
    return (
      <div>
        <Container>
          <Segment>

            <h1>AboutUs</h1>

            <Segment>
              <Map />
            </Segment>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default AboutUs;

