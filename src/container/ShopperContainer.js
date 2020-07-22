import React, { Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react'

class ShopperContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <Container>
        <Segment placeholder>
        ShopperContainer
          <Grid relaxed='very' stackable>
            <Grid.Column>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
 
export default ShopperContainer;
