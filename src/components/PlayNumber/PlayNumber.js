import React from 'react';
import colors from '../../util/colors';

import './PlayNumber.css';

const PlayNumber = (props) => {

    const BtnNumberEvent = () =>{
        console.log(`num ${props.number} ${props.status} `);
        props.onClickEvent(props.number,props.status);
    };

    return (
        <button 
            className="number" 
            style={{backgroundColor:colors[props.status]}}
            onClick={BtnNumberEvent}>{props.number}</button>            
    );

  };

  export default PlayNumber;