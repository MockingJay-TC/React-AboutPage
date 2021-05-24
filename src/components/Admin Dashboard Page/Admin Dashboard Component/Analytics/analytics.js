import React, { Component } from 'react';
import '../Analytics/analytics.css'
class analytics extends Component {
    render() {
        return (
            <div className="analytics-wrapper">
             
                <div className="ancard">
                    <h3 className="an-headings">Trainees Enrolled</h3>
                    <p className="an-numbers">20</p>

                </div>
                <div className="ancard">
                    <h3 className="an-headings">Courses Available</h3>
                    <p className="an-numbers">20</p>
                </div>
                <div className="ancard">
                    <h3 className="an-headings">Others</h3>
                    <div>
                        <i className="fa fa-spinner fa-pulse fa-2x fa-fw" />
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <div className="an-others">
                    <a href=""> 
                        <button>
                            <a href="">Create Track <i className="fas fa-plus an-fas" /></a>
                        </button>

                    </a><br/>
                   
                        <button>
                            <a href="">Add Trainee <i className="fas fa-user-plus" /></a>
                        </button>
                    

                   
                        <button>
                            <a href="">Upload Grades <i className="fas fa-upload" /></a>
                        </button>

                    
                  
                </div>


            </div>
        );
    }
}

export default analytics;