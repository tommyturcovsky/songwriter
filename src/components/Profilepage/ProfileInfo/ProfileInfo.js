import React, { Component } from "react";
import "./ProfileInfo.css";
import Susan from "../../../images/SusanSarandonProfPic.png"

class ProfileInfo extends React.Component {
    render() {
      return (
        <div className="grid-container-profileInfo">
         
          {/* bio-section */}
          <div className="grid-bio-section">
            <div className="profile-pic-edit-container">
              <div className="profile-pic">
                <img src={Susan} alt="Profile Pic" align="center" border-radius="50%"></img>
              </div>
              <h1 className="edit-profile">Edit Profile</h1>
            </div>
            <div className="username-bio">
              <h1 className="username">Susan Sarandon</h1>
              <h2 className="handle">@SingSongSusan</h2>
              <p className="bio">I am the real Susan Sarandon. Come checkout my beats!</p>
            </div>
          </div>

          {/* flex-info */}
          <div className="flex-info">
            <div className="follower-count">
              <div className="flex-count-box">
                <h1 className="countbox-h1">Projects</h1>
                <h2 className="countbox-h2">0</h2>
              </div>
              <div className="flex-count-box">
                <h1 className="countbox-h1">Followers</h1>
                <h2 className="countbox-h2">0</h2>
              </div>
              <div className="flex-count-box">
                <h1 className="countbox-h1">Following</h1>
                <h2 className="countbox-h2">0</h2>
              </div>
            </div>
            <div className="genres">
              <p>#rock #hiphop #rap #edm #metal #pop #classical #indie</p>
            </div>
          </div>

        </div>
      );
    }
  }
  
  export default ProfileInfo;