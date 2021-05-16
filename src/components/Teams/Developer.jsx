import React from 'react';

const Developer = (props)=>{
    return(
        <div className="developer">
        <div className="devImg">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="devInfo">
          <p className="fullName">{props.fullName}</p>
          <p className="position">{props.position}</p>
        </div>
      </div>
    );
}
export default Developer;