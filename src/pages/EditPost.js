import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import {
  Title,
  StyledInput,
  StyledForm,
  BlueButton,
  StyledContent,
  StyledError,
} from '../styles';
import { useApiCtx } from '../providers';
import { createPostSchema } from '../helpers/validationSchema';

function EditPost({ match, history }) {
  const { postApi } = useApiCtx();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const {
        data: { title, content },
      } = await postApi.get(match.params.id);
      setTitle(title);
      setContent(content);
      setLoading(false);
    };
    fetchPost();
  }, [match.params.id, postApi]);

  const handleSubmit = async (values) => {
    setError(null);
    setLoading(true);
    try {
      const {
        data: { id },
      } = await postApi.edit({
        post: { title: values.title, content: values.content },
        id: match.params.id,
      });
      setLoading(false);
      history.push(`/post/${id}`);
    } catch (error) {
      setError('Editing post failed, please try again.');
      setLoading(false);
    }
  };
  return (
    <div>
      <Title>{loading ? 'Loading post...' : 'Edit post'}</Title>
      {error && <StyledError>{error}</StyledError>}
      <Formik
        initialValues={{
          title: title,
          content: content,
        }}
        enableReinitialize
        validationSchema={createPostSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await handleSubmit(values);
          setSubmitting(false);
          history.push(`/post/${match.params.id}`);
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
    </div>
  );
}

export default EditPost;
