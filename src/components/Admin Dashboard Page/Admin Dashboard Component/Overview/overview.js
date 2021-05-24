import React, { Component } from 'react';
import '../Overview/overview.css'


class overview extends Component {
    render() {
        return (
            <div className="overview-wrapper">
               
                <div className="overview-card">
                    <h2>Performance Overview</h2>
                    <img src="/asset/perfomance charts.png" alt="charts" height="200px"/>
                </div>
                <div className="overview-card">
                    <h2>Trainee List</h2>
                    <ul className="overlist">
                        <li><a>Agbesi Amenyo</a></li>
                        <li><a>Bismark Frimpong</a></li>
                        <li><a>Felix Portuphy</a></li>
                        <li><a>Victor Aremu</a></li>
                        <li><a>Elliot Adinortey</a></li>
                        <li><a>Jefferson Addai-Poku</a></li>
                        <li><a>Kwabena Dwamena</a></li>
                        <li><a>Amoro Bagei</a></li>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default overview;