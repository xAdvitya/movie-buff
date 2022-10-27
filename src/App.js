import rawAxios from 'axios';
import { Fragment, useEffect, useRef, useState } from 'react';
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
  const nextPage = useRef(false);
  const previousMovieList = useRef();

  const controlProps = {
    movies,
    setMoviesList,
    currentGenre,
    setcurrentGenre,
    page,
    nextPage,
    setPage,
    genreList,
    setGenreList,
    previousMovieList,
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

        if (!nextPage.current) {
          console.log('undefined');
          console.log(nextPage);
          previousMovieList.current = undefined;
          previousMovieList.current = data.data.results;
          nextPage.current = false;
        } else {
          console.log('not undefined');
          nextPage.current = false;
          console.log('!data page', data.data.results);
          previousMovieList.current = [
            ...previousMovieList.current,
            ...data.data.results,
          ];
        }

        setMoviesList([...previousMovieList.current]);
      } else {
        console.log(nextPage);
        if (!currentGenre && page === 1) {
          previousMovieList.current = undefined;
        }
        const data = await rawAxios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );
        console.log('!previousMovieList', previousMovieList.current);
        if (!previousMovieList.current) {
          console.log('!previousMovieList', previousMovieList.current);
          console.log('!data page', data.data.results);
          previousMovieList.current = data.data.results;
        } else {
          if (nextPage.current) {
            console.log(nextPage);
            console.log('else', previousMovieList);
            nextPage.current = false;
            console.log('!data page', data.data.results);
            previousMovieList.current = [
              ...previousMovieList.current,
              ...data.data.results,
            ];
          }
        }
        console.log(
          'setMoviesList ,previousMovieList',
          ...previousMovieList.current
        );
        setMoviesList([...previousMovieList.current]);
      }
    }
    getMovies(currentGenre, page);
  }, [currentGenre, page, setMoviesList, nextPage, previousMovieList]);

  console.log('controlProps.movies', controlProps.movies);
  return (
    <Fragment>
      <NavBar genres={genreList} control={controlProps} />
      <Switch>
        {controlProps.previousMovieList && controlProps.movies && (
          <Route
            path="/"
            render={(props) => <MovieCard movies={controlProps.movies} control={controlProps}/>}
            exact
          />
        )}
        <Route path="/search" render={() => <Search />} />
      </Switch>
    </Fragment>
  );
}

export default App;
