import React, { useState } from 'react';
import {
  StyledInput,
  StyledForm,
  BlueButton,
  Title,
  StyledError,
} from '../styles';
import { useUserCtx } from '../providers';
import { Formik } from 'formik';
import { loginSchema } from '../helpers/validationSchema';

function Login({ history }) {
  const { setUser, userApi } = useUserCtx();
  const [error, setError] = useState(null);

  const handleSubmit = async ({ email, password }) => {
    try {
      const { data } = await userApi.login({ email, password });
      setUser(data.user);
    } catch (error) {
      setError('Login failed, please try again.');
    }
  };
  return (
    <div>
      <Title>Login to your account</Title>
      {error && <StyledError>{error}</StyledError>}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await handleSubmit(values);
          setSubmitting(false);
          history.push('/');
        }}
      >
        {({
          isSubmitting,
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              type='text'
              name='email'
              value={values.email}
              onChange={handleChange}
              placeholder='Email'
            />
            {errors.email && touched.email && (
              <StyledError>{errors.email}</StyledError>
            )}
            <StyledInput
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              placeholder='Password'
            />
            {errors.password && touched.password && (
              <StyledError>{errors.password}</StyledError>
            )}
            <BlueButton type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Log in'}
            </BlueButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}

export default Login;
