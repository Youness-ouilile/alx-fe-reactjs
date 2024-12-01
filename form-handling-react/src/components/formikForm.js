import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formikForm = () => {
  
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  
  const handleSubmit = (values) => {
    console.log('Form submitted with:', values);
  };

  return (
    <div>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
              />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default formikForm;