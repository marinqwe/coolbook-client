import React, { useCallback, useEffect, useState } from 'react';
import { useApiCtx, useUserCtx } from '../providers';
import { Posts } from '../components';
import { Title, StyledHome } from '../styles';
import { ChatJoin } from '../components';

export const AuthedHome = ({ history }) => {
  const { postApi } = useApiCtx();
  const { user } = useUserCtx();
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
    <StyledHome>
      <div>
        {posts.length ? (
          <Posts posts={posts} fetchPosts={fetchPosts} history={history} />
        ) : (
          <p>It's empty in here. Click "New Post" to fill the void.</p>
        )}
      </div>
      {user && <ChatJoin />}
    </StyledHome>
  );
};

export const UnauthedHome = ({ history }) => {
  const { postApi } = useApiCtx();
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
    <StyledHome>
      <div>
        {posts.length ? (
          <Posts posts={posts} fetchPosts={fetchPosts} history={history} />
        ) : (
          <p>It's empty in here.</p>
        )}
      </div>
    </StyledHome>
  );
};
