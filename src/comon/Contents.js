import React, { Component } from 'react';
import SlideContent from '../container/SlideContent.js';
import CompanyContainer from '../container/CompanyContainer.js';
import ShopperContainer from '../container/ShopperContainer.js';
import PropertiesContainer from '../container/PropertiesContainer.js';
class Contents extends Component {
  state = {  }
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
 
export default Contents;
