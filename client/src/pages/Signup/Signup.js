import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

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
            <div className="container col-md-6 m-5">
                <h3>Fill out the form to get started!</h3>
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
                    <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
                    <div className="text-center">
                        <Link to="/Signin" className="sign-up">Already have an account? Login here!</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;
