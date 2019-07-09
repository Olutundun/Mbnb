import React, { Component } from 'react';
import axios from 'axios';
import Nav from './components/Navbar/index';
import Home from './pages/Home/Home';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import NotFound from './pages/NotFound/NotFound';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import ItemPage from './pages/ItemPage/index';
import Guitar from './pages/Guitar/Guitar';
import Amplifiers from './pages/Amplifiers/Amplifiers';
import Percussion from './pages/Percussion/Percussion';
import Keyboards from './pages/Keyboards/Keyboards';
import DjEquipment from './pages/DjEquipment/DjEquipment';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userid = JSON.parse(sessionStorage.getItem("userid"));
    if (user && userid) {
      this.state = {
        loggedIn: true,
        username: user,
        userid: userid
      }
    }
    else {
      this.state = {
        loggedIn: false,
        username: null,
        userid: null
      }
      this.getUser();
    }
    this.componentDidMount = this.componentDidMount.bind(this);
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
    if (user) {
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
        if (response.data.user) {
          console.log("there is a user!")
          this.setState({
            loggedIn: true,
            username: response.data.username,
            userid: userid
          })
          sessionStorage.setItem("user", JSON.stringify(response.data.username));
        } else {
          this.setState({
            loggedIn: false,
            username: null,
          })
        }
      });
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
            <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} />} />
            <Route exact path="/UserDashboard" render={(props) => <UserDashboard {...props} loggedIn={this.state.loggedIn} username={this.state.username} userid={this.state.userid} />} />
            <Route exact path="/Signin" render={() => <Signin updateUser={this.updateUser} />} />
            <Route exact path="/Signup" render={() => <Signup updateUser={this.updateUser} />} />
            <Route exact path="/ItemPage/:slug" component={ItemPage} />
            <Route exact path="/Guitar" component={Guitar} />
            <Route exact path="/Amplifiers" component={Amplifiers} />
            <Route exact path="/Percussion" component={Percussion} />
            <Route exact path="/Keyboards" component={Keyboards} />
            <Route exact path="/DjEquipment" component={DjEquipment} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


