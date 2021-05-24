import React, { Component } from 'react';
import '../Courses/course.css'

class transcript extends Component {
    render() {
        return (
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Grade</th>
                        <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>MD-002</td>
                        <td>Creative Media</td>
                        <td>90</td>
                        <td>Excellent</td>
                        </tr>
                        <tr>
                        <td>STW-001</td>
                        <td>Testing with Cypress</td>
                        <td>100</td>
                        <td>Excellent</td>
                        </tr>
                        <tr>
                        <td>PWJ-012</td>
                        <td>Programming with Java</td>
                        <td>90</td>
                        <td>Excellent</td>
                        </tr>
                        <tr>
                        <td>PWP-012</td>
                        <td>Programming with Python</td>
                        <td>50</td>
                        <td>Pass</td>
                        </tr>
                        <tr>
                        <td>BCOM-012</td>
                        <td>Business Communication</td>
                        <td>65</td>
                        <td>Good</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default transcript;