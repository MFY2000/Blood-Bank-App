import React, { Component } from 'react';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      todo: '',
      time: ''
    };
  this.ref = firebase.database().ref();
  // this.id = 
  }

componentDidMount(){
this.setId()
this.setTime()
}

setTime(){
  var today = new Date()
const Time = today.toLocaleTimeString();
console.log(Time)
this.setState({time:Time})
}

setId(){
 const Id = this.ref.child("user").push().key;
 console.log(Id)
this.setState({id:Id})


}
componentWillUnmount(){
  this.setState({ id:'',todo:'',time:'' });

}



  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  saveData = () => {
    // this.props.sendData(this.state);
    this.ref.child('users/'+this.props.location.state).child(this.state.id).set(this.state);
    
    this.props.history.replace('/');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        {/* {console.log()} */}
        <Card className={classes.card}>
          <CardContent>
            <br />
            <TextField
              id="todo"
              label="Todo"
              fullWidth
              onChange={this.handleChange}
            />
            <br />
          <Button className={classes.button} >
             ID : {this.state.id}
            </Button>
            <br />
            <Button className={classes.button} >
             time : {this.state.time}
            </Button>
          </CardContent>
          <CardActions>
            <Button
              variant="extendedFab"
              fullWidth
              color="primary"
              onClick={this.saveData}
            >
              Add User
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  card: {
    minWidth: 300,
    maxWidth: 500
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
};
export default withStyles(styles)(App);
