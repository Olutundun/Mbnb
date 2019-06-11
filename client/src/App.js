import React from 'react';
import Nav from './components/Nav';

import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/UserDashboard" component={UserDashboard}/>
          <Route component={NotFound}/>
        </switch>
      </div>
    </Router>
  );
}

export default App;
