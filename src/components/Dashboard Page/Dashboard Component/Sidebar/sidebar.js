import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Sidebar/sidebar.css';
class sidebar extends Component {

    render() {
        const activeClick =()=>{
            
            const parent = document.querySelector("li");
           const lists = parent.querySelectorAll("a");
            for (var i = 0; i < lists.length; i++) {
              lists[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += "active";
              });
            } 
        }
        return (
            <div className="sidebar-wrapper">
                <h2>Trainee</h2>
                <ul className="list top" >
                    <li className="active tooltip">
                        <Link to="/dashboard" ><i className="fas fa-th-large" /></Link>
                        <span className="tooltiptext">Dashboard</span>

                    </li>
                    <li className="tooltip">
                        <Link to="/dashboard/course" onClick={activeClick}> <i className="fas fa-book-reader" /></Link>
                        <span className="tooltiptext">Courses Enrolled</span>

                       
                    </li>
                    <li className="tooltip">
                        <Link to="/dashboard/transcript" onClick={activeClick}><i className="fas fa-poll-h" /></Link>
                        <span className="tooltiptext">Transcript</span>

                    </li>
                    <li className="tooltip">
                        <Link to="/dashboard/track" onClick={activeClick}> <i className="fas fa-columns" /></Link>
                        <span className="tooltiptext">Tracks</span>

                    </li>
                    
                </ul>
                <ul className="list bottom">
                    
                    <li className="tooltip">
                        <a href="/"><i className="fas fa-sign-out-alt" /></a>
                        <span className="tooltiptext">Log Out</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default sidebar;