import React from 'react';
import './App.css';
import Header from './components/Homepage/Header';
import Post from './components/Homepage/Post';
import Footer from './components/Footer';
import ProfileInfo from './components/Profilepage/ProfileInfo/ProfileInfo';
import ProfileBody from './components/Profilepage/ProfileBody/ProfileBody';
import Toolbar from './components/DAW/Toolbar/Toolbar';
import Workspace from './components/DAW/Workspace/Workspace';
import LandingPage from './components/LandingPage/Landingpage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import FindCollaborators from './components/FindCollaborators/FindCollaborators';
import GenrePage from './components/GenrePage/GenrePage';

import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaCircle } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { BRoll } from './images/black-headset.jpg'

import Popup from "reactjs-popup";


import { thisExpression } from '@babel/types';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.changeView = this.changeView.bind(this);
    this.changeLanding = this.changeLanding.bind(this);

    this.state = {
      mainviews: [
        {
          name: "Homepage",
          //comp: <div></div>
        },
        {
          name: "Profilepage"
        }
      ],
      currentIndex: 0,
      landingPageIndex: 0,
      isLoggedIn: false,
    }
  }

  /** Main View is adjusted based on current index
   * 0 use homepage header/body
   * 2 use DAW section
   * 4 use profile page header/body
   */
  changeView(index) {
    if (index !== this.state.currentIndex) {
      this.setState({ currentIndex: index });
    }
  }

  changeLandingView(index) {
    if (index !== this.state.landingPageIndex) {
      this.setState({ landingPageIndex: index });
    }
  }

  changeHeader(header) {
    let display = <h1>Not Implemented</h1>

    //header.header
    switch (header.header) {
      case 0:
        display = <Header />;
        break;
      case 2:
        display = null;
        break;
      case 4:
        display = <ProfileInfo />;
        break;
    }

    return display;
  }

  changeContent(content) {
    let display = <p>Not Implemented</p>

    //content.content
    switch (content.content) {
      case 0:
        display = <Post />;
        break;
      case 2:
        display = <Workspace />;
        break;
      case 4:
        display = <ProfileBody />;
        break;
    }

    return display;
  }

  changeLanding(content) {
    let display = <p>Not Implemented</p>

    //content.content
    switch (content.content) {
      case 0:
        display = <SignUpPage/>;
        break;
      case 1:
        display = <FindCollaborators />;
        break;
      case 2:
          display = <GenrePage />;
          break;
    }

    return display;
  }

  

  
  render() {
  
    return (
      <div className="grid-container">
        <div id="landing-page" className="grid-container">
          <LandingPage/>
        </div>
        <div id="sign-up-pages" className="grid-container hide">
            <this.changeLanding content={this.state.landingPageIndex}/>
        </div>
        <div className="navigation-buttons">
              <div id="left-sign-up" className="navigation-button hide" onClick={() => this.changeLandingView(this.state.landingPageIndex - 1)}>
                  <FaArrowAltCircleLeft size={60}/> 
              </div>
              <div id="right-sign-up" className="navigation-button hide" onClick={() => this.changeLandingView(this.state.landingPageIndex + 1)}>
                  <FaArrowAltCircleRight size={60}  />
              </div>
        </div>
        {/* Put hide back in this class */}
        <div id="the-app" className="grid-container-app hide">
          <this.changeHeader header={this.state.currentIndex}/>
          <this.changeContent content={this.state.currentIndex} />
          <Footer changeView={this.changeView} select={this.state.currentIndex}/>
        </div>
      </div>
      // <LandingPage/>
      // <SignUpPage />
      // <FindCollaborators />
      // <GenrePage/>
    );
  }
}

export default App;
