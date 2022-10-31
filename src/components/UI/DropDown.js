import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Fragment } from 'react';

const DropDown = (props) => {
  const inputHandler = (event) => {
    const generId = event.target.value;
    async function f() {
      await props.control.setcurrentGenre(generId);
    }
    f();
  };
  return (
    <Fragment>
      <FormControl
        sx={{
          m: 1,
          minWidth: 135,
          color: '#AC3B61',
        }}
        size="small"
      >
        <InputLabel
          sx={{
            color: '#AC3B61',
          }}
          id="select-label"
        >
          select genre
        </InputLabel>
        <Select
          labelId="select-label"
          id="select"
          label="select gener"
          onChange={inputHandler}
        >
          <MenuItem
            sx={{
              color: '#AC3B61',
              m: 1,
            }}
            value={false}
            key={'1x'}
          >
            None
          </MenuItem>
          {props.genres &&
            props.genres.map((genre) => (
              <MenuItem
                sx={{
                  color: '#AC3B61',
                  m: 1,
                }}
                value={genre.id}
                key={genre.id}
              >
                {genre.name + ''}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default DropDown;
