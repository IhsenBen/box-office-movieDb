import { Button, Grid, Typography } from '@mui/material/';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikField from '../components/FormField/FormField';

interface LogInValues {
  NickName: string;
  password: string;
}

const initialLogIn: LogInValues = {
  NickName: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  NickName: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LogIn: React.FC = () => {
  const handleSubmit = (values: LogInValues): void => {
    alert(JSON.stringify(values));
    console.log(values);
  };

  return (
    <div className="Form" style={{ marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Log In
      </Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialLogIn}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <Form>
              <Grid
                container
                sx={{
                  px: '150px',
                  py: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Grid item xs={12} sm={12}>
                  <FormikField
                    name="NickName"
                    label="NickName"
                    type="text"
                    required={true}
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <FormikField
                    name="password"
                    label="Password"
                    type="password"
                    required={true}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!props.isValid || !props.dirty}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LogIn;
