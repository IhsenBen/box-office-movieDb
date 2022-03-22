import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Box } from '@mui/material/';

import FormikField from '../components/FormField/FormField';

/*
dosen't work yet, just wrote boilerplate code
*/

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
  username: Yup.string()
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Signup: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={2}
            m={2}
          >
            <FormikField
              name="NickName"
              label="NickName"
              type="text"
              required={true}
            />
            <FormikField
              name="email"
              label="Email"
              type="email"
              required={true}
            />
            <FormikField
              name="password"
              label="Password"
              type="password"
              required={true}
            />
            <FormikField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                required={true}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={ !props.isValid || !props.dirty}
            >
              Sign Up
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
