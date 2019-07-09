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
            errorMsg: "",
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
        axios.post("/api/signin",
            userData
        ).then(response => {
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
            <div className="container">
                <div className=" signIn card">
                    <div className="card-header cardHeader">
                        <h1>SIGN IN!</h1>
                    </div>
                    <div className="card-body">
                        <form className="container form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input name="username" value={this.state.username} onChange={this.handleInputChange} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter username"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Password"> Password </label>
                                <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" id="Password" placeholder="Enter password"></input>
                            </div>

                            <div className="text-center p-3">
                                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-danger">SIGN IN!</button>
                            </div>

                            <div className="text-center">
                                <p>New to Mbnb? <Link to="/Signup" className="signUp">Sign Up here!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;
