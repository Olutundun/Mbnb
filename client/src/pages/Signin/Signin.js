import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import "./signin.css";
import axios from "axios";

class Signin extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            redirectTo: null
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        //console.log("almost submitted!")
        this.setState({
            errorMsg: ""
        });
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(userData);
        // this.props.Signin(this.state.username, this.state.password)
        // this.setState({
        //     redirectTo: '/UserDashboard'
        // })
        //console.log(userData.username);
        // if (!userData.username || !userData.email || !userData.password) {
        //     return;
        // }
        // axios.get("api/users", userData)
        //     .then(function (response) {
        //         //that.changePage();
        //         console.log(response)
        //     }).catch(function (err) {
        //         console.log(err)
        //     })
        axios.post("/api/signin", 
            userData
        ).then(response => {
            console.log('signin response: ')
            console.log(response)
            const userid = response.data.id;
            const username = response.data.username;
            if (response.status === 200) {
                //update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: username,
                    userid: userid,
                })
                sessionStorage.setItem("user", JSON.stringify(username));
                sessionStorage.setItem("userid", JSON.stringify(userid));
                //update the state to redirect to home
                this.setState({
                    userid: userid,
                    redirectTo: '/UserDashboard'
                })
            }
        }).catch(error => {
            console.log(error);
            this.setState({
                errorMsg: "login failed"
            })
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        //console.log("value is " + value);
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        return (
            <div className="container col-md-6 m-5">
                <h1>Sign In</h1>
                <form>
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                                <input name="username" value={this.state.username} onChange={this.handleInputChange} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter username"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password"> Password </label>
                        <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" id="Password" placeholder="Enter password"></input>

                    </div>
                    <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
                    <div className="text-center">
                              <Link to="/Signup" className="sign-up">New to Mbnb? Sign Up here!</Link>
                          </div>
                </form>
            </div>
        );
    }
}

export default Signin;
