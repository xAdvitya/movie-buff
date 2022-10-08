import { TextField } from '@material-ui/core';
import { Grid } from '@mui/material';
import * as React from 'react';

const Search = () => {
  return (
    <Grid container justifyContent={'center'} xs={12}>
      <Grid container item xs={6} >
        <TextField sx={{ minWidth: 650 }} label="SEARCH" id="fullWidth" />
      </Grid>
    </Grid>
  );
};

export default Search;
