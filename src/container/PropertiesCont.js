import React, { Component } from 'react'
import PropertiesList from '../component/PropertiesList'
import {
  Grid,
  Segment,
  Container,
  Select,
  Input } from 'semantic-ui-react'

import 'bootstrap/dist/css/bootstrap.min.css'


class PropertiesCont extends Component {

  render() {
    const ProperitesSearch = [
      { key: 'd', value: 'd', text: 'Select Option' },
      { key: 'phl', value: 'plh', text: 'Price (High to Low)' },
      { key: 'price', value: 'price', text: 'Price (Low to High' },
      { key: 'built', value: 'built', text: 'built' },
      { key: 'beds', value: 'beds', text: 'beds' },
      { key: 'sqft', value: 'sqft', text: 'sqft' },
      { key: 'zipcode', value: 'zipcode', text: 'zipcode' },
    ]

    return (
      <Container>
        <Segment>
          <Segment>
            <Grid columns={3} divided style={{ marginLeft: '50px' }}>
              <Grid.Row >
                <Grid.Column width={12}>
                  <span>Search with Address or Zipcode</span>
                  <Input onChange={this.props.onChange}fluid icon='search' placeholder='Search...' />
                </Grid.Column>
                <Grid.Column width={4}>
                  <span>Sort by options</span>
                  <Select style={{ float: 'right' }} color='black' placeholder='Find Home for You' options={ProperitesSearch} onChange={(e)=>{this.props.sortByZipcode(e.target.innerText)}}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Grid stackable columns={3}>
            {this.props.properties.map(p =>
              <PropertiesList property={p} Key={p.id} />
            )}
          </Grid>
        </Segment>
      </Container>
    );
  }
}
export default PropertiesCont

