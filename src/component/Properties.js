import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Segment, Image, Divider, Header, Icon, Table, Container } from 'semantic-ui-react'


export default class Properties extends Component {

  render() {
    console.log("Properties", this.props.properties)
    return (
      <Container>
        <Segment>
          <Grid stackable columns={4}>
            {this.props.properties.map(p =>
            <Grid.Column>
              <Segment>
                <Image src={p.image} size='big' />
                <p>{p.address}</p>
                <Divider horizontal>
                  <Header as='h4'>
                    <Icon name='bar chart' />
                    Specifications
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

