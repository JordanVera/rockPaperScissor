import { useState } from 'react';
import { Container } from '@mui/material';

import Header from './Header';
import RockPaperScissor from './RockPaperScissor';
import Pick from './Pick';
import Rules from './Rules';

function App() {
  const [scoreCount, setScoreCount] = useState(0);
  const [userPick, setUserPick] = useState('');

  return (
    <>
      <Container>
        <Header scoreCount={scoreCount} />

        {userPick === '' ? (
          <RockPaperScissor setUserPick={setUserPick} />
        ) : (
          <Pick
            userPick={userPick}
            scoreCount={scoreCount}
            setUserPick={setUserPick}
            setScoreCount={setScoreCount}
          />
        )}

        <Rules />
      </Container>
    </>
  );
}

export default App;
