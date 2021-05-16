import React from 'react';
import Contact from './Contact Us/Contact';
import Navbar from './Navbar/Navbar'
import Overview from './Project Overview/Overview';
import Team from './Teams/Team'

const About = ()=>{
    return (
        <div className="container">
            <Navbar />
            <Overview />
            <Team />
            <Contact /> 
        </div>
    )
}
export default About;