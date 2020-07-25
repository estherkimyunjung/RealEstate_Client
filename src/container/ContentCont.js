import React, { Component } from 'react';
import RealEstateInfo from '../component/RealEstateInfo';
import PropertiesMain from '../component/PropertiesMain';
import { 
  Container, 
  Grid, 
  Segment } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './container.css'


class ContentCont extends Component {

  render() {
    console.log('properties', this.props.displayPro)

    return (
      <div>        
        {/* Real Estate Information and News */}
        <RealEstateInfo />
                
        {/* Newest Top 4 Properties */}
        <Container>
          <Segment>
            <Grid stackable columns={4}>
              {this.props.properties.slice(0, 4).map(p =>
                <PropertiesMain property={p} key={p.id}/>
              )}
            </Grid>
          </Segment>
        </Container>
      </div>
    )
  }
}
export default ContentCont

