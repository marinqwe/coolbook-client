import React from 'react';
import { StyledInput, StyledForm, BlueButton, StyledError } from '../styles';
import { useApiCtx, useUserCtx } from '../providers';
import { Formik } from 'formik';
import { addCommentSchema } from '../helpers/validationSchema';

function AddComment({ postId, fetchPost }) {
  const { commentsApi } = useApiCtx();
  const { user } = useUserCtx();

  const handleSubmit = async ({ comment }) => {
    try {
      await commentsApi.create({
        content: comment,
        postId,
        userId: user.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        comment: '',
      }}
      validationSchema={addCommentSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit(values);
        setSubmitting(false);
        await fetchPost();
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
            name='comment'
            value={values.comment}
            onChange={handleChange}
            placeholder='Leave a comment...'
          />
          {errors.comment && touched.comment && (
            <StyledError>{errors.comment}</StyledError>
          )}
          <BlueButton type='submit' disabled={isSubmitting}>
            Submit
          </BlueButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default AddComment;
