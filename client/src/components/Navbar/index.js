import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "./style.css";

class Navbar extends Component {
    constructor(props) {
        super()
        this.signout = this.signout.bind(this);
        this.state = {
            redirectTo: null
        }
    }

    signout = (e) => {
        e.preventDefault();
        axios.post("/api/signout").then((res) => {
            if (res.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                });
                sessionStorage.clear();
                this.setState({
                    redirectTo: "/"
                })
            }
        }).catch((err) => {
            console.log("error: " + err)
        })
    }
    render() {
        if (this.state.redirectTo) {

            //setting state here throws a warning
            let redirect = this.state.redirectTo;
            this.setState({
                redirectTo: null
            })
            return <Redirect to={{ pathname: redirect }} />
        }
        const loggedIn = this.props.loggedIn;
        console.log(this.props);
        return (
            <div>
                <nav className="navbar nav bg-light nav-pills">
                    <Link to="/"><img id="logo-small"src="./images/logo.png" alt="logo"></img></Link>
                    <ul className="navbar-nav d-flex flex-row ">
                        {loggedIn ? (
                            <React.Fragment>
                             
                                <li id="nap-icon"className="nav-item">
                                    <i className="fab fa-napster"></i>
                                </li>
                                <li>
                                    <h3 id="logged-in-user" className="navbar-text">Hello {this.props.username}!</h3>
                                </li>
                               
                                <li className="nav-item">
                                    <Link to="/UserDashboard"><button className="btn btn-success">Dashboard</button></Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-primary" id="logout-link" onClick={this.signout}>SignOut</button>
                                </li>

                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    <li className="nav-item">
                                        <Link to="/Signup"><button type="button" className="btn btn-dark">Sign up</button></Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Signin"><button type="button" className="btn btn-warning">Sign in</button></Link>

                                    </li>
                                </React.Fragment>
                            )}
                    </ul>
                </nav>
            </div>


        )
    }
}
export default Navbar;
