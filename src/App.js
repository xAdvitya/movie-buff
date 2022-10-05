import rawAxios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/UI/NavBar';
import MovieCard from './components/UI/MovieCard';

function App() {
  const [movies, setMoviesList] = useState();
  const [currentGener, setCurrentGener] = useState();
  const [page, setPage] = useState();
  const [genreList, setGenreList] = useState();

  useEffect(() => {
    async function getGener() {
      const data = await rawAxios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US'
      );
      setGenreList(data.data.genres);
    }
    getGener();
  }, []);

  useEffect(() => {
    async function getMovies(page, currentGener) {
      const data = await rawAxios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      );
      setMoviesList(data.data);
      if (data.data) console.log(data.data);
      else console.log('empty');
    }
    getMovies();
  }, []);

  //original_title
  //results.
  //page
  //overview
  //release_date
  //vote_average

  //https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28

  //https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

  // console.log(genreList);

  return (
    <Fragment>
      <NavBar genres={genreList} />
      {/* <Switch>
        <div className="App">
          <Route exact path="/home" component={null} />
        </div>
      </Switch> */}

      <h2>{movies && movies.results[0].original_title}</h2>

      <h2>vote_average :{movies && movies.results[0].vote_average}</h2>

      {movies && <MovieCard movies={movies} />}
    </Fragment>
  );
}

export default App;
