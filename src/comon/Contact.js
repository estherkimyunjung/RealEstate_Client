import React, { Component } from 'react';
import { Container, Grid, Segment, Divider } from 'semantic-ui-react'

export default class Contact extends Component {
  render() {
    // console.log("COMINFO",this.props.companyInfo[0])
    return (
      <Container className='contact'>
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

