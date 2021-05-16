import React, { Component } from 'react';
import Developer from './Developer';
import './team.css'

class Team extends Component {
    state = {
        developer: [
          {
            tdId: "TAO1",
            fName: "Victor",
            lName: "Aremu",
            position: "Frontend Developer",
            src: "/images/vic.jpg",
            alt: "Victor: Frontend",
          },
          {
            tdId: "TAO2",
            fName: "Jefferson ",
            lName: "Addai-poku",
            position: "Backend Developer",
            src: "/images/jeff.jpg",
            alt: "Jefferson: Backend",
          },
          {
            tdId: "TAO3",
            fName: "Agbesi",
            lName: "Amenyo",
            position: "Frontend Developer",
            src: "/images/agbe.jpg",
            alt: "Agbesi: Frontend",
          },
          {
            tdId: "TAO4",
            fName: "Bismark",
            lName: "Frimpong",
            position: "Frontend Developer",
            src: "/images/bis.jpg",
            alt: "Bismark: Frontend",
          },
          {
            tdId: "TAO5",
            fName: "Kwamena",
            lName: "Dwamena",
            position: "Backend Developer",
            src: "/images/kwa.jpg",
            alt: "Kwamena: Backend",
          },
          {
            tdId: "TAO6",
            fName: "Amoro",
            lName: "Bagie",
            position: "Backend Developer",
            src: "/images/amo.jpg",
            alt: "Amoro: Backend",
          },
          {
            tdId: "TAO7",
            fName: "Felix",
            lName: "Portuphy",
            position: "Frontend Developer",
            src: "/images/fel.jpg",
            alt: "Felix: Frontend",
          },
          {
            tdId: "TAO8",
            fName: "Elliot",
            lName: "Addinortey",
            position: "Backend Developer",
            src: "/images/eli.jpg",
            alt: "Elliot: Backend",
          },
          
        ],
      };
      render() {
        return (
          <div className="container">
            <h1 className="title"> TEAM </h1>
            <div className="team">
              {this.state.developer.map(function (dev, index) {
                return (
                  <Developer
                    key={index}
                    fullName={dev.fName + " " + dev.lName}
                    position={dev.position}
                    src={dev.src}
                    alt={dev.alt}
                  />
                );
              })}
            </div>
          </div>
        );
      }
    }
    
    export default Team;