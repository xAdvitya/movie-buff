import React from 'react';
import { AppBar, Button } from '@mui/material';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@mui/material/Typography';
import DropDown from './DropDown';
import { Link, Route } from 'react-router-dom';


const NavBar = (props) => {
  return (
    <AppBar position="sticky" style={{ background: '#EDC7B7' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" style={{ color: '#AC3B61' }}>
            MOVIE BUFF
          </Typography>
        </Link>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <Route path="/" exact>
          <DropDown genres={props.genres} control={props.control} />
        </Route>
        <Button
          href="/search"
          variant="contained"
          edge="end"
          color="success"
          style={{ background: '#123C69' }}
        >
          search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
