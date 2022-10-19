import rawAxios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/UI/NavBar';
import MovieCard from './components/UI/MovieCard';
import Search from './components/pages/Search';
import MovieModal from './components/UI/MovieModal';

function App() {
  const [movies, setMoviesList] = useState();
  const [currentGenre, setcurrentGenre] = useState();
  const [page, setPage] = useState(1);
  const [genreList, setGenreList] = useState();
  const [nextPage, setNextPage] = useState(false);
  const [previousMovieList, setPreviousMovieList] = useState();

  const controlProps = {
    movies,
    setMoviesList,
    currentGenre,
    setcurrentGenre,
    page,
    nextPage,
    setPage,
    setNextPage,
    genreList,
    setGenreList,
    previousMovieList,
    setPreviousMovieList,
  };

  useEffect(() => {
    async function getGenre() {
      const data = await rawAxios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US'
      );
      setGenreList(data.data.genres);
    }
    getGenre();
  }, []);

  useEffect(() => {
    async function getMovies(currentGenre, page) {
      if (currentGenre) {
        const data = await rawAxios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${currentGenre}`
        );

        setPreviousMovieList((previousMovieList) => {
          if (previousMovieList === undefined) return [data.data];
          else {
            if (nextPage) {
              console.log(previousMovieList);
              setNextPage(false);
              return [...previousMovieList, data.data];
            }
          }
        });
        setMoviesList(previousMovieList.results);
      } else {
        const data = await rawAxios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );

        setPreviousMovieList((previousMovieList) => {
          if (previousMovieList === undefined) return [data.data];
          else {
            if (nextPage) {
              console.log(previousMovieList);
              setNextPage(false);
              
              return [...previousMovieList, data.data];
            }
          }
        });

        setMoviesList(previousMovieList.results);
      }
    }

    getMovies(currentGenre, page);
  }, [currentGenre, page, setMoviesList, previousMovieList, nextPage]);

  //original_title
  //results.
  //page
  //overview
  //release_date
  //vote_average

  //https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28

  //https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

  //https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&query=${searchKeyWord}&language=en-US&include_adult=false

  // console.log(genreList);

  console.log('/////////////', controlProps.movies);
  return (
    <Fragment>
      <NavBar genres={genreList} control={controlProps} />
      <Switch>
        {controlProps.previousMovieList && controlProps.movies && (
          <Route
            path="/"
            render={(props) => <MovieCard movies={controlProps.movies} />}
            exact
          />
        )}
        <Route path="/search" render={() => <Search />} />
      </Switch>
    </Fragment>
  );
}

export default App;
