import React from 'react';

class User extends React.Component {
  state = { user: null };

  componentDidMount() {
    // let user = users.find(
    //   user => user.id === parseInt(this.props.match.params.userId, 10)
    // );
   
      this.setState({
        user: this.props.location.state,
      });
  
  }

  editItem = obj => {
    console.log(obj);
    this.ref
      .child('users')
      .child(obj.id)
      .set()}

  render() {
    if(this.state.user) {
      return  <div>
        <h1>User id {this.props.match.params.id} </h1>
        <input defaultValue={this.state.user.todo} onc  />        

     
     
     
      </div>;

    }
    return <h1>User Not Found</h1>
  }
}

export default User;