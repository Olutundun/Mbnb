import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import "./Signup.css";

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
            errorMsg: "",
            redirectTo: null
        }
    }
    //add form validation
    validateForm = () => {
        this.setState({
            errorMsg: ""
        });
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email)) {
            this.setState({
                errorMsg: "Email is invalid."
            });
            return false;
        }
        else if (this.state.email.length < 1 || this.state.username.length < 1) {
            this.setState({
                errorMsg: "All fields are required."
            });
            return false;
        }
        else if (this.state.password.length < 4) {
            this.setState({
                errorMsg: "Password must be at least 4 characters."
            });
            return false;
        }
        else if (this.state.password !== this.state.password2) {
            this.setState({
                errorMsg: "Passwords must match."
            });
            return false;
        }
        return true;
    }
    passwordsMatch = () => (
        this.state.password.length > 0 &&
        this.state.password === this.state.password2
    );

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            axios.post("/api/signup", {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }).then((res) => {
                console.log(res);
                if (!res.data.error) {
                    axios.post("/api/signin", {
                        username: this.state.username,
                        password: this.state.password
                    })
                        .then((res) => {
                            if (res.status === 200) {
                                console.log(res);
                                this.props.updateUser({
                                    loggedIn: true,
                                    username: res.data.username,
                                    userid: res.data.id
                                });
                                sessionStorage.setItem("user", JSON.stringify(res.data.username));
                                sessionStorage.setItem("userid", JSON.stringify(res.data.id));
                                this.setState({
                                    redirectTo: "/UserDashboard"
                                });
                            }
                        }).catch((err) => {
                            console.log("Server Login Error");
                            console.log(err);
                        });
                }
                else {
                    console.log("Sign-up error");
                    this.setState({
                        errorMsg: res.data.error
                    });
                }
            }).catch((err) => {
                console.log("Sign up server error");
                console.log(err);
            });
        }
    }

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
        //console.log("value is " + value);
    };
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        return (
            <div className="container">
                <div className=" signIn card">
                    <div className="card-header cardHeader">
                        <h1>Create an Account with MBnB.  <i className="fas fa-music"></i></h1>
                        {this.state.errorMsg ? (
                            <div className="alert alert-danger" role="alert">
                                {this.state.errorMsg}
                            </div>
                        ) : ""}
                    </div>
                    <div className="card-body">
                        <form className="container form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input name="username" value={this.state.username} onChange={this.handleInputChange} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter username"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Email">Email Address</label>
                                <input name="email" value={this.state.email} onChange={this.handleInputChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                <small id="emailHelp" className="form-text text-muted"> We''ll never share your email with anyone else.</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" className={"form-control" + (this.passwordsMatch() ? " border border-success" : "")} aria-describedby="passwordHelp" id="Password" placeholder="Enter password"></input>
                                <small id="passwordHelp" className="form-text text-muted">Password must be at least 4 characters</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Password2">Confirm Password</label>
                                <input name="password2" value={this.state.password2} onChange={this.handleInputChange} type="password" className={"form-control" + (this.passwordsMatch() ? " border border-success" : "")} aria-describedby="passwordHelp" id="Password2" placeholder="Confirm Password"></input>
                                {this.passwordsMatch() ? (
                                    <small className="form-text text-success">Passwords match!</small>
                                ) : ""}
                            </div>
                            <div className="text-center p-3">
                                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-danger">Sign up!</button>
                            </div>

                            <div className="text-center">
                                <p>Already have an account?<Link to="/Signin" className="sign-up"> Login here!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default Signup;
