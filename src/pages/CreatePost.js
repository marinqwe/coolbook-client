import React, { useState, useReducer, useContext } from 'react';
import { StyledError, Title } from '../styles';
import { UserContext, ApiContext } from '../context';
import { PostForm } from '../components';

function CreatePost({ history }) {
  const { user } = useContext(UserContext);
  const { postApi } = useContext(ApiContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      //TODO: get post ID after creation
      await postApi.create({ post: values, userId: user.id });
      setLoading(false);
      //REDIRECT TO POST AFTER CREATION
      //history.push(`/post/${postId}`);
    } catch (error) {
      console.log(error);
      setError('Creating post failed, please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      <Title>Create new post</Title>
      {loading && <p>Creating post...</p>}
      {error && <StyledError>{error}</StyledError>}
      <PostForm handleSubmit={handleSubmit} history={history} />
    </div>
  );
}

export default CreatePost;
