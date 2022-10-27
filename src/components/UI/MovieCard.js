import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import { MovieSharp } from '@material-ui/icons';

const MovieCard = (props) => {
  const loadMoreHandler = () => {
    console.log('props.control.previousMovieList.length');
    const currentPage = props.control.page + 1;
    props.control.setPage(currentPage);
    props.control.nextPage.current = true;
  };

  const lengthSettler = (text) => {
    if (text.length > 301) {
      return `${text.substring(0, 300)}...Read More`;
    } else {
      return text;
    }
  };

  const print = () => {
    console.log('MovieCard', props);
  };
  print();
  return (
    <>
      <Grid container direction={'row'} justify="center" spacing={6}>
        {props.movies.map((movie) => (
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345, backgroundColor: '#ece3e3' }}>
              <CardActionArea>
                {movie.poster_path && (
                  <CardMedia
                    component="img"
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}

                {!movie.poster_path && (
                  <CardMedia
                    component="img"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                    alt={movie.title}
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                  </Typography>
                  {movie.overview && (
                    <Typography variant="body2" color="text.secondary">
                      {lengthSettler(movie.overview)}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        edge="end"
        color="success"
        style={{ background: '#123C69' }}
        onClick={loadMoreHandler}
      >
        load more
      </Button>
    </>
  );
};

export default MovieCard;
