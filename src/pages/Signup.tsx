import { Button, Grid, Typography, Stack } from '@mui/material/';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikField from '../components/FormField/FormField';

interface FormValues {
  NickName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialValues: FormValues = {
  NickName: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const mockEmails = ['test1@gmail.com', 'test2@aol.com', 'test3@live.com'];

const validationSchema = Yup.object().shape({
  NickName: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Email must be a valid email')
    .notOneOf(mockEmails, 'Email is already in use')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(lowercaseRegex, 'Password must contain a lowercase letter')
    .matches(uppercaseRegex, 'Password must contain an uppercase letter')
    .matches(numericRegex, 'Password must contain a number')
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Signup: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
    console.log(values);
  };

  return (
    <div className="Form" style={{ marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Sign-up
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
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
                }}
              >
                <Grid container spacing={1}>
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
                      name="email"
                      label="Email"
                      type="email"
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
                  <Grid item xs={12} sm={8}>
                    <FormikField
                      name="passwordConfirm"
                      label="Confirm Password"
                      type="password"
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={7} sx={{ textAlign: 'right' }}>
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
              </Grid>
            </Form>
          );
        }}
      </Formik>
      </Grid>
      <Grid container justifyContent="center" spacing={4}>
      <Stack sx={{ width: 150, textAlign: 'center' }}>
        <Typography variant="body2" gutterBottom sx={{ textAlign: 'center' }}>
           You have an account?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/login"
          sx={{ textTransform: 'none', width: '100%' }}
        >
          Log in
        </Button>
      </Stack>
      </Grid>

    </div>
  );
};

export default Signup;
