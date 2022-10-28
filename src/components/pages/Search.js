import { TextField } from '@material-ui/core';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Fragment, useState } from 'react';
import MovieCard from '../UI/MovieCard';
import rawAxios from 'axios';

const Search = () => {
  const [searchResults, setSearchResults] = useState();

  const history = useHistory();

  const searchHandler = (event) => {
    const searchText = event.target.value;
    searchMovies(searchText);
    history.push(`/search/${searchText}`);
  };

  async function searchMovies(searchText) {
    const data = await rawAxios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=f4872214e631fc876cb43e6e30b7e731&query=${searchText}&language=en-US&include_adult=false`
    );

    setSearchResults(data.data.results);
    console.log("////////////////",data.data);
  }

  return (
    <>
      <Grid container direction={'row'} justifyContent="center" >
        <Grid container item xs="auto">
          <TextField
            onChange={searchHandler}
            label="SEARCH"
            id="fullWidth"
          />
        </Grid>
      </Grid>

      <Route path="/search/:searchText">
        {searchResults && <MovieCard movies={searchResults} />}
      </Route>
    </>
  );
};

export default Search;
