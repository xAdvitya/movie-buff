import { ControlCamera } from '@material-ui/icons';
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
    const generId = event.target.value;
    console.log(generId);
    async function f() {
      await props.control.setcurrentGenre(generId);
    }
    f();

    console.log(props.control.movies.results);
    //setMovies()
  };
  return (
    <Fragment>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-label">select genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="select gener"
          onChange={inputHandler}
        >
          {props.genres &&
            props.genres.map((genre) => (
              <MenuItem value={genre.id} key={genre.id}>
                {genre.name + ''}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default DropDown;
