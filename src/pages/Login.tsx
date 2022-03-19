import React, { Component } from 'react';
import { Grid, Box, Typography, TextField } from '@mui/material';

type Props = {};

type State = {
  username: string;
  password: string;
};

export default class Login extends Component<Props, State> {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <Grid container direction="column">
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            my: 8,
          }}
        >
          Login
        </Typography>
        <Box
          sx={{
            my: 2,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{
              width: '20ch',
              my: 2,
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{
              width: '20ch',
            }}
          />
        </Box>
      </Grid>
    );
  }
}
