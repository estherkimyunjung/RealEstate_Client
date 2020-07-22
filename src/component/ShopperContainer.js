import React, { Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react'

export default class ShopperContainer extends Component {

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
 
