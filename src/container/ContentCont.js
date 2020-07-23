import React, { Component } from 'react';
import RealEstateInfo from '../component/RealEstateInfo';
import PropertiesContainer from '../component/PropertiesContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './container.css'
import { Container, Grid, Segment } from 'semantic-ui-react'


export default class ContentCont extends Component {
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

