import React, { useState } from 'react';
import {
  Title,
  BlueButton,
  StyledForm,
  StyledInput,
  StyledError,
  StyledImage,
} from '../styles';
import { useUserCtx } from '../providers';
import { Formik } from 'formik';
import { updateProfileSchema } from '../helpers/validationSchema';

function EditProfile({ history }) {
  const { userApi, user } = useUserCtx();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [imgPreview, setImgPreview] = useState('');
  const handleSubmit = async (values) => {
    let formData = new FormData();

    formData.append('userImg', values.userImg);
    formData.append('name', values.name);
    formData.append('dateOfBirth', values.dateOfBirth);
    try {
      await userApi.update(formData);
      history.push('/profile');
    } catch (error) {
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <div>
      <Title>{loading ? 'Loading profile data...' : 'Edit your profile'}</Title>
      {error && <StyledError>{error}</StyledError>}
      <Formik
        initialValues={{
          name: user.name,
          userImg: user.userImg,
          dateOfBirth: user.dateOfBirth,
        }}
        validationSchema={updateProfileSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await handleSubmit(values);
          setSubmitting(false);
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
              {isSubmitting ? 'Updating...' : 'Submit'}
            </BlueButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}

export default EditProfile;
