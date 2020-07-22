import React, { Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react'

export default class AboutUs extends Component {

  render() {
    return (
      <Segment inverted color='grey' className="aboutUs">
        <Container>
          <Segment inverted color='grey'>
            <Grid columns={4} divided>
              <Grid.Row>
                <Grid.Column>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
                </Grid.Column>
                <Grid.Column>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
                </Grid.Column>
                <Grid.Column>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
                </Grid.Column>
                <Grid.Column>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

        </Container>

      </Segment>
    );
  }
}

