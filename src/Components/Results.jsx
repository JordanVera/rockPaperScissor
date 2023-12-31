import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const Results = ({ userPick, scoreCount, setScoreCount, setUserPick }) => {
  const [computerGenPick, setComputerGenPick] = useState(null);
  const [msg, setMsg] = useState('');
  const [winOrLose, setWinOrLose] = useState('');
  const [delayedMessage, setDelayedMessage] = useState(false);

  const logic = (userPick, computerPick) => {
    console.log('computerPick = ' + computerPick);

    // Rock Paper Scissors logic
    if (userPick === computerPick) {
      setMsg('Tie');
      console.log('TIEEE');
    } else if (
      (userPick === 'rock' && computerPick === 'scissor') ||
      (userPick === 'scissor' && computerPick === 'paper') ||
      (userPick === 'paper' && computerPick === 'rock')
    ) {
      setMsg('You win');
      setWinOrLose('w');
      console.log('User Wins');

      setTimeout(() => {
        setScoreCount(scoreCount + 1);
      }, 2000);
    } else {
      setMsg('You lose');
      setWinOrLose('l');
      console.log('computer wins');
    }
  };

  const generateComputerPick = () => {
    const computerPick = ['rock', 'scissor', 'paper'][
      Math.floor(Math.random() * 3)
    ];

    setTimeout(() => {
      setComputerGenPick(computerPick);
      logic(userPick, computerPick);
    }, 3000);

    setTimeout(() => {
      setDelayedMessage(true);
    }, 5000);
  };

  useEffect(() => {
    generateComputerPick();
  }, []);
  return (
    <div id="results">
      <div className="centerContainer">
        <div className="pickContainer">
          <div id="left-element">
            <h3>You Picked</h3>
            {userPick === 'rock' && (
              <Button className={`card rock`}>
                <img className="img" src="media/rock.png" alt="rock" />
              </Button>
            )}
            {userPick === 'scissor' && (
              <Button className={`card scissor`}>
                <img className="img" src="media/scissor.png" alt="rock" />
              </Button>
            )}
            {userPick === 'paper' && (
              <Button className={`card paper`}>
                <img className="img" src="media/paper.png" alt="rock" />
              </Button>
            )}
          </div>
          {delayedMessage && (
            <div className="center-element">
              <h3>{msg}</h3>
              <Button
                className="btn"
                onClick={() => {
                  setUserPick('');
                }}
                variant="outlined"
                color={`${winOrLose === 'w' ? 'success' : 'error'}`}
              >
                Play Again
              </Button>
            </div>
          )}

          <div id="right-element">
            <h3>The House Picked</h3>
            {computerGenPick ? (
              <Button className={`card ${computerGenPick}`}>
                <img
                  className="img"
                  src={`media/${computerGenPick}.png`}
                  alt="rock"
                />
              </Button>
            ) : (
              <div className="blueCircle"></div>
            )}
          </div>
        </div>
      </div>
      {computerGenPick && (
        <div className="mobileOnly">
          <h3>{msg}</h3>
          <Button
            className="btn"
            onClick={() => {
              setUserPick('');
            }}
            variant="outlined"
          >
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default Results;
