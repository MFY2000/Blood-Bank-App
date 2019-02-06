import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Veiws from '../compent/Veiws';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function DetailedExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.column}>
            <Typography className={classes.heading}><img src={props.props.userDetail.photoURL} className='img' /></Typography>
            {props.props.userDetail.displayName}
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>{props.props.userDetail.email}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{props.Type}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column } />
<Veiws {...props} className='right' />

        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>

{props.Type == 'To Become Donar List' ? 
        <div>
<Button size="small" onClick={()=>{props.cancel(props)}} >Cancel</Button>
<Button size="small" color="primary" onClick={()=>{
props.AccpetDonar(props.value,props.props)
}} >Accpet</Button> 
        </div>
:
<div>
<Button size="small" onClick={()=>{props.cancel(props)}} >Cancel</Button>
<Button size="small" color="primary" onClick={()=>{
  props.AccpetAdmin(props.props.userDetail)
}} >Accpet</Button> 
</div>

} 
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);