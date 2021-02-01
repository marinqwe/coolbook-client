import React, { useCallback, useEffect, useState } from 'react';
import { useApiCtx, usePaginationCtx, useUserCtx } from '../providers';
import { Posts, ChatJoin, PostPagination } from '../components';
import { Title, StyledHome } from '../styles';

export const AuthedHome = ({ history }) => {
  const { postApi } = useApiCtx();
  const { user } = useUserCtx();
  const { page, setTotalPosts, setPostsPerPage } = usePaginationCtx();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { posts, pagingInfo },
      } = await postApi.getAll(page);
      setPosts(posts);
      setPostsPerPage(pagingInfo.postsPerPage);
      setTotalPosts(pagingInfo.totalPosts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [postApi, page, setTotalPosts, setPostsPerPage]);

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
          <>
            <PostPagination />
            <Posts posts={posts} fetchPosts={fetchPosts} history={history} />
            <PostPagination />
          </>
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
  const { page, setTotalPosts, setPostsPerPage } = usePaginationCtx();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { posts, pagingInfo },
      } = await postApi.getAll(page);
      setPosts(posts);
      setPostsPerPage(pagingInfo.postsPerPage);
      setTotalPosts(pagingInfo.totalPosts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [postApi, page, setTotalPosts, setPostsPerPage]);

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
          <>
            <PostPagination />
            <Posts posts={posts} fetchPosts={fetchPosts} history={history} />
            <PostPagination />
          </>
        ) : (
          <p>It's empty in here.</p>
        )}
      </div>
    </StyledHome>
  );
};
