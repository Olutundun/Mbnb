import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <div>
            {/* <Link to="/">
               <p>Mbnb</p>
            </Link> | &nbsp; */}
            
            <Link to="/">Mbnb</Link> | &nbsp;
            <Link to="/UserDashboard">User Dashboard</Link>
        </div>
    );
}

export default Nav;