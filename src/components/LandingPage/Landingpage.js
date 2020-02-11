import React from "react";
import "./Landingpage.css";

import BRoll from "../../images/black-headset.jpg"

import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaCircle } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import "../../App.css";

import Popup from "reactjs-popup";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        }

    render() {

        const LoginButton = () => (
            <Popup
              trigger={<div className="button-container"><h1 className="landing-button-font" style={{ color: '#ffffff' }}>Login</h1></div>}
              modal
              closeOnDocumentClick
            >
                <div className="sign-up-form">
                    <h1>Username or password were not found!</h1>
                </div>
            </Popup>
        );

        const SignUpPage2 = () => (
            <Popup
            trigger={<FaArrowAltCircleRight size={30} />}
            modal
            closeOnDocumentClick
            >
                <div className="sign-up-form">
                    <h1>Hello World</h1>
                </div>
            </Popup>
        );
        
        // TODO: Grab prof pic from computer FileList, store inputs in variables
        const SignUpButton = () => (
            <Popup
              trigger={<div className="button-container"><h1 className="landing-button-font" style={{ color: '#ffffff' }}>Sign Up</h1></div>}
              modal
              closeOnDocumentClick
            >
                {/* Put the change of view in the PopUp element */}
                {/* <this.changePopUpComponent signUpPage={this.state.popUpIndex} /> */}
                <div className="sign-up-form">
                    <h1 align="center">Sign up with SongWriter!</h1>
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
                    <div className="navigation-buttons">
                        <div></div>
                        <div>
                            <FaArrowAltCircleRight size={30} />
                        </div>
                    </div>
                </div>
            </Popup>
          );
        
        function myFunction() {
            var element = document.getElementById("landing-page");
            var signUpPages = document.getElementById("sign-up-pages");
            var leftSignUp = document.getElementById("left-sign-up");
            var rightSignUp = document.getElementById("right-sign-up");
            element.classList.toggle("hide");
            signUpPages.classList.toggle("show");
            leftSignUp.classList.toggle("show");
            rightSignUp.classList.toggle("show");
        }
        
        return (
        <div className="full-screen">
          <div className="grid-container-landing">
                <div className="header-landing">
                    <div className="landing-logo-container">
                        <div className="logo-background">
                            <FaMusic size={50}/>     
                        </div>
                        <h1 className="landing-logo">SongWriter</h1>  
                    </div>
                    
                    <div className="landing-logo-container landing-logo-container-right">
                        <div className="landing-username-pw-input">  
                            <input type="text" placeholder="Username" name="username" />
                        </div>
                        <div className="landing-username-pw-input">
                            <input type="text" placeholder="Password" name="password" />
                        </div>
                        <LoginButton/>
                        <div className="button-container" onClick={() => myFunction()}>
                            <h1 className="landing-button-font">
                                Sign Up
                            </h1>
                            </div>
                    </div>
                    
                </div>

                <div className="body-landing">       
                    <div>
                        <img src={BRoll} alt="B-Roll" align="center" />
                    </div>
                </div>

                <div className="footer-landing">
                    <div></div>
                    <div className="socials-icon-container">
                        <FaFacebookF size={38}/>
                        <FaTwitter size={40}/>
                        <FaInstagram size={40}/>  
                    </div>
                </div>
                
            </div>
        </div>    
      );
    }
  }
  
  export default LandingPage;