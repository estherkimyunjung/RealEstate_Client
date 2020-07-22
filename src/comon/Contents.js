import React, { Component } from 'react';
import SlideContent from '../container/SlideContent.js';
import CompanyContainer from '../container/CompanyContainer.js';
import ShopperContainer from '../container/ShopperContainer.js';
import PropertiesContainer from '../container/PropertiesContainer.js';

export default class Contents extends Component {

  render() { 
    return ( 
      <div>
        <SlideContent/>
        <CompanyContainer/>
        <ShopperContainer/>
        <PropertiesContainer/>
      </div>
    );
  }
}

