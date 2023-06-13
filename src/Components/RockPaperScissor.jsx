import { Button } from '@mui/material';

const RockPaperScissor = ({ setUserPick }) => {
  return (
    <div id="rps">
      <div className="top-row">
        <Button onClick={() => setUserPick('paper')} className="card paper">
          <img className="img" src="/media/paper.png" alt="rock" />
        </Button>
        <Button onClick={() => setUserPick('rock')} className="card rock">
          <img className="img" src="/media/rock.png" alt="rock" />
        </Button>
      </div>
      <div className="bottom-row">
        <Button onClick={() => setUserPick('scissor')} className="card scissor">
          <img className="img" src="/media/scissor.png" alt="rock" />
        </Button>
      </div>
    </div>
  );
};

export default RockPaperScissor;
