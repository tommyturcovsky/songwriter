import React from "react";
import "./Toolbar.css";
import DAWDropdown from './DAWDropdown/DAWDropdown';
import skipBackward from '../../../images/skipBackward.png';
import playButton from '../../../images/playButton.png';
import skipForward from '../../../images/skipForward.png';
import { FaRegPauseCircle } from 'react-icons/fa';
import { FaRegPlayCircle } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';

class Toolbar extends React.Component {
    constructor() {
        super()
        this.state = {
            options: [
                {
                    id: 0,
                    option: 'New',
                    key: 'option'
                },
                {
                    id: 1,
                    option: 'Open',
                    key: 'option'
                },
                {
                    id: 2,
                    option: 'Save As',
                    key: 'option'
                }
            ]
        }
    }

    render() {
      return (
        <div className="grid-container-toolbar">
              
            {/* DAW Dropdown */}
            <DAWDropdown title="Select Option" list={this.state.options} />

            {/* ToolbarButtons */}
            <div className="toolbar">      
                <div className="toolbar-buttons">
                    <div className="skip"><img src={skipBackward} alt="skipBackward" align="center"></img></div>
                    <div className="pause-button"><FaRegPauseCircle size={32}/></div>
                    <div className="play-button"><FaRegPlayCircle size={32}/></div>
                    <div className="record-button" onClick={() => this.props.changeIsRecorded(false)}><FaCircle size={32}/></div>
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
      );
    }
  }
  
  export default Toolbar;