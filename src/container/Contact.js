import React, { Component } from 'react';
import { Container, Grid, Segment, Divider } from 'semantic-ui-react'

class Contact extends Component {
  state = {}
  render() {
    return (
      <Container>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              info
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              map
            </Grid.Column>
          </Grid>
          <Divider vertical>Email</Divider>
        </Segment>
      </Container>

    );
  }
}

export default Contact;
