import React from 'react';
import PropTypes from 'prop-types';
import { withStyles ,createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import green from '@material-ui/core/colors/red';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

class NativeSelects extends React.Component {
  state = {
    Group: '',
  };

  

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    this.props.onChange( event.target.value )
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme} >
      <div className={this.props.className}>
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Group-native-simple">Group</InputLabel>
          <Select
            native
            value={this.state.Group}
            onChange={this.handleChange('Group')}
            inputProps={{
              name: 'Group',
              id: 'Group-native-simple',
            }}
          >
            <option value="" />
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
      </Select>
        </FormControl>
        
      </div>
      </div>


      </MuiThemeProvider>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NativeSelects);
  