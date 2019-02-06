import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Body from './Blood-Bank/main';
import Login from './login/App';
import Message from './App'
import Notificat from './notification'
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div className='displayLine'>
          <Route  path="/" component={Login} />
          <Route  path="/" component={Message} />
          <Route exact path="/User/:uid" component={ Body } />
          <Route exact path="/Notification" component={ Notificat } />

          
        </div>
      </Router>
    );
  }
}
export default Routes;
