import React from "react";

function Signin() {
    return (
        
        <div className="container col-md-6 m-5">
            <h1>Sign In</h1>
            <form>
                <div className="form-group">
                    <label for="Email"> Email Address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted"> We''ll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="Password"> Password </label>
                    <input type="password" className="form-control" id="Password" placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Signin;