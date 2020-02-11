import React, { Component } from "react";
import "./CreatePost.css";
import imageButton from '../../../../images/imageButton.png';
import gifButton from '../../../../images/gif.png';
import musicNote from '../../../../images/musicNote.png';
import { FaComment } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';

import ProjectSelectPost from './ProjectSelectPost/ProjectSelectPost'

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.displayData = [];

    this.state = {
      showdata: this.displayData,
      postVal: "",
      showSelectProject: false,
      projectAttached: false,
      isPosted: false
    }
    this.appendData = this.appendData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  appendData() {
    this.displayData.push(<div  id="display-data"><pre>{this.state.postVal}</pre></div>);
    this.setState({
      showdata : this.displayData,
      postVal: "",
      isPosted: true
    });
 }

  selectProjectClicked() {
    this.setState({
      showSelectProject: !this.showSelectProject,
      projectAttached: true
    })
  }

  closeProjectSelection() {
    this.setState({
      showSelectProject: false,
      projectAttached: false
    })
  }

  attachedButtonSuccess() {
    this.setState({
      showSelectProject: false,
      projectAttached: true
    })
  }

  handleChange(e) {
    let getTextAreaValue = e.target.value;
    this.setState({
      postVal :getTextAreaValue
    });
  }

    render() {
      return (
        <div className="create-post-framework">
          <div className="post-text-input-container">
            {this.state.projectAttached ?
              <div className="project-selection-container">
                  <h3 className="project-selected-text">Untitled</h3>
                  <div className="albumArtProjectCreatePost">
                    <img src={musicNote} alt="album art" align="center" />
                  </div>
                </div>
              : null}
            <form className="post-input-area">
              {/* Text Box Entry goes here */}
              <textarea id="post-text" value={this.state.postVal} onChange={this.handleChange} className="post-input" type="text" id="create-post-input" maxLength="220" placeholder="What are you working on?..."/>
            </form>
          </div>
          {/* Button Area */}
          <div className="post-button-grid">
            <div className="grid-item-post-button">
              <div className="grid-item-post-button image-button">
                <img src={imageButton} alt="Image Attach Icon" align="center"/>
              </div>
            </div>
            <div className="grid-item-post-button">
              <div className="grid-item-post-button gif-button">
                <img src={gifButton} alt="Gif Attach Icon" align="center"/>
              </div>
            </div>
            <div className="grid-item-post-button">
              <div className={this.state.projectAttached ?
                "grid-item-post-button music-button albumArt-background"
                : "grid-item-post-button music-button"} onClick={this.selectProjectClicked.bind(this)}>
                <img src={musicNote} alt="SongWriter Project Icon" align="center"/>
              </div>
            </div>
            <div className="grid-item-add-post-button">
              {/* Post everything */}
              <div className="post-button" >
                <input className="post-text" type="submit" onClick={this.appendData}  value="+ Post"></input>
              </div>
            </div>
          </div>
          {this.state.isPosted ? <div className="feed-post-container">
            <div className="project-selection-container">
              <h3 className="project-selected-text">Untitled</h3>
              <div className="albumArtProjectCreatePost">
                <img src={musicNote} alt="album art" align="center" />
              </div>
            </div>
            <div id="display-data-Container">
              {this.displayData }
            </div>
            <div className="like-comment-container">
              <FaHeart size={30}/>
            </div>
            <div className="like-comment-container">
              <FaComment size={30}/>
            </div>
            <div className="like-comment-container">
              <FaShare size={30}/>
            </div>
          </div> : null }
        {this.state.showSelectProject ?
            <ProjectSelectPost
              closeProjectSelection={this.closeProjectSelection.bind(this)}
              attachedButtonSuccess={this.attachedButtonSuccess.bind(this)}
            />
            : null
          }
        </div>
      );
    }
}
export default CreatePost;