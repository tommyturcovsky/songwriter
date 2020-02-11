import React from "react";
import "./SignUpPage.css";

import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaCircle } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import {FaArrowAltCircleRight} from 'react-icons/fa';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        }
    render() {
        return (
            <div id="SignUpPage" className="sign-up-page">
                <div className="sign-up-inner-box">
                <h1 className="sign-up-title" align="center">Sign up with SongWriter!</h1>
                <div className="add-profile-pic">
                    <FaPlus size={140}/><h2 className="add-profile-pic-text"> Add Profile Pic</h2>
                </div>
                <div className="input-signup-entry">
                    <input className="input-box" type="text" placeholder="Username" name="username" />
                    <div></div>
                </div>
                <div className="input-signup-entry">
                    <input className="input-box" type="text" placeholder="Password" name="password" />
                    <input className="input-box" type="text" placeholder="Confirm Password" name="confirm password" />
                </div>
                <div className="input-signup-entry">
                    <input className="input-box" type="text" placeholder="First Name" name="fName" />
                    <input className="input-box" type="text" placeholder="Last Name" name="lName" />
                </div>
                <div className="input-signup-bio">
                    <textarea className="bio-input" type="text" id="create-post-input" maxLength="250" placeholder="Enter your bio here!"/>
                </div>
            </div>
            {/* <div className="navigation-buttons">
                <div></div>
                <div className="navigation-button">
                    <FaArrowAltCircleRight size={60} />
                </div>
            </div> */}
        </div>
        );
    }
}

export default SignUpPage;