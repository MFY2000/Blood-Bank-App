import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToBecomeAdmin,AdminOrNot } from '../Store/Actions';
import Button from '../compent/Button'
import AdminFunction from './ToBecomeList'
class App extends Component {
    constructor(){
        super()
        this.state={
            Admin:true
        }
    }
    ToBecomeAdmin=()=>{
        const details = {userDetail:{},MoreAboutUser:{}}
        details.userDetail = this.props.UseDeatils
          this.props.ToBecomeAdmin(details)
  
}
  
    AdminOrNot=()=>{
        const Admin = this.props.Admin
        this.setState({Admin:Admin})
        }
        


componentDidMount=()=>{
this.AdminOrNot()
}

  
    render() {
  
      return (
        <div>
        {this.state.Admin?
        <div>
        <AdminFunction />

        </div>
        
        
        :(
        
           
            <Button onClick={this.ToBecomeAdmin} type='secondary' text=' To Become Admin' />
      
        )}




        </div>

      );
    }
  }
  
function mapStateToProp(state) {
  return ({
    UseDeatils:state.root.userDetail,
    Admin : state.root.AdminOrNot
  })
}



function mapDispatchToProp(dispatch) {
  return ({
    ToBecomeAdmin: (details) => { dispatch(ToBecomeAdmin(details)) },   
    ReduxAdminOrNot: (details) => { dispatch(AdminOrNot(details)) },   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);