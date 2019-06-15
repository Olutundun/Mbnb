import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <ul className="nav bg-dark nav-pills p-2">
                <li className="nav-item m-2">
                    <a className="nav-link active" href="/">Mbnb</a>
                </li>
                <li className="nav-item m-2">
                    <a className="nav-link active" href="/Signin">Sign in</a>
                </li>
                <li className="nav-item m-2">
                    <a className="nav-link active" href="/Signup">Sign Up</a>
                </li>
                <li className="nav-item m-2">
                    <a className="nav-link active" href="/UserDashboard">User Dashboard</a>
                </li>
            </ul>
        </div>
            );
        }
        
export default Navbar;