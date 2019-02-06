import React, { Component } from 'react';
import List from '../compent/input'
import Gender from '../compent/Gender'
import Groups from '../compent/Optain'
import Date from '../compent/Date'
import Button from '../compent/Button'
import { connect } from 'react-redux';
import { edit,messageShow,UserExist } from '../Store/Actions'

class App extends Component {
constructor(){
  super()
    this.state={
      complete:false,
        value:''
      
  }
}

SendData=()=>{
  
const {Group ,Addears,Age,Phone_Number} = this.state
if(Group  &&  Age &&  Addears &&Phone_Number ){
const details = {userDetail:'' , MoreAboutUser:this.state}
details.userDetail = this.props.UseDeatils;
this.props.edit(details)
this.setState({Group:'',Addears:"",Age:""})

}
else{
   this.props.messageShow('error','Please fill the information correct')
}

}




onChange=(e)=>{
  this.setState({[e.target.name]:e.target.value})
     }




     onChanges=(e)=>{
      this.setState({Group:e})
         }




   onChangePhone=(e)=>{
    
    this.setState({Phone_Number:e.target.value})
   }
            

componentDidMount =()=>{
  this.props.UserExist(this.props.UseDeatils.uid)
}
  

    render() {
  
      return (
        <div className='ceter'>
<h4>
  In Any Case You want update Refill the following from
</h4>

 {/* {this.state.update? */}
<div>     <Groups onChange={this.onChanges}  />
          <List name='Addears' onChange={this.onChange} type='text' />
          <List name='Phone_Number' onChange={this.onChangePhone} type='number' />
          <List name='Age' onChange={this.onChange} type='number' />               
          <Gender onChange={this.onChange} />
         <Button onClick={this.SendData} type='primary' text='Sumbit' />
</div> 
  {/* :null
          }  */}
        </div>

      );
    }
  }
  
  function mapStateToProp(state) {
    return ({
        UseDeatils:state.root.userDetail,
        UserExist:state.root.UserExist

    })
  }
  
  
  
  function mapDispatchToProp(dispatch) {
    return ({
      edit: (details) => { dispatch(edit(details)) },
      messageShow: (type,message) => { dispatch(messageShow(type,message)) },
      UserExist: (type,message) => { dispatch(UserExist(type,message)) },
      
    })
  }
  
  export default connect(mapStateToProp, mapDispatchToProp)(App);