import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import Input from '../compent/input'

class ShowList extends Component {
  state = {
    data: '',
    updateNumber:"",
    update:true,
    updateValue:''  
  };

componentDidMount=()=>{
  this.come()
}

come=()=>{
  fetch('http://localhost:2000/')
  .then(response => response.json())
  .then( Todo  => this.setState({  Todo  }));

}



  ChangeHader=(e)=>{
  this.setState({updateValue:e.target.value})

}

saveUpdate=()=>{        
  const updateValue = this.state.updateValue;
  const updateNumber = this.state.updateNumber;
  
  
  const fahad = {updateValue: updateValue,};
  const options ={
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    }
    ,body:JSON.stringify(fahad)
  }
  fetch(`http://localhost:2000/put/${updateNumber}`,options)
  .then(response => response.json())
  .then( Todo  => this.setState({  Todo  }));
  
  
  this.setState({update:false,updateNumber:'',updateValue:''})





  }

add=()=>{
  const fahad = {todo : ''};
  const options ={
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    }
    ,body:JSON.stringify(fahad)
  }
  fetch('http://localhost:2000/post',options)
  .then(response => response.json())
  .then( Todo  => this.setState({  Todo  }));
  
  const TodosLength = this.state.Todo.length;
   this.setState({update:true,updateNumber:TodosLength,updateValue:''})
  
  }

  Update=(row,ind)=>{
    this.setState({update:true, updateValue:row ,updateNumber:ind})
    }


    deleteItem=(ind)=>{
      const options ={
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        }
      }
      fetch(`http://localhost:2000/delete${ind}`,options)
      .then(response => response.json())
      .then( Todo  => this.setState({  Todo  }));
      
          }
            

  render() {
    const { classes } = this.props;
    const  data  = this.state.Todo;
    return (
      <Paper className={classes.root}>
{console.table(this.state.Todo)}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell numeric> S.No</TableCell>
              <TableCell />              
              <TableCell> Todo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell numeric>{index + 1}</TableCell>
                    <TableCell numeric>
{ this.state.update && this.state.updateNumber === index ? 
(<Input onChange={this.ChangeHader} value={this.state.updateValue} />)
:(row)
}
  </TableCell>

  <TableCell numeric>
  
  {this.state.update && this.state.updateNumber === index ?(
    <Button
    variant="fab"
    color="primary"
    aria-label="✔"
    className={classes.button}
    onClick={this.saveUpdate}
  >✔</Button>
  
     ):(
  <span> 
    <Button
    variant="fab"
    color="primary"
    aria-label="Edit"
    className={classes.button}
    onClick={() => this.Update(row,index)}
  >
    <EditIcon />
  </Button>
  <Button
    variant="fab"
    color="secondary"
    aria-label="Delete"
    className={classes.button}
    onClick={() => this.deleteItem(index)}
  >
    <DeleteIcon />
  </Button></span>

  )}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <Button
          variant="fab"
          className={classes.fab}
          color={'primary'}
          onClick={this.add}
        >
          <AddIcon />
        </Button>
      </Paper>
    );
  }
}

ShowList.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 5,
    right: theme.spacing.unit * 7
  }
});
export default withStyles(styles)(ShowList);
