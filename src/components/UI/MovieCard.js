import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Container, Grid } from '@mui/material';

const MovieCard = (props) => {
  const loadMoreHandler = () => {
    const currentPage = props.control.page + 1;
    props.control.setPage(currentPage);
    props.control.nextPage.current = true;
  };

  // const lengthSettler = (text) => {
  //   if (text.length > 301) {
  //     return `${text.substring(0, 300)}...Read More`;
  //   } else {
  //     return text;
  //   }
  // };

  return (
    <>
      <Container>
        <Grid
          container
          direction={'row'}
          justifyContent="space-between"

        >
          {props.movies.map((movie) => (
            <Grid item xs={12} sm={4}>
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

                    <Typography variant="body2" color="text.secondary">
                      {movie.overview}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Grid container direction={'row'} justifyContent="center" spacing={6}>
        <Grid item xs="auto">
          <Button
            variant="contained"
            edge="end"
            color="success"
            style={{ background: '#123C69' }}
            onClick={loadMoreHandler}
          >
            load more
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieCard;
