import React, { Component } from 'react';
import Optain from '../compent/Optain'
import List from './List'
import Image from '../image/download.jpg'
import { connect } from 'react-redux';
// import { forGroupList } from '../Store/Actions';


class App extends Component {
    
  
  onChange=(details)=>{
    this.props.forGroupList(details)
  }
  
  
    render() {
  
      return (
        <div className='ceter'>
        <img alt="Loader" className='App-logo' src={Image} />
   
        </div>

      );
    }
  }
  
function mapStateToProp(state) {
  return ({
 
  })
}



function mapDispatchToProp(dispatch) {
  return ({
   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);