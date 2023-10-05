import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

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
      setScoreCount(scoreCount + 1);
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
    }, 1000);

    setTimeout(() => {
      setDelayedMessage(true);
    }, 3000);
  };

  useEffect(() => {
    generateComputerPick();

    // animations
    const leftElement = document.querySelector('#left-element');
    const rightElement = document.querySelector('#right-element');

    // Create the animation
    gsap.to(leftElement, {
      x: -100, // Slide to the left by 100 pixels (adjust as needed)
      duration: 1, // Animation duration in seconds
      delay: 3, // Delay the animation by 5 seconds
    });

    gsap.to(rightElement, {
      x: 100, // Slide to the left by 100 pixels (adjust as needed)
      duration: 1, // Animation duration in seconds
      delay: 3, // Delay the animation by 5 seconds
    });
  }, []);
  return (
    <div id="results">
      <div className="centerContainer">
        <div className="pickContainer">
          <div id="left-element">
            <h3>You Picked</h3>
            {userPick === 'rock' && (
              <Button className={`card rock`}>
                <img className="img" src="/media/rock.png" alt="rock" />
              </Button>
            )}
            {userPick === 'scissor' && (
              <Button className={`card scissor`}>
                <img className="img" src="/media/scissor.png" alt="rock" />
              </Button>
            )}
            {userPick === 'paper' && (
              <Button className={`card paper`}>
                <img className="img" src="/media/paper.png" alt="rock" />
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
                  src={`/media/${computerGenPick}.png`}
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
