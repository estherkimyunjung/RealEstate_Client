import React, { Component } from 'react';
import { Grid, Segment, Image, Divider, Header, Icon, Table } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class PropertiesContainer extends Component {

  render() {
    console.log("Component", this.props.property)
    const { image, status, category, address, prices, beds, baths, sqft } = this.props.property
    return (
      <Grid.Column>
        <Segment>
          <Image src={image} size='big' style={{height:'160px'}}/>
          <p>{address}</p>
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
                <Table.Cell>{prices}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Status</Table.Cell>
                <Table.Cell>{status}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Category</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Detail</Table.Cell>
                <Table.Cell>{beds}Beds {baths}Baths {sqft}Sqft</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Grid.Column>
    );
  }
}

