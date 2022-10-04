import rawAxios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/UI/NavBar';

function App() {

  const [movies, setMoviesList] = useState();
  const [currentGener, setCurrentGener] = useState();
  const [page, setPage] = useState('');
  const [genreList, setGenreList] = useState();

  useEffect(() => {
    async function getMovies() {
      const data = await rawAxios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US'
      );
      setGenreList(data.data.genres);
    }
    getMovies();
  }, []);

  // useEffect(()=>)

  //https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28

  //https://api.themoviedb.org/3/discover/movie?api_key=f4872214e631fc876cb43e6e30b7e731&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

  console.log(genreList);

  return (
    <Fragment>
      <NavBar genres={genreList} />
      <Switch>
        <div className="App">
          <Route exact path="/home" component={null} />
        </div>
      </Switch>
    </Fragment>
  );
}

export default App;
