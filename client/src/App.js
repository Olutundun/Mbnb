import React, { Component } from 'react';
import Nav from './components/Navbar/index';
import Home from './pages/Home/Home';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import NotFound from './pages/NotFound/NotFound';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  render() { 
    return ( 
      <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/UserDashboard" component={UserDashboard} />
          <Route exact path="/Signin" component={() => <Signin/>} />
          <Route exact path="/Signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
     );
  }
}
 
export default App;


