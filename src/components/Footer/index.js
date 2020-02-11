import React from "react";
import "./Footer.css";
import homeIcon from '../../images/home-icon.png';
import search from '../../images/search.png';
import musicNote from '../../images/musicNote.png';
import notificationBell from '../../images/notificationBell.png';
import profileIcon from '../../images/profile.png';

class Footer extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div className="grid-container-footer">
          <div className="grid-item-footer">
          <div className={this.props.select == 0 ?
                "grid-item-footer img-button-home button-selected" :
                "grid-item-footer img-button-home"}>
              <img src={homeIcon} alt="Home Icon" align="center" onClick={() => this.props.changeView(0)}/>
            </div>
          </div>
          <div className="grid-item-footer">
          <div className={this.props.select == 1 ?
                "grid-item-footer img-button-search button-selected" :
                "grid-item-footer img-button-search"}>
              <img src={search} alt="Search Icon" align="center" onClick={() => this.props.changeView(1)}/>
            </div>
          </div>
          <div className="grid-item-footer">
          <div className={this.props.select == 2 ?
                "grid-item-footer img-button-music button-selected" :
                "grid-item-footer img-button-music"}>
              <img src={musicNote} alt="SongWriter Icon" align="center" onClick={() => this.props.changeView(2)}/>
            </div>
          </div>
          <div className="grid-item-footer">
            <div className={this.props.select == 3 ?
                "grid-item-footer img-button-notification button-selected" :
                "grid-item-footer img-button-notification"}>
              <img src={notificationBell} alt="Notification Icon" align="center" onClick={() => this.props.changeView(3)}/>
            </div>
          </div>
          <div className="grid-item-footer">
            <div className={this.props.select == 4 ?
                "grid-item-footer img-button-profile button-selected" :
                "grid-item-footer img-button-profile"}>
              <img src={profileIcon} alt="Profile Icon" align="center" onClick={() => this.props.changeView(4)}/>
            </div>
          </div>
        </div>
       );
    }   
}
export default Footer;