import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ApiContext } from '../context';
import { Posts } from '../components';
import { Title } from '../styles';

export const Home = ({ history }) => {
  const { postApi } = useContext(ApiContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await postApi.getAll();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [postApi]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <Title>Loading posts...</Title>;
  }

  return (
    <div>
      <h2>Coolbook</h2>
      {posts.length ? (
        <Posts posts={posts} fetchPosts={fetchPosts} history={history} />
      ) : (
        <p>It's empty in here. Click "Create Post" to fill the void!</p>
      )}
    </div>
  );
};
