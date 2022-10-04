import React from 'react';
import { AppBar, Button } from '@mui/material';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DropDown from './DropDown';

const NavBar = (props) => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4">Movie Buff</Typography>
        <div />
        <div />
        <div />
        <div />

        <DropDown genres={props.genres} />

        <Button variant="contained" edge="end" color="success">
          search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
