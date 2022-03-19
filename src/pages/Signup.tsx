import { Box, Typography, TextField } from '@mui/material';
import React, { Component } from 'react';

type State = {
  username: string;
  password: string;
  confirmPassword: string;
  mail: string;
};

class Signup extends Component<State> {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    mail: '',
  };

  render() {
    return (
      <Box>
        <Typography variant="h4">Sign-up</Typography>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <TextField id="outlined-basic" label="Mail" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Confirm Mail"
            variant="outlined"
          />
        </Box>
      </Box>
    );
  }
}

export default Signup;
