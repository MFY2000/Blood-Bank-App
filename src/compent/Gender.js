import React from 'react';
import { makeStyles, } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {OutlinedInput} from '@material-ui/core';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
}));

function ControlledOpenSelect(props) {
  
  return (
    <form autoComplete="off">
         <FormControl
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                >
                  <InputLabel
                    htmlFor="filled-gender-native-simple"
                  >
                    Gender
                  </InputLabel>
                  <Select
                    native
                    value={props.gender}
                    onChange={props.onChange}
                    input={
                      <OutlinedInput
                        labelWidth={55}
                        name="gender"
                        id="filled-gender-native-simple"
                      />}
                  >
                    <option value="" />
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </Select>
                </FormControl></form>
  );
}

export default ControlledOpenSelect;