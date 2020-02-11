import React from "react";
import "./FindCollaborators.css";

import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaCircle } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import {FaArrowAltCircleRight} from 'react-icons/fa';

class FindCollaborators extends React.Component {
    constructor(props) {
        super(props);
        }
    render() {
        return (
        <div className="sign-up-page">
            <div className="sign-up-inner-box">
                <h1 className ="sign-up-title" align="center">Find Collaborators<br />On SongWriter</h1>
                <div className="add-collaborators-buttons">
                    <div className="add-collaborator-button-inner">  
                        <FaPlus size={50} /><FaFacebookF size={50} />
                    </div>
                    <div className="add-collaborator-button" align="center">
                        <div className="add-collaborator-button-inner">  
                            <FaPlus size={50} /><FaTwitter size={50} />
                        </div>
                    </div>
                    <div className="add-collaborator-button" align="center">
                        <div className="add-collaborator-button-inner"> 
                            <FaPlus size={50} /><FaInstagram size={50} />
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        );
    }
}

export default FindCollaborators;