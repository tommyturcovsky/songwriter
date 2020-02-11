import React from 'react';
import "./ProjectSelectPost.css";
import { FaPlus } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import { GoTriangleDown } from 'react-icons/go'

import musicNote from '../../../../../images/musicNote.png';

class ProjectSelectPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      isProjectSelected: false,
      viewOnlySelected: false,
      allowCommentsSelected: false,
      allowEditsSelected: false,
    }
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  selectIndividualProject() {
    this.setState({
      isProjectSelected: true
    })
  }

  deselectIndividualProject() {
    this.setState({
      isProjectSelected: false
    })
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  selectViewOnly() {
    this.setState({
      viewOnlySelected: true
    })
  }

  deselectViewOnly() {
    this.setState({
      viewOnlySelected: false
    })
  }

  selectAllowComments() {
    this.setState({
      allowCommentsSelected: true
    })
  }

  deselectAllowComments() {
    this.setState({
      allowCommentsSelected: false
    })
  }

  selectAllowEdits() {
    this.setState({
      allowEditsSelected: true
    })
  }

  deselectAllowEdits() {
    this.setState({
      allowEditsSelected: false
    })
  }

  render() {
    return (
      <div className='popup'>
        <div className="select-project-container">
          <div className="project-selection-title-container">
            <div className="project-selection-exit" onClick={this.props.closeProjectSelection}>
              <FaWindowClose size={30}/>
            </div>
            <h1 align="center">Choose a project to share!</h1>
            {/* Make Dropdown */}
            <div  className="dropdown" style = {{border:"solid 1px"}} >
              <div className="button" onClick={this.showDropdownMenu}><h3>View Permissions <GoTriangleDown/></h3></div>

              {this.state.displayMenu ?
              <ul id="dropdownViewOptions">
                {this.state.viewOnlySelected ?
                  <li ><h3 onClick={this.deselectViewOnly.bind(this)} id="ViewOnly" className="selectBackground">View Only</h3></li>
                  : <li ><h3 onClick={this.selectViewOnly.bind(this)} id="ViewOnly" className="">View Only</h3></li>
                }
                {this.state.allowCommentsSelected ?
                  <li ><h3 onClick={this.deselectAllowComments.bind(this)} id="allowComments" className="selectBackground">Allow Comments</h3></li>
                  : <li ><h3 onClick={this.selectAllowComments.bind(this)} id="allowComments" className="">Allow Comments</h3></li>
                }
                {this.state.allowEditsSelected ?
                  <li ><h3 onClick={this.deselectAllowEdits.bind(this)} id="allowEdits" className="selectBackground">Allow Edits</h3></li>
                  : <li ><h3 onClick={this.selectAllowEdits.bind(this)} id="allowEdits" className="">Allow Edits</h3></li>
                }
              </ul>
              :
                null
              }
            </div>
          </div>
          <div className="project-selection-container">
            <h3 className="individual-project-title">Untitled</h3>
            {this.state.isProjectSelected ?
              <div className="albumArtProjectSelect albumArt-background" onClick={this.deselectIndividualProject.bind(this)}>
                <img src={musicNote} alt="album art" align="center" />
              </div>
              : <div className="albumArtProjectSelect" onClick={this.selectIndividualProject.bind(this)}>
                <img src={musicNote} alt="album art" align="center" />
              </div>}
          </div>
          <div className="attach-project-container">
            <div></div>
            {/* Attach project to post onClick */}
            <div className="attach" onClick={this.props.attachedButtonSuccess.bind(this)}>
              <div className="attach-add" >
                <FaPlus size={20}/><h1 className="workspace-add-text">Attach</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSelectPost;