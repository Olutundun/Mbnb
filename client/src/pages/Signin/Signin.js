import React, { Component } from "react";
import axios from 'axios';
import "./signin.css";

class Signin extends Component {
    constructor(props) {
        super(props)
        this.changePage = this.changePage.bind(this);
    }

    state = {
        username: "",
        email: "",
        password: ""
    }

    changePage = () => {
        this.props.history.push('/UserDashboard');
    }

    handleFormSubmit = (event) => {
        //const that = this;

        event.preventDefault();
        console.log("submitted!")
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
        axios.get("api/users", userData)
            .then(function (response) {

                //that.changePage();
                console.log(response)
            }).catch(function (err) {
                console.log(err)
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
        return (
            <div className="container col-md-6 m-5">
                <h1>Sign In</h1>
                <form>
                <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                                <input name="username" value={this.state.username} onChange={this.handleInputChange} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"></input>
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
                        <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" id="Password" placeholder="Password"></input>

                    </div>
                    <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Signin;
