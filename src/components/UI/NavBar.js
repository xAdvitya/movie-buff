import React from 'react';
import { AppBar, Button } from '@mui/material';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DropDown from './DropDown';
import { Link, Route } from 'react-router-dom';
import MovieModal from './MovieModal';

const NavBar = (props) => {
  const loadMoreHandler = () => {
    const currentPage = props.control.page + 1;
    props.control.setPage(currentPage);
    props.control.nextPage.current = true;
    console.log(props.control.previousMovieList.length);
  };

  return (
    <AppBar position="sticky" style={{ background: '#EDC7B7' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/">
          <Typography variant="h4" style={{ color: '#AC3B61' }}>
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
        {/* <MovieModal /> */}
        <Button
          href="/search"
          variant="contained"
          edge="end"
          color="success"
          style={{ background: '#123C69' }}
        >
          search
        </Button>

        <Button
          variant="contained"
          edge="end"
          color="success"
          style={{ background: '#123C69' }}
          onClick={loadMoreHandler}
        >
          load more
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
