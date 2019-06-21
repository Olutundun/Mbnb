import React from 'react';
import Nav from './components/Navbar';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/UserDashboard" component={UserDashboard} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
