import React, { useState, useContext } from 'react';
import { StyledInput, StyledForm, BlueButton } from '../styles';
import { ApiContext, UserContext } from '../context';

function AddComment({ postId, fetchPost }) {
  const [comment, setComment] = useState('');
  const { commentsApi } = useContext(ApiContext);
  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await commentsApi.create({
        content: comment,
        postId,
        userId: user.id,
      });
      await fetchPost();
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='Leave a comment...'
      />
      <BlueButton type='submit'>Submit</BlueButton>
    </StyledForm>
  );
}

export default AddComment;
