import React, { Component } from 'react';
import './navbar.css'

class navbar extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
                 <div>
                       <h3><i className="fas fa-signal" />TMS</h3>
                </div>
                <div>
                    <label className="nav-label">Search</label>
                    <input className="nav-search" type="text" placeholder="Search"/>
                </div>
                <div>
                    <label className="nav-label">Filter</label>
                    <select className="nav-filter">
                        <option>Name</option>
                        <option>Track</option>
                    </select>
                </div>
                <div className="user">
                   <div className="avatar"><i className="fas fa-user-circle" /></div>
                    <a href="/"><i className="fas fa-ellipsis-h" /></a>
                </div>
            </div>
        );
    }
}

export default navbar;