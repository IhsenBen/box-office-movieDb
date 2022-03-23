import React from 'react';
import { ErrorMessage, Field } from 'formik';
import {TextField} from '@mui/material';


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
    <div style={
      {
        marginTop: '20px',
        marginBottom: '20px',
        width: '50vw',
      }
    } >
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

export default FormikField;
