import React, { Component } from 'react';
import List from './More'


class App extends Component {
    constructor(){
      super()
      this.state={

      }
    }
  componentDidMount=()=>{
    this.setState({Request:this.props.Request})
  }

  
  cancel=(user,val)=>{
    this.props.PresonCancelRequest(user)
    const value = this.state.Request
    value.List.splice(val,1)
    this.setState({Request:value})
  }
  Accpet=(user,val)=>{
    this.props.AccpetRequestPreson(user)
    const value = this.state.Request
    value.List.splice(val,1)
    this.setState({Request:value})
  }
  
  
    render() {
  
      return (
        <div>
            {console.log(this.props)}
 { this.state.Request !== undefined &&this.state.Request!==[] ? this.state.Request.List.map((index,val)=>{ 
   
   return(
     <div key={val}>
 


   <List props={index} values={val} value={this.props.Request.key[val]} cancel={this.cancel}  Accpet={this.Accpet}   Type={index.type}  />
 
 
   <hr />
     </div>
   )   
  
   }):"No Request"}
        
        </div>

      );
    }
  }
  export default App  