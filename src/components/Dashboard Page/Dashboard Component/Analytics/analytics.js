import React, { Component } from 'react';
import '../Analytics/analytics.css'
class analytics extends Component {
    render() {
        return (
            <div className="analytics-wrapper">
             
                <div className="ancard">
                    <h3 className="an-headings">Courses Enrolled</h3>
                    <p className="an-numbers">20</p>

                </div>
                <div className="ancard">
                    <h3 className="an-headings">Courses Available</h3>
                    <p className="an-numbers">20</p>
                </div>
                <div className="ancard">
                    <h3 className="an-headings">Completed Courses</h3>
                    <div>
                    <i className="fas fa-circle-notch" />
                     <span className="sr-only">Loading...</span>
                    </div>
                </div>
               


            </div>
        );
    }
}

export default analytics;