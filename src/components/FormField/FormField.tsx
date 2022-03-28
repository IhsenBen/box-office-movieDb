import { Stack, TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import React from 'react';

interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({
  name,
  label,
  type = 'text',
  required = false,
}) => {
  return (
    <Stack
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2,

      }}
    >
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        type={type}
        fullWidth
        helperText={<ErrorMessage name={name} />}
      />
    </Stack>
  );
};

export default FormikField;
