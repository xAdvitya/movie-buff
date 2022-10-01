import React from 'react';
import { AppBar, Button, IconButton } from '@mui/material';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4">Movie Buff</Typography>
        <div />
        <Button variant="contained" edge="end" color="success">
          search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
