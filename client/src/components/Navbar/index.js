import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            {/* <Link to="/">
                <img src="/img/die.png" alt="20-sided-die" width="50" height="50"></img>
            </Link> | &nbsp; */}
            <Link to="/">Mbnb</Link> | &nbsp;
            <Link to="/Signin">Sign in</Link> | &nbsp;
            <Link to="/Signup">Sign up</Link> | &nbsp;
            <Link to="/UserDashboard">User Dashboard</Link>
        </div>
    );
}

export default Navbar;