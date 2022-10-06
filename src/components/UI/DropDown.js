import {
  AppBar,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Fragment } from 'react';

const DropDown = (props) => {
  const inputHandler = (event) => {
    // console.log(event.target.value);
    //make a global movie list which updates *useEffect[]*
    //setMovies()
  };
  return (
    <Fragment>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-label">select gener</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="select gener"
          onChange={inputHandler}
        >
          {props.genres &&
            props.genres.map((genre) => (
              <MenuItem value={genre.name} key={genre.id}>
                {genre.name + ''}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default DropDown;
