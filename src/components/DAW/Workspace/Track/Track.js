import React from "react";
import "./Track.css";
import { FaCircle } from 'react-icons/fa';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa'
import { IconContext } from "react-icons";

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecordArmed: true
    }
  }

    render() {
      return (
        <div className="grid-container-track">
          <div className="title-arm-icon">
            <textarea className="track-title" type="text" id="create-post-input" maxLength="9" placeholder="Track-1"/>
            <div className={this.state.isRecordArmed ? "record-arm-armed" : "record-arm-disarmed"} >
            </div>
            <FaMicrophoneAlt size={18} />
          </div>

          <div className="audio-input">
            Input: Built-in Mic <FaAngleDown />
          </div>

          <div className="comment-track">
            <h1 className="comment-track-title">Comments</h1>
            <textarea className="comment-text-input" type="text" id="create-post-input" maxLength="120" placeholder="Write comments about the track here!"/>
          </div>
        </div>
      );
    }
  }
  
  export default Track;