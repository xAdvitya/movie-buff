import { Modal } from '@material-ui/core';
import { useState } from 'react';
import { Button } from '@mui/material';

const MovieModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  <div>
    <Button variant="contained" edge="end" color="success" onClick={handleOpen}>
      Modal
    </Button>
    <Modal open={open} onClose={handleClose}>
      <h1>MODAL</h1>
    </Modal>
  </div>;
};
export default MovieModal;
