import React from "react";
import "./GenrePage.css";

import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaCircle } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import {FaArrowAltCircleRight} from 'react-icons/fa';

class GenrePage extends React.Component {
    render() {

        function goToApp() {
            var signUpPages = document.getElementById("sign-up-pages");
            var leftSignUp = document.getElementById("left-sign-up");
            var rightSignUp = document.getElementById("right-sign-up");
            var theApp = document.getElementById("the-app");
            signUpPages.classList.toggle("show");
            leftSignUp.classList.toggle("show");
            rightSignUp.classList.toggle("show");
            theApp.classList.toggle("hide");
        }

        function selectedRock() {
            let theTag = document.getElementById("rock");
            theTag.classList.toggle("selected-genre")
        }

        function selectedMetal() {
            let theTag = document.getElementById("metal");
            theTag.classList.toggle("selected-genre")
        }

        function selectedHipHop() {
            let theTag = document.getElementById("hiphop");
            theTag.classList.toggle("selected-genre")
        }

        function selectedRap() {
            let theTag = document.getElementById("rap");
            theTag.classList.toggle("selected-genre")
        }

        function selectedPop() {
            let theTag = document.getElementById("pop");
            theTag.classList.toggle("selected-genre")
        }

        function selectedEDM() {
            let theTag = document.getElementById("edm");
            theTag.classList.toggle("selected-genre")
        }

        function selectedClassical() {
            let theTag = document.getElementById("classical");
            theTag.classList.toggle("selected-genre")
        }

        function selectedIndie() {
            let theTag = document.getElementById("indie");
            theTag.classList.toggle("selected-genre")
        }

        return (
        <div className="sign-up-page">
            <div className="sign-up-inner-box">
                <div className="sign-up-inner-inner-box">
                    <div>   
                        <h1 className="sign-up-title"align="center">What Genres Do<br />You Write For?</h1>
                    </div>
                    <div className="genre-selections-container">
                        <input id="rock" className="genre-button" type="button" value="Rock" onClick={() => selectedRock()}/><input id="metal" className="genre-button" type="button" value="Metal" onClick={() => selectedMetal()} />
                        <input id="hiphop"className="genre-button" type="button" value="Hip Hop" onClick={() => selectedHipHop()}/><input id="rap" className="genre-button" type="button" value="Rap" onClick={() => selectedRap()}/>
                        <input id="pop" className="genre-button" type="button" value="Pop" onClick={() => selectedPop()}/><input id="edm" className="genre-button" type="button" value="EDM" onClick={() => selectedEDM()}/>
                        <input id="classical" className="genre-button" type="button" value="Classical" onClick={() => selectedClassical()} /><input id="indie"className="genre-button" type="button" value="Indie" onClick={() => selectedIndie()}/>
                    </div>
                        <div className="navigation-button" align="center" onClick={() => goToApp()}>
                            <input className="genre-button start-making-music-button" type="button" value="Start Making Music!" />
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}

export default GenrePage;