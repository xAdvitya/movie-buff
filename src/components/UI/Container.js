import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Container = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${props.movies.results[0].poster_path}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.movies.results[0].original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.movies.results[0].overview}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${props.movies.results[1].poster_path}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.movies.results[1].original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.movies.results[1].overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Container;
