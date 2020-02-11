import React, { Component } from "react";
import "./ProfileBody.css";
import ProjectHighlights from "./ProjectHighlights/ProjectHighlights";
import PersonalFeed from "./PersonalFeed/PersonalFeed";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

class ProfileBody extends React.Component {
    render() {
      return (
        <div className="flex-container-profileBody">
              <ProjectHighlights />
              <PersonalFeed />
              <MusicPlayer/>
        </div>
      );
    }
  }
  
  export default ProfileBody;