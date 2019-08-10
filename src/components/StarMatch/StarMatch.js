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
    const [secondsLeft, setSecondsLeft] = React.useState(10);

    const candidateAreWronge = utils.sum(candidateNums) > starsNumber;
    const gameStatus = availableNums.length === 0 
    ? 'won'
  : secondsLeft === 0 ? 'lost' : 'active'
  
    const resetGame = () => {
        setStarNumber(utils.random(1, 9));
        setAvailableNums(utils.range(1, 9));
        setCandidateNums([]);
        setSecondsLeft(10);
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
        if (gameStatus !== 'active' || currentStatus === 'used') {
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

    React.useEffect(()=>{
        if(secondsLeft>0 && availableNums.length > 0){

            const timeOutId = setTimeout(() => {
                setSecondsLeft(secondsLeft-1)
            }, 1000);
            return ()=>clearTimeout(timeOutId);
        }
    });
    
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
            <div className="left">
                {gameStatus !== 'active'? (
                    <PlayAgain onClick={resetGame} gameStatus={gameStatus}/>
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
        <div className="timer">Time Remaining:{secondsLeft}
        
        </div>
      </div>
    );
  };


  export default StarMatch;