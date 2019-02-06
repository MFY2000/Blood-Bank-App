import React from 'react'
import Button from '../compent/Button';
import { connect } from 'react-redux';
import { ToBecomeAdmin,AdminOrNot,RequestShow } from '../Store/Actions';
import Request from './Request';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      value:true,
      lenght:0,
      complete:true,
      check:false
    }


  }


componentWillUpdate=()=>{
  this.AdminOrNot();
}

componentWillReceiveProps=()=>{
  if(!this.state.check&&this.props.Lenght){
   this.setState({check:true,lenght:this.props.Lenght,value:false})
  }
}



fahad=()=>{
  if(this.props.RequestShown !== ''){
    this.props.RequestShown.List.map((index,value)=>{
      if(index.seen!==true){
      this.setState({lenght:(this.state.lenght + 1) ,value:false ,})

  }
})

}
}




show=()=>{
  this.props.history.replace('/Notification')
  this.setState({ value:true,lenght:0,})
}



    AdminOrNot=()=>{
      const details = this.props.UseDeatils.uid
 if(details!==null&&details!==undefined&&this.state.complete){
   this.setState({complete:false})
  this.props.ReduxAdminOrNot(details);
  this.props.RequestShow(details)
}
    }

  render() {
    return (
      <div className="rightSide">
        <Button onClick={this.props.signOut} type='secondary' text='Signout' />
        <Request {...this.state} Show={this.show} />
         <img alt="profile picture" className='leftSide' src={this.props.data.photoURL} />
        <h4 className="jj">Welcome {this.props.data.displayName}</h4>
      </div>
    );
  }

}


function mapStateToProp(state) {
  return ({
    UseDeatils:state.root.userDetail,
    Admin : state.root.AdminOrNot,
    RequestShown : state.root.RequestShown,
    Lenght : state.root.Lenght
  })
}



function mapDispatchToProp(dispatch) {
  return ({
    ToBecomeAdmin: (details) => { dispatch(ToBecomeAdmin(details)) },
    ReduxAdminOrNot: (details) => { dispatch(AdminOrNot(details)) },

    RequestShow: (details) => { dispatch(RequestShow(details)) },
  })
}

export default connect(mapStateToProp, mapDispatchToProp)( Header)