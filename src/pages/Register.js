import React, { useState, useContext } from 'react';
import {
  StyledInput,
  StyledForm,
  BlueButton,
  StyledError,
  Title,
  StyledNote,
  StyledImage,
} from '../styles';
import { UserContext } from '../context';
import { Formik } from 'formik';
import { registrationSchema } from '../helpers/validationSchema';

function Register({ history }) {
  const { userApi } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [imgPreview, setImgPreview] = useState('');

  const handleSubmit = async (values) => {
    let formData = new FormData();

    formData.append('userImg', values.userImg);
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('dateOfBirth', values.dateOfBirth);
    try {
      await userApi.register(formData);
    } catch (error) {
      console.log(error);
      setError('Registration failed, please try again.');
    }
  };

  return (
    <div>
      <Title>Register new account</Title>
      {error && <StyledError>{error}</StyledError>}
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          userImg: null,
          dateOfBirth: '',
        }}
        validationSchema={registrationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await handleSubmit(values);
          setSubmitting(false);
          history.push('/login');
        }}
      >
        {({
          isSubmitting,
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              placeholder='Name'
            />
            {errors.name && touched.name && (
              <StyledError>{errors.name}</StyledError>
            )}
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
            <StyledNote>
              <em>
                Note: date format is month/day/year. You can click the icon on
                the right to choose a date.
              </em>
            </StyledNote>
            <StyledInput
              type='date'
              name='dateOfBirth'
              value={values.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && touched.dateOfBirth && (
              <StyledError>{errors.dateOfBirth}</StyledError>
            )}
            <StyledInput
              type='file'
              name='userImg'
              onChange={(event) => {
                setFieldValue('userImg', event.currentTarget.files[0]);
                setImgPreview(
                  URL.createObjectURL(event.currentTarget.files[0])
                );
              }}
            />
            {imgPreview && <StyledImage src={imgPreview} alt='userImg' />}
            <BlueButton type='submit' disabled={isSubmitting}>
              Register
            </BlueButton>
            {isSubmitting && <p>Registering user...</p>}
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}

export default Register;
