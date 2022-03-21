// import React, { Component } from 'react';
// import { Grid, Box, Typography, TextField , Button} from '@mui/material';
// import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
// import * as Yup from 'yup';


/*
dosen't work yet, just wrote boilerplate code
*/

// const validationSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(3, 'Username must be at least 3 characters')
//     .required('Username is required'),
//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('Password is required'),
// });


// interface FormValues {
//   username: string;
//   password: string;
// }


// const logIn = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
//   setTimeout(() => {
//     // alert(JSON.stringify(values, null, 2));
//     console.log(values);
//     setSubmitting(false);
//   }, 500);
// }

// const logInFrom = () => {
//   return (
//     <Formik
//       initialValues={{
//         username: '',
//         password: '',
//       }}
//       validationSchema={validationSchema}
//       onSubmit={logIn}
//     >
//       {({ isSubmitting }: FormikProps<FormValues>) => (
//         <Form>
//           <Box mb={2}>
//             <Field
//               name="username"
//               label="Username"
//               component={TextField}
//               variant="outlined"
//               fullWidth
//             />
//           </Box>
//           <Box mb={2}>
//             <Field
//               name="password"
//               label="Password"
//               component={TextField}
//               variant="outlined"
//               fullWidth
//             />
//           </Box>
//           <Box mt={2}>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               disabled={isSubmitting}
//             >
//               Log In
//             </Button>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default logInFrom;
