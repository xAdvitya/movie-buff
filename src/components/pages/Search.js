import { TextField } from '@material-ui/core';
import { Grid } from '@mui/material';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import MovieCard from '../UI/MovieCard';
import rawAxios from 'axios';

//https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&query=${searchKeyWord}&language=en-US&include_adult=false

const DUMMY_DATA = {
  "page": 1,
  "results": [
    {
      "name": "naruto",
      "id": 279728
    },
    {
      "name": "naruto shippuden",
      "id": 279734
    }
  ],
  "total_pages": 1,
  "total_results": 2
};

const Search = () => {
  const [searchResults, setSearchResults] = useState();

  const history = useHistory();

  const searchHandler = (event) => {
    const searchText = event.target.value;
    searchMovies(searchText);
    history.push(`/search/${searchText}`);
  };

  async function searchMovies(searchText) {
    console.log(
      `https://api.themoviedb.org/3/search/movie?api_key=f4872214e631fc876cb43e6e30b7e731&query=${searchText}&language=en-US&include_adult=false`
    );
    const data = await rawAxios.get(
      `https://api.themoviedb.org/3/search/keyword?api_key=f4872214e631fc876cb43e6e30b7e731&query=naruto&page=1`
    );

    await setSearchResults(data.data);

    console.log(data.data);
  }

  return (
    <>
      <Grid container justifyContent={'center'} xs={12}>
        <Grid container item xs={6}>
          <TextField
            onChange={searchHandler}
            sx={{ minWidth: 650 }}
            label="SEARCH"
            id="fullWidth"
          />
        </Grid>
      </Grid>

      <Route path="/search/:searchText">
        {/* {searchResults && <MovieCard movies={searchResults} />} */}
        {searchResults && <MovieCard movies={DUMMY_DATA} />}
      </Route>
    </>
  );
};

export default Search;
