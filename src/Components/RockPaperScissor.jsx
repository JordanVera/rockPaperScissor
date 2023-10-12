import { Button } from '@mui/material';
import 'animate.css';

const RockPaperScissor = ({ setUserPick }) => {
  return (
    <div id="rps" className="animate__animated animate__fadeIn">
      <div className="top-row">
        <Button onClick={() => setUserPick('paper')} className="card paper">
          <img className="img" src="media/paper.png" alt="paper" />
        </Button>
        <Button onClick={() => setUserPick('rock')} className="card rock">
          <img className="img" src="media/rock.png" alt="rock" />
        </Button>
      </div>

      <div className="bottom-row">
        <Button onClick={() => setUserPick('scissor')} className="card scissor">
          <img className="img" src="media/scissor.png" alt="scissor" />
        </Button>
      </div>
    </div>
  );
};

export default RockPaperScissor;
