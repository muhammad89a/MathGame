import React from 'react';
import utils from '../../util/utils';
import PlayNumber from '../PlayNumber/PlayNumber'
import './StarMatch.css';
import StarsDisplay from '../StarsDisplay/StarsDisplay';
import PlayAgain from '../PlayAgain/PlayAgain';

const StarMatch = () => {
    const [starsNumber,setStarNumber] = React.useState(utils.random(1,9));
    const [availableNums,setAvailableNums] = React.useState(utils.range(1,9));
    const [candidateNums,setCandidateNums] = React.useState([]);

    const candidateAreWronge = utils.sum(candidateNums) > starsNumber;
    const gameIsDone = availableNums.length === 0;
  
    const resetGame = () => {
        setStarNumber(utils.random(1, 9));
        setAvailableNums(utils.range(1, 9));
        setCandidateNums([]);
    };



    const numberStatus = (number) => {
        if(!availableNums.includes(number)){
            return 'used';
        }
        if(candidateNums.includes(number)){
            return candidateAreWronge?'wrong':'candidate';
        }
        return 'available';
    };

    const onNumberClick = (number, currentStatus) => {
        if (currentStatus === 'used') {
          return;
        }
    
        const newCandidateNums =
          currentStatus === 'available'
            ? candidateNums.concat(number)
            : candidateNums.filter(cn => cn !== number);
    
        if (utils.sum(newCandidateNums) !== starsNumber) {
          setCandidateNums(newCandidateNums);
        } else {
          const newAvailableNums = availableNums.filter(
            n => !newCandidateNums.includes(n)
          );
          console.log(` candidateNums = ${candidateNums}`);
          setStarNumber(utils.randomSumIn(newAvailableNums, 9));
          setAvailableNums(newAvailableNums);
          setCandidateNums([]);
        }
    };
    



    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
            <div className="left">
                {gameIsDone ? (
                    <PlayAgain onClick={resetGame} />
                    ) : (
                    <StarsDisplay count={starsNumber} />
                )}
          </div>
          <div className="right">
          {utils.range(1,9).map(number =>
            <PlayNumber 
                key={number}
                status={numberStatus(number)}
                number={number}
                onClickEvent={onNumberClick}
            />            
          )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };


  export default StarMatch;