//React Basic Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

//Material-UI Components
import {withStyles, Paper , Typography, CircularProgress,} from '@material-ui/core'

//firebase & its components
// import * as firebase from 'firebase';
import '../config';

//Custom Tags
// import PositionedSnackbar from '../containers/snackbar';

class SignIn extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.motherContainer}>
          <Paper
            className={classes.root}
            elevation={5}>
            <Typography
              align='center'
              color='secondary'
              variant='h4'
              children='Blood Bank'
            />
            <Typography
              align='center'
              color='primary'
              variant='h5'
              gutterBottom={true}
              children={'Login'}
            />

<StyledFirebaseAuth {...this.props}/>




          </Paper>
        
   </div>
    );
  }
}

const styles = theme => ({
  motherContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customSpacing: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    width: 350,
  },
});

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);