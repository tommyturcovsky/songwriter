import React from "react";
import "./Workspace.css";
import { FaPlus } from 'react-icons/fa'
import Track from './Track/Track'
import Popup from "reactjs-popup";
import SelectionTemplate from './TemplateSelect/TemplateSelect'
import TrackSelection from './TrackSelection/TrackSelection'

import { GoTriangleDown } from 'react-icons/go'
import { GoTriangleUp } from 'react-icons/go'
import { FaMicrophoneAlt } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa'

import skipBackward from '../../../images/skipBackward.png';
import skipForward from '../../../images/skipForward.png';
import { FaRegPauseCircle } from 'react-icons/fa';
import { FaRegPlayCircle } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';

import { WaveForm } from '../../../images/waveform.png'

class Workspace extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        audioTemplate: false,
        showTemplateSelection: true,
        showTrackSelection: false,
        isRecorded: false,
        isRecordArmed: false,
      }
    }
  
  recordAudio() {
    if (this.state.isRecordArmed == true) {
      console.log("made it here")
      this.setState({
        isRecorded: true
      })
    }
  }
  
  recordArmTrack() {
    this.setState({
      isRecordArmed: !this.isRecordArmed
    })
  }
  
  newTrackClicked() {
    this.setState({
      showTrackSelection: !this.showTrackSelection
    })
  }
  
  audioTrackClicked() {
    this.setState({
        audioTemplate: true,
        showTrackSelection: !this.state.showTrackSelection
      })
    }

  blankTemplateClicked() {
      this.setState({
        showTemplateSelection: !this.state.showTemplateSelection
      })
    }
  
  audioTemplateClicked() {
    this.setState({
      audioTemplate: true,
      showTemplateSelection: !this.state.showTemplateSelection
    })
  }


  render() {

    return (
      <div className="the-workspace-container">
                <div className="grid-container-toolbar">
              
          {/* DAW Dropdown */}
            <div></div>
  
              {/* ToolbarButtons */}
              <div className="toolbar">      
                  <div className="toolbar-buttons">
                      <div className="skip"><img src={skipBackward} alt="skipBackward" align="center"></img></div>
                      <div className="pause-button"><FaRegPauseCircle size={32}/></div>
                      <div className="play-button"><FaRegPlayCircle size={32}/></div>
                      <div className="record-button" onClick={this.recordAudio.bind(this)}><FaCircle size={32}/></div>
                      <div className="skip"><img src={skipForward} alt="skipBackward" align="center"></img></div>
                  </div>
  
                  {/* Monitor Section */}
                  <div className="toolbar-monitor">
                      <div className="flex-monitor-box">
                          <h1 className="monitorbox-h1">0:0</h1>
                          <h2 className="monitorbox-h2">Bar Beat</h2>
                      </div>
                      <div className="flex-monitor-box">
                          <h1 className="monitorbox-h1">0:00</h1>
                          <h2 className="monitorbox-h2">Min Second</h2>
                      </div>
                      <div className="flex-monitor-box">
                          <h1 className="monitorbox-h1">120</h1>
                          <h2 className="monitorbox-h2">Tempo</h2>
                      </div>
                  </div>  
              </div>
  
          </div>
        <div className="grid-container-workspace">
          <div className="workspace-vertical-divider">
            <div className="newTrack" onClick={this.newTrackClicked.bind(this)}>
              <div className="workspace-add">
                <FaPlus size={20}/><h1 className="workspace-add-text">New Track</h1>
              </div>
            </div>
            <div className="measureRuler">
              <ul class="ruler"><li>1</li><li>2</li><li>3</li><li>4</li></ul>
            </div>
          </div>

          <div className="workspace-vertical-divider">
            <div className="lyrics">
              <div className="workspace-add">
                <FaPlus size={20}/><h1 className="workspace-add-text">Lyrics</h1>
              </div>
            </div>
            <div className="highlightRuler extra-color1"></div>
          </div>

          <div className="workspace-vertical-divider">
            <div className="commentTrack">
              <div className="workspace-add">
                <FaPlus size={20}/><h1 className="workspace-add-text">Comment</h1>
              </div>
            </div>
            <div className="highlightRuler extra-color2"></div>
          </div>
        
          <div className="workspace-vertical-divider-tracks">
            <div className="track">
            {this.state.audioTemplate ? <div className="grid-container-track">
                <div className="title-arm-icon">
                  <textarea className="track-title" type="text" id="create-post-input" maxLength="9" placeholder="Track-1"/>
                  <div onClick={this.recordArmTrack.bind(this)}
                    className={this.state.isRecordArmed ?
                      "record-arm-box record-arm-armed"
                      : "record-arm-box record-arm-disarmed"}>
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
              :
              null
            
            }
            </div>
            <div className="audioFiles">
              {this.state.audioTemplate ?
                <div className="no-waveform">
                  {this.state.isRecorded ?
                    <div className="waveformholder">
                    </div>
                    :
                    null
                  }
                </div>
                :
                null}
            </div>
          </div>

          {this.state.showTrackSelection ?
            <TrackSelection
            text='Click "Close Button" to hide popup'
            audioTrackClicked={this.audioTrackClicked.bind(this)}
            />
            : null
          }

          {this.state.showTemplateSelection ?
            <SelectionTemplate
            text='Click "Close Button" to hide popup'
            blankTemplateClicked={this.blankTemplateClicked.bind(this)}
            audioTemplateClicked={this.audioTemplateClicked.bind(this)}
            />
            : null
          }
        </div>
        </div>
      );
    }
  }
  
  export default Workspace;