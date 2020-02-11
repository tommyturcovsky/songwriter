import React from 'react';
import "./TemplateSelection.css"
import { GoTriangleDown } from 'react-icons/go'
import { GoTriangleUp } from 'react-icons/go'

class TemplateSelection extends React.Component {
  render() {
    return (
      <div className='popup'>
            <div className="template-select">
                <div className="pop-up-title-container">
                    <h1 className="pop-up-title" align="center">What project template would you like to start with?</h1>
                </div>
                <div className="template-selection-container">
                    <div className="template-selection">
                    <div className="template-selection-logo" onClick={this.props.blankTemplateClicked}></div>
                    <div className="template-selection-title-container"><h3 className="template-selection-title" align="center">Blank</h3></div>
                    <div><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p></div>
                    </div>
                    <div className="template-selection">
                        <button className="template-selection-logo" onClick={this.props.audioTemplateClicked}></button>
                    <div className="template-selection-title-container"><h3 className="template-selection-title" align="center">Audio</h3></div>
                    <div><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p></div>
                    </div>
                    <div className="template-selection">
                    <div className="template-selection-logo"></div>
                    <div className="template-selection-title-container"><h3 className="template-selection-title" align="center">Amp<br></br>Collection</h3></div>
                    <div><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p></div>
                    </div>
                    <div className="template-selection">
                    <div className="template-selection-logo"></div>
                    <div className="template-selection-title-container"><h3 className="template-selection-title" align="center">MIDI</h3></div>
                    <div><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p></div>
                    </div>
                </div>
                <div className="open-existing-project">
                    <h2 align="center">Open Existing Project</h2>
                    <GoTriangleDown className="go-triangle-down" size={50} />
                </div>
            </div>
      </div>
    );
  }
}

export default TemplateSelection;