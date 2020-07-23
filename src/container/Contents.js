import React, { Component } from 'react';
import RealEstateInfo from '../component/RealEstateInfo';
import PropertiesContainer from '../component/PropertiesContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/container.css'
import { Container, Grid, Segment } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap';


class Contents extends Component {
  state = {}
  render() {
    console.log('properties', this.props.properties)
    return (
      <div>        
        {/* Real Estate Information and News */}
        <RealEstateInfo />
                
        {/* Newest Top 4 Properties */}
        <Container>
          <Segment>
            <Grid stackable columns={4}>
              {this.props.properties.slice(0, 4).map(p =>
                <PropertiesContainer property={p} />
              )}
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
export default Contents;

