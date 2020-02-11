import React from "react";
import "./DAWDropdown.css";
import { FaAngleDown } from 'react-icons/fa'
import { FaAngleUp } from 'react-icons/fa'

class Toolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: 'Project Title'
        }
    }

    handleClickOutside(){
        this.setState({
          listOpen: false
        })
    }
    
    toggleList(){
    this.setState(prevState => ({
        listOpen: !prevState.listOpen
    }))
    }

    render() {
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
      return (
        <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}
                {listOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
        </div>
        {listOpen && <ul className="dd-list">
               {list.map((item) => (
                <li className="dd-list-item" key={item.id} >{item.option}</li>
                ))}
            </ul>}
        </div>
      );
    }
  }
  
  export default Toolbar;