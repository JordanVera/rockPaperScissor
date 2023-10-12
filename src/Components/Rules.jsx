import * as React from 'react';
import { Box, Button, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'animate.css';

export default function Rules() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="animate__animated animate__headShake rulesContainer">
      <Button onClick={handleOpen} className="rulesBtn" variant="outlined">
        Rules
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style}>
          <div className="heading">
            <h2>Rules</h2>

            <CloseIcon className="icon" onClick={handleClose} />
          </div>
          <img src="media/rules.png" alt="rock paper scissors rules graphic" />
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,
};
