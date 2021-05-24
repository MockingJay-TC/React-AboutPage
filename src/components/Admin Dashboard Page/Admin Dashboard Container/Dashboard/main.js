import React, { Component } from 'react';
import Navbar from '../../component/Navbar/navbar';
import Dashbuild from './dashbuild'
import '../Dashboard/main.css'

class dashbuild extends Component {
    render() {
        return (
            <div className="main-wrapper">
              <Navbar/>
              <Dashbuild/>
            </div>
        );
    }
}

export default dashbuild;