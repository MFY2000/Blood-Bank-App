import React, { Component } from 'react';

import ShowList from './showList';

class App extends Component {
  render() {
    return (
      <div className='center' >
            <ShowList {...this.props}  />
      </div>
    );
  }
}

export default (App);