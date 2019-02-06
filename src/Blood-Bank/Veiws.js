import React, { Component } from 'react';
import List from './List'


class App extends Component {
    
  

  
  
    render() {
  
      return (
        <div>
 {this.props.GroupsList.map((index,val)=>{ 
   
   return(
     <div key={val}>
   <List props={index} vlaue={this.props.Key[val]}  Request={this.props.Request} />
   <hr />
     </div>
   )   
  
   })}
        </div>

      );
    }
  }
  export default App  