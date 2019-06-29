import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar nav bg-dark nav-pills">
            <a className="navbar-brand" href="/">Mbnb</a>
            <ul className="navbar-nav d-flex flex-row ">
            
                <li className="nav-item m-1">
                    <a className="nav-link active px-1" href="/Signin">Sign in</a>
                </li>
                <li className="nav-item m-1">
                    <a className="nav-link active px-1" href="/Signup">Sign Up</a>
                </li>
                <li className="nav-item m-1">
                    <a className="nav-link active px-1" href="/UserDashboard">User Dashboard</a>
                </li>
                
            </ul>
            </nav>
        </div>
            );
        }
        
export default Navbar;