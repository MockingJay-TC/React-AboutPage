import React, { Component } from 'react';
import "../Sidebar/sidebar.css"
class sidebar extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <h2>Admin</h2>
                <ul className="list top">
                    <li className="active">
                        <a href="/"><i className="fas fa-th-large" />Dashboard</a>
                    </li>
                    <li>
                        <a href="/"> <i className="fas fa-users" />Trainees</a>
                       
                    </li>
                    <li>
                        <a href="/"><i className="fas fa-tasks" />Courses</a>
                    </li>
                    <li>
                        <a href="/"> <i className="fas fa-file-alt" />Progress Report</a>
                    </li>
                    
                </ul>
                <ul className="list bottom">
                    <li><a href=""><i className="fas fa-cog" />Others</a></li>
                    <li>
                        <a href=""><i className="fas fa-sign-out-alt" />Log Out</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default sidebar;