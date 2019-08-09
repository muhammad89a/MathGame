import React from 'react';
import './StarsDisplay.css';
import utils from '../../util/utils';


const StarsDisplay = (props) => {
    return (
        <>
            {utils.range(1,props.count).map(starId =>
                <div key={starId} className="star" />
            )}    
        </>          
    );

  };

  export default StarsDisplay;