import React, { Component } from "react"
import firebase from "firebase"
import { connect } from 'react-redux';
import { Login , isSignfalse,isSignture } from '../Store/Actions';
import "../config";
import "../App.css";
import Header from "./Header"
import Email from "./Email";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      IsSignIn : this.props.IsSignIn,
      displayName : this.props.userDetail.displayName,
      uid : this.props.userDetail.uid,
      photoURL : this.props.userDetail.photoURL,
    }

  }



  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }



  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {this.Data(user)    }})
      this.fahad()
    }


  Data(user){
    this.props.isSignture()
    this.props.login(user)
    this.setState({    
      IsSignIn : this.props.IsSignIn,
      displayName : user.displayName,
      uid : user.uid,
      photoURL : user.photoURL,
      email : user.email,
      phoneNumber : user.phoneNumber,
})

     this.props.history.replace('/User/'+ user.uid)

  }


  sigout = () => {
    this.props.isSignfalse()
    firebase.auth().signOut()
    this.props.history.replace('/')
    }

fahad=()=>{
  this.props.login(this.state)

}

  render() {
    return (
      <div className='Exter'>

 {this.props.IsSignIn ? (
 <div>
   {/* {this.fahad()} */}
 <Header data={this.state} signOut={this.sigout} {...this.props}  /> 

</div> 

 ) : (
 <Email uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}  />
 

)}
      </div>
    )
  }
}
  
function mapStateToProp(state) {
  return ({
    LoginSuccessFull : state.root.LoginSuccessFull,
    IsSignIn : state.root.isSignedIn,
    userDetail : state.root.userDetail,
  })
}



function mapDispatchToProp(dispatch) {
  return ({
   login: (Uid) => { dispatch(Login(Uid)) },
   isSignfalse: () => { dispatch(isSignfalse()) },
   isSignture: () => { dispatch(isSignture()) },
   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);