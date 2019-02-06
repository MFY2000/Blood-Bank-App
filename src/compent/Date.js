import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    primary:red
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DatePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Last Blood Donated"
        type="date"
        name="date"
        defaultValue="mm/dd/yy"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.onChange}

      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);