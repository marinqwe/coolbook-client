import React from 'react';
import {
  StyledInput,
  StyledForm,
  BlueButton,
  StyledContent,
  StyledError,
} from '../styles';
import { Formik } from 'formik';
import { createPostSchema } from '../helpers/validationSchema';

function PostForm({ handleSubmit, history }) {
  return (
    <Formik
      initialValues={{
        title: '',
        content: '',
      }}
      validationSchema={createPostSchema}
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
            name='title'
            value={values.title}
            onChange={handleChange}
            placeholder='Title'
          />
          {errors.title && touched.title && (
            <StyledError>{errors.title}</StyledError>
          )}
          <StyledContent
            type='textarea'
            name='content'
            value={values.content}
            onChange={handleChange}
            placeholder='Content of your post'
          />
          {errors.content && touched.content && (
            <StyledError>{errors.content}</StyledError>
          )}
          <BlueButton type='submit' disabled={isSubmitting}>
            Submit
          </BlueButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default PostForm;
