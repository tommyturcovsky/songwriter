import React from "react";
import "./Header.css";
import yourStory from '../../../images/yourStory.png';
import directMessage from '../../../images/directMessage.png';

class Header extends React.Component{
    render(){
      return (
        <div className="grid-container-header">
          <div className="grid-item-header">
            <div className="grid-item-header img-button">
              <img src={yourStory} alt="Your Story" align="left" />
            </div>
          </div>
          <div className="grid-item-header">
            <h1 className="grid-item-header logo">SongWriter</h1>
          </div>
          <div className="grid-item-header">
            <div className="grid-item-header direct-message">
              <img src={directMessage} alt="Direct Message" align="right"/>
            </div>
          </div>
        </div>
       );
    }   
}
export default Header;