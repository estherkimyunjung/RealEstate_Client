import React, { Component } from 'react';
import { Container, Grid, Segment, Label } from 'semantic-ui-react'

export default class CompanyContainer extends Component {
  
  render() {
    return (
      <Container>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
              <Segment raised>
                <Label as='a' color='red' ribbon>
                  Overview
              </Label>
                <span>Account Details</span>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>

                <Label as='a' color='blue' ribbon>
                  Community
              </Label>
                <span>User Reviews</span>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Label as='a' color='orange' ribbon='right'>
                  Specs
              </Label>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>

                <Label as='a' color='teal' ribbon='right'>
                  Reviews
              </Label>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

