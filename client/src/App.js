import React, { Component } from 'react';
import axios from 'axios';
import Nav from './components/Navbar/index';
import Home from './pages/Home/Home';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import NotFound from './pages/NotFound/NotFound';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userid = JSON.parse(sessionStorage.getItem("userid"));
    if(user && userid) {
      this.state = {
        loggedIn: true,
        username: user,
        userid: userid
      }
    }
    this.state = {
      loggedIn: false,
      username: null,
      userid: null
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getUser();
  } 

  componentDidMount() {
    this.getUser();
  }
  updateUser = (userObj) => {
    console.log(userObj)
    this.setState(userObj);
  }
  getUser = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userid = JSON.parse(sessionStorage.getItem("userid"));
    if(user) {
      console.log("GET FROM SESSION STORAGE");
      this.setState({
        loggedIn: true,
        username: user,
        userid: userid
      });
    } else {
      console.log("GET FROM SERVER");
    axios.get('/api/users').then(response => {
      console.log(response.data)
      if(response.data.user) {
           console.log("there is a user!")
           this.setState({
             loggedIn: true,
             username: response.data.username
           })
           sessionStorage.setItem("user", JSON.stringify(response.data.username));
      } else {
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  }
 

  render() { 
    return ( 
      <Router>
      <div>
        <Nav 
         username={this.state.username} 
         userid={this.state.userid}
         loggedIn={this.state.loggedIn} 
         updateUser={this.updateUser}
        />
        <Switch>
          <Route exact path="/" render={() => <Home  loggedIn={this.state.loggedIn}/>}  />
          <Route exact path="/UserDashboard" render={(props) => <UserDashboard {...props} loggedIn={this.state.loggedIn} username={this.state.username} userid={this.state.userid}/>} />
          <Route exact path="/Signin" render={() => <Signin updateUser={this.updateUser}/>}/>
          <Route exact path="/Signup"  render={() => <Signup updateUser={this.updateUser}/>} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
     );
  }
}
 
export default App;


