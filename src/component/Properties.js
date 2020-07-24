import React, { Component } from 'react'
import {
  Grid,
  Segment,
  Image,
  Divider,
  Header,
  Icon,
  Table,
  Container
} from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css'


class Properties extends Component {

  render() {
    console.log("Properties", this.props.properties)

    return (
      <Container>
        <Segment>
          <Grid stackable columns={3}>
            {this.props.properties.map(p =>
              <Grid.Column>
                <Segment>
                  <Image src={p.image} size='big' style={{ height: '240px' }} />
                  <br />
                  <Divider horizontal>
                    <Header as='h4'>
                      <Icon name='bar chart' />
                      Descriptions
                  </Header>
                  </Divider>
                  <Table definition>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell width={2}>Prices</Table.Cell>
                        <Table.Cell>{p.prices}</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Status</Table.Cell>
                        <Table.Cell>{p.status}</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Category</Table.Cell>
                        <Table.Cell>{p.category}</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Detail</Table.Cell>
                        <Table.Cell>{p.beds}Beds {p.baths}Baths {p.sqft}Sqft</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Address</Table.Cell>
                        <Table.Cell>{p.address}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Segment>
              </Grid.Column>
            )}
          </Grid>
        </Segment>
      </Container>
    );
  }
}
export default Properties

