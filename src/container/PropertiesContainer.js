import React, { Component } from 'react';
import { Container, Grid, Segment, Image, Divider, Header, Icon, Table } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class PropertiesContainer extends Component {

  render() {
    return (
      <Container>
        <Segment>
          <Grid stackable columns={4}>
            <Grid.Column>
              <Segment>
                <Image src='/images/wireframe/paragraph.png' />
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
                <Divider horizontal>
                  <Header as='h4'>
                    <Icon name='bar chart' />
                  Specifications
                </Header>
                </Divider>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Size</Table.Cell>
                      <Table.Cell>1" x 2"</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Weight</Table.Cell>
                      <Table.Cell>6 ounces</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Color</Table.Cell>
                      <Table.Cell>Yellowish</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Odor</Table.Cell>
                      <Table.Cell>Not Much Usually</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>


            <Grid.Column>
              <Segment>
                <Image src='/images/wireframe/paragraph.png' />
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
                <Divider horizontal>
                  <Header as='h4'>
                    <Icon name='bar chart' />
                  Specifications
                </Header>
                </Divider>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Size</Table.Cell>
                      <Table.Cell>1" x 2"</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Weight</Table.Cell>
                      <Table.Cell>6 ounces</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Color</Table.Cell>
                      <Table.Cell>Yellowish</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Odor</Table.Cell>
                      <Table.Cell>Not Much Usually</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='/images/wireframe/paragraph.png' />
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
                <Divider horizontal>
                  <Header as='h4'>
                    <Icon name='bar chart' />
                  Specifications
                </Header>
                </Divider>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Size</Table.Cell>
                      <Table.Cell>1" x 2"</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Weight</Table.Cell>
                      <Table.Cell>6 ounces</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Color</Table.Cell>
                      <Table.Cell>Yellowish</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Odor</Table.Cell>
                      <Table.Cell>Not Much Usually</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='/images/wireframe/paragraph.png' />
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
                <Divider horizontal>
                  <Header as='h4'>
                    <Icon name='bar chart' />
                  Specifications
                </Header>
                </Divider>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Size</Table.Cell>
                      <Table.Cell>1" x 2"</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Weight</Table.Cell>
                      <Table.Cell>6 ounces</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Color</Table.Cell>
                      <Table.Cell>Yellowish</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Odor</Table.Cell>
                      <Table.Cell>Not Much Usually</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>

            
          </Grid>
        </Segment>
      </Container>
    );
  }
}

