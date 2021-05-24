import React, { Component } from 'react';
import '../Courses/course.css'

class track extends Component {
    render() {
        return (
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Track Name</th>
                        <th>Date Enrolled</th>
                        <th>Course Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Media & Design</td>
                        <td>2021-05-26</td>
                        <td><button><a href="/">View</a></button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Foundation</td>
                        <td>2021-02-16</td>
                        <td><button><a href="/">View</a></button></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Advanced</td>
                        <td>2021-07-16</td>
                        <td><button><a href="/">View</a></button></td>
                        </tr>
                       
                    </tbody>
                </table>

            </div>
        );
    }
}

export default track;