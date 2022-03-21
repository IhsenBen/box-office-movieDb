// import { Box, Typography, TextField, Button } from '@mui/material';
// import React, { Component } from 'react';
// import {
//   Formik,
//   FormikHelpers,
//   FormikProps,
//   Form,
//   Field,
//   FieldProps,
// } from 'formik';
// import * as Yup from 'yup';


/*
dosen't work yet, just wrote boilerplate code
*/

// interface FormValues {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const validationSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(3, 'Username must be at least 3 characters')
//     .required('Username is required'),
//   email: Yup.string()
//     .email('Email must be a valid email')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
// });

// const Signup = () => {
 

//   return (
//     <Formik
//       initialValues={{
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//       }}
//       // validationSchema={validationSchema}
//       onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
//         setTimeout(() => {
//           // alert(JSON.stringify(values, null, 2));
//           console.log(values);
//           setSubmitting(false);
//         }, 500);
//       }}
//     >
//       {({ isSubmitting }: FormikProps<FormValues>) => (
//         <Form>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             p={2}
//             m={2}
//           >
//             <Field
//               name="username"
//               placeholder="Username"
//               component={TextField}
//               type="text"
//               margin="normal"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <Field
//               name="email"
//               placeholder="Email"
//               component={TextField}
//               type="email"
//               margin="normal"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <Field
//               name="password"
//               placeholder="Password"
//               component={TextField}
//               type="password"
//               margin="normal"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <Field
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               component={TextField}
//               type="password"
//               margin="normal"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               disabled={isSubmitting}
//             >
//               Sign Up
//             </Button>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default Signup;
  



