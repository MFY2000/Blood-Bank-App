import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './Blood-Bank/Show'
import {PresonCancelRequest,AccpetRequestPreson,SeenRequest} from './Store/Actions' 
class App extends Component {
  constructor(){
      super()
      this.state={
        uid:'',
        Request:''
      }
    }
  

componentWillUpdate=()=>{
  if(this.state.uid==="" && this.props.UseDeatils.uid!==null&&this.props.Request!==null&&this.props.Request!==undefined){
  console.log(this.props)  
    this.setState({uid:this.props.UseDeatils.uid,Request:this.props.Request.List})
}
}

componentDidMount=()=>{

  if(this.props.Request !== null && this.props.Request !== undefined){
      this.seen(this.props.Request)
  this.setState({Request:this.props.Request.List})
  }  
}
seen=(Value)=>{
  Value.List.map((index,val)=>{
this.props.SeenRequest(index.uid,index.PresonWhichGoesBlood)
  })
}
  
  
    render() {
      return (
        <div>
<button className='Back' onClick={()=>{this.props.history.replace('/User/'+ this.state.uid)}}>Go Back</button>



<h4>Request</h4>

{this.state.Request !== '' ?
<div>
 <List {...this.props}  />
 </div>
 :
<h4 className='Center' >No Request</h4>}



    </div>

      );
    }
  }
  function mapStateToProp(state) {
    return ({
      UseDeatils:state.root.userDetail,
      Request:state.root.RequestShown
    })
  }
  
  
  
  function mapDispatchToProp(dispatch) {
    return ({
      PresonCancelRequest: (User) => { dispatch(PresonCancelRequest(User)) },
      AccpetRequestPreson: (User) => { dispatch(AccpetRequestPreson(User)) },
      SeenRequest: (User,preson) => { dispatch(SeenRequest(User,preson)) },

    })
  }
  
  export default connect(mapStateToProp, mapDispatchToProp)(App)