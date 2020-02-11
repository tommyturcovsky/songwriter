import React, { Componenet } from "react";
import "./MusicPlayer.css";
import musicNote from '../../../../images/musicNote.png';
import skipBackward from '../../../../images/skipBackward.png';
import playButton from '../../../../images/playButton.png';
import skipForward from '../../../../images/skipForward.png';


class MusicPlayer extends React.Component {
    render() {
      return (
        <div className="container-musicPlayer">
            <div className="threeLinesOptions">
                <div className="hamburger-button"></div>
                <div className="hamburger-button"></div>
                <div className="hamburger-button"></div>
            </div>
            <div>
                <div className="albumArt">
                    <img src={musicNote} alt="album art" align="center"/>
                </div>
                <div className="songTitle">
                    <h1 className="songTitleText">Song Title</h1>
                </div>
                <div className="artistName">
                    <h2 className="artistNameText">Artist Name</h2>
                </div>
            </div>
            <div>
                <div className="functionButtons">
                    <div className="skipBack"><img src={skipBackward} alt="Skip Backward Button" align="center"/></div>
                    <div className="playButton"><img src={playButton} alt="Play Button" align="center" /></div>
                    <div className="skipForward"><img src={skipForward} alt="Skip Forward Button" align="center"/></div>
                </div>
                <div className="progressBar">
                    <div className="progressBarGraphic"></div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default MusicPlayer;