import React from 'react';
import utils from '../../util/utils';
import PlayNumber from '../PlayNumber/PlayNumber'
import './StarMatch.css';
import StarsDisplay from '../StarsDisplay/StarsDisplay';

const StarMatch = () => {
    const [starsNumber,SetStarNumber] = React.useState(utils.random(1,9));
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            <StarsDisplay count={starsNumber} />
          </div>
          <div className="right">
          {utils.range(1,9).map(number =>
            <PlayNumber key={number}  number={number}/>            
          )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };


  export default StarMatch;