import React, { Component } from 'react';
import '../Courses/course.css'

class course extends Component {
    render() {
        return (
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Date Enrolled</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                           <td>1</td>
                           <td>Business Comm</td>
                           <td>2021-05-26</td>
                           <td>In progress</td>
                       </tr>
                       <tr>
                           <td>2</td>
                           <td>ReactJs</td>
                           <td>2021-05-16</td>
                           <td>Completed</td>
                       </tr>
                       <tr>
                           <td>3</td>
                           <td>Java</td>
                           <td>2021-05-16</td>
                           <td>Completed</td>
                       </tr>
                       <tr>
                           <td>3</td>
                           <td>Testing with cypress</td>
                           <td>2021-05-16</td>
                           <td>In Progress</td>
                       </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default course;