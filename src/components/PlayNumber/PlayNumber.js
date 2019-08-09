import React from 'react';
import './PlayNumber.css';

const PlayNumber = (props) => {

    const BtnNumberEvent = () =>{
        console.log(`num ${props.number}`);
    };

    return (
        <button className="number" onClick={BtnNumberEvent}>{props.number}</button>            
    );

  };

  export default PlayNumber;