import React, { Component } from 'react';
import Optain from '../compent/Optain'
import List from './Veiws'
import { connect } from 'react-redux';
import { forGroupList ,Request,messageShow } from '../Store/Actions';


class App extends Component {
  constructor(){
    super()
    this.state={
      GroupsList:[],
      Groups:[],
    Match:{
      "A+":["A+","O+","O-"],
      "A-":["A-","O-"],
      "B+":["B+","O+","O-"],
      "B-":["B-","O-"],
      "AB+":["A+","O+","O-","B-","AB+"],
      "AB-":["A-","O+","O-","B-","AB-"],
      "O+":["O+","O-"],
      "O-":["O-"]
    }
    }}

  componentDidUpdate=()=>{
   
    const GroupList = this.props.GroupList.List
  const GroupsList = this.state.GroupsList
    if(GroupList !==GroupsList ){
      this.setState({GroupsList:GroupList,Key:this.props.GroupList.key})}
  }
  
  onChange=(details)=>{
    const value = this.state.Match[details];
    const user = this.props.userDetail.uid
      this.props.forGroupList(value,user)
      }
      

      Request=(data)=>{
        const user = this.props.userDetail
        user.details = 'Needed Blood for some one emergency'
        user.type = 'pending'
        user.seen = 'false'
        user.requestType = 'someone send you'
        user.PresonWhichGoesBlood = data.userDetail.uid;
        user.Group = data.MoreAboutUser.Group     
     
        const more = data.userDetail
        more.details = 'if Needed Blood for some one emergency Please contact them'
        more.type = 'pending'
        more.seen = 'false'
        more.PresonWhichGoesBlood = this.props.userDetail.uid
        more.requestType = 'you send someone'

        this.props.ReduxRequest(more,user)
        
      }
  
    render() {
  
      return (
        <div>
        <Optain className='ceter' onChange={this.onChange} />
        {this.state.GroupsList ? <List {...this.state} Request={this.Request} uid={this.props.UserUid} />:
        <h4 className='Center' >No blood group selceted</h4>}
        </div>

      );
    }
  }
  
function mapStateToProp(state) {
  return ({
    GroupList:state.root.GroupList,
    userDetail:state.root.userDetail
  
  })
}


// 
function mapDispatchToProp(dispatch) {
  return ({
    forGroupList: (Group,Uid) => { dispatch(forGroupList(Group,Uid)) },
    ReduxRequest: (req,reqsend) => { dispatch(Request(req,reqsend)) },
    messageShow: (req,reqsend) => { dispatch(messageShow(req,reqsend)) },
   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);