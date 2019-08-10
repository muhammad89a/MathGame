import React from 'react';

import './PlayAgain.css';

const PlayAgain = (props) => {
    return (
        <div className="game-done">
            <div 
                className="message" 
                style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
            >
                {props.gameStatus==='lost'?'game over':'nice'}
            </div>
            <button onClick={props.onClick}>Play Again</button>
        </div>            
    );
  };

  export default PlayAgain;