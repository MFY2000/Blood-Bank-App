import React, { Component } from 'react';
import AdminFunction from './AdminFunction'
import { connect } from 'react-redux';
import { ToBecomeList , AccpetAdmin,AccpetDonar,cancel } from '../Store/Actions';


class App extends Component {
    constructor(){
      super()
      this.state={
        TOBecomeListAdmin:[],
        TOBecomeListDonar:[],
        update:true
      }
    }
  
  onChange=()=>{
    this.props.ToBecomeList()
  }


  componentDidUpdate=()=>{
    // const {TOBecomeListAdmin,TOBecomeListDonar} =this.state 
 if(this.state.TOBecomeListAdmin!==this.props.BecomeListAdmin.List||this.state.TOBecomeListDonar!==this.props.BecomeListDonar.List){
    this.setState({TOBecomeListAdmin:this.props.BecomeListAdmin.List,TOBecomeListDonar:this.props.BecomeListDonar.List,update:false})
  }
  }
  
  componentDidMount=()=>{
    this.onChange()
  }

    render() {
      const {TOBecomeListAdmin,TOBecomeListDonar} = this.state
  
      return (
        <div>
<h4>To Become Admin List</h4>
{TOBecomeListAdmin.length !== 0 ?    TOBecomeListAdmin.map((index,val)=>{ 
const indexs = index
index.MoreAboutUser = {
  Addears:'',
  Age:'',
  Group:'',
  gender:''
} 
return(
  <div key={val}>
<AdminFunction props={indexs} value={this.props.BecomeListAdmin.key[val]} cancel={this.props.cancel} AccpetAdmin={this.props.ReduxAccpetAdmin} Type="To Become Admin List"  />
<hr />
  </div>
)   

}):"No Items in list"}




<h4>To Become Donar List</h4>

{TOBecomeListDonar.length !== 0 ? TOBecomeListDonar.map((index,val)=>{ 

return(
  <div key={val}>
<AdminFunction props={index} AccpetDonar={this.props.ReduxAccpetDonar} cancel={this.props.cancel} value={this.props.BecomeListDonar.key[val]} Type="To Become Donar List"  />
<hr />
  
  </div>
)   

}):"No Items in list"}



       </div>

      );
    }
  } 
  
function mapStateToProp(state) {
  return ({
   BecomeListAdmin:state.root.ToBecomeAdminList,
   BecomeListDonar:state.root.ToBecomeDonorList
  })
}



function mapDispatchToProp(dispatch) {
  return ({
    ToBecomeList: (Uid) => { dispatch(ToBecomeList(Uid)) },
    ReduxAccpetDonar: (Uid,details) => { dispatch(AccpetDonar(Uid,details)) },
    ReduxAccpetAdmin: (Uid) => { dispatch(AccpetAdmin(Uid)) },
    cancel: (Uid) => { dispatch(cancel(Uid)) },
   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);