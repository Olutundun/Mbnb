import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import "./Signup.css";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            redirectTo: null
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    //add form validation



    handleFormSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData);
        //console.log(userData.username);
        if (!userData.username || !userData.email || !userData.password) {
            return;
        }
        axios.post("/api/signup", userData)
            .then(function (response) {
                console.log(response)
                if (!response.data.error) {
                    axios.post("/api/signin", {
                        username: this.state.username,
                        password: this.state.password
                    }).then((response) => {
                        if (response.status === 200) {
                            console.log(response);
                            this.props.updateUser({
                                loggedIn: true,
                                username: response.data.username,
                                userid: response.data.id
                            })
                            sessionStorage.setItem("user", JSON.stringify(response.data.username));
                            sessionStorage.setItem("userid", JSON.stringify(response.data.id));
                            this.setState({
                                redirectTo: "/UserDashboard"
                            })
                        }
                    })
                }
            }).catch(function (err) {
                console.log(err)
            })
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
                        <h4>Please sign up to Mbnb</h4>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <h4 className="card-title p-3">We are glad you are here!</h4>
                            <h4 className="card-title mb-2">Let's Sign up!</h4>
                        </div>

                        <form className="container form">

                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input name="username" value={this.state.username} onChange={this.handleInputChange} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter username"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Email"> Email Address</label>
                                <input name="email" value={this.state.email} onChange={this.handleInputChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                <small id="emailHelp" className="form-text text-muted"> We''ll never share your email with anyone else.</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Password"> Password </label>
                                <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" id="Password" placeholder="Enter password"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Password"> Confirm Password </label>
                                <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" id="Password2" placeholder="Confirm Password"></input>
                            </div>

                            <div className="text-center p-3">
                                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
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
