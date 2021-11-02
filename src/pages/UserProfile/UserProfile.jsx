import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";

import "./UserProfile.styles.css";

export default function UserProfile (props) {

    return (
        <div className="container">
            <h1 className="title">Profile</h1>
            <p className="click-btn"> Back to Home</p>
            <h2 className="section-title">Account Info</h2>
            <div className="change-item" >
                <h3 className="menu-item">Name</h3> 
                    <p className="click-btn">Edit</p>
                <h3 className="menu-item">Email</h3>
                    <p className="click-btn">Edit</p>
                <h3 className="menu-item">Saved Searches</h3> 
                    <p className="click-btn">Manage</p>
            </div>
            
            <h2 className="section-title">Manage Account</h2>
            <div className="change-item">
                <h3 className="menu-item">Password</h3> 
                    <p className="click-btn">Change</p>
            </div>

            {/* <h4 className="deactivate">Delete My Account</h4> */}
            {/* <button className="click-btn">Deactivate Account</button> */}
            <Link to="/deleteuser">
            <button className="bg-red-600 w-auto rounded p-2">
                Delete Account
            </button>
            </Link>

        </div>
    )
}