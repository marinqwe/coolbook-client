import React, { useEffect, useState, useCallback } from 'react';
import { useUserCtx, useApiCtx } from '../providers';
import {
  StyledPostTitle,
  StyledPostContent,
  OrangeButton,
  ButtonGroup,
  DarkButton,
  StyledError,
  StyledPost,
} from '../styles';
import { ConfirmPostDelete, Comments, AddComment } from '../components';
import { getYoutubeLinks } from '../helpers/getYoutubeLinks';
import ReactPlayer from 'react-player/youtube';

function PostPage({ match, history }) {
  const [post, setPost] = useState({
    title: '',
    content: '',
    id: null,
    userId: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [deletingPost, setDeletingPost] = useState(false);
  const { user } = useUserCtx();
  const { postApi } = useApiCtx();

  const fetchPost = useCallback(async () => {
    setLoading(true);
    const {
      data: { title, content, id, userId },
    } = await postApi.get(match.params.id);
    setPost({ title, content, id, userId });
    let ytLinks = getYoutubeLinks(content);
    console.log(ytLinks);

    //TODO: fix embedding
    // if (ytLinks) {
    //   setVideos(ytLinks);
    // }
    setLoading(false);
  }, [postApi, match.params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const onPostDelete = () => {
    setError(null);
    setDeletingPost(true);
  };

  const onPostDeleteConfirm = async (id) => {
    try {
      const postDeleted = await postApi.delete(id);
      setDeletingPost(false);
      history.push('/');
    } catch (error) {
      setDeletingPost(false);
      setError('Delete post failed.');
    }
  };

  if (loading) return <h2>Loading post...</h2>;
  if (deletingPost)
    return (
      <ConfirmPostDelete
        onPostDeleteConfirm={onPostDeleteConfirm}
        postId={post.id}
        history={history}
        setDeletingPost={setDeletingPost}
      />
    );
  return (
    <>
      {error && <StyledError>{error}</StyledError>}

      {user && user.id === post.userId && (
        <ButtonGroup>
          <OrangeButton onClick={() => history.push(`/post/${post.id}/edit`)}>
            Edit Post
          </OrangeButton>
          <DarkButton onClick={() => onPostDelete(post.id)}>
            Delete post
          </DarkButton>
        </ButtonGroup>
      )}
      <StyledPost>
        <StyledPostTitle>{post.title}</StyledPostTitle>
        <StyledPostContent>{post.content}</StyledPostContent>
        {videos.map((video, i) => (
          <ReactPlayer key={i} url={video} controls light />
        ))}
      </StyledPost>
      <div>
        <AddComment postId={match.params.id} fetchPost={fetchPost} />
        <Comments postId={match.params.id} />
      </div>
    </>
  );
}

export default PostPage;
