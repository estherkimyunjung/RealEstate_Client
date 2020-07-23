import React, { Component } from 'react';
import { Grid, Segment, Image, Divider, Header, Icon, Table, Container } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Agents extends Component {

  render() {
    console.log("Agents", this.props.agents)
    // let Auser = this.props.agents.map(a => console.log(a.user.firstname))
    return (
      <Container>
        <Segment>
          <Grid stackable columns={4}>
            {this.props.agents.map(a =>
            <Grid.Column>
              <Segment>
                <Image src={a.user.avatar} size='big' />
                <Header as='h4' textAlign='center'>{a.user.firstname} {a.user.lastname}</Header>
                <Divider horizontal>
                  <Header as='h4'>
                    <Icon name='bar chart' />
                    Information
                  </Header>
                </Divider>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>E-mail</Table.Cell>
                      <Table.Cell>{a.user.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Location</Table.Cell>
                      <Table.Cell>Zip code {a.user.zipcode}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>License</Table.Cell>
                      <Table.Cell>{a.license}</Table.Cell>
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

