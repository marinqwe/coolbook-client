import React, { useEffect, useState, useCallback } from 'react';
import { StyledComments } from '../styles';
import Comment from './Comment';
import { useApiCtx, useUserCtx } from '../providers';

function Comments({ postId }) {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const { commentsApi } = useApiCtx();
  const { user } = useUserCtx();

  const fetchComments = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await commentsApi.getAll(postId);
      setComments(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [commentsApi, postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const onRemoveComment = async (id) => {
    try {
      await commentsApi.delete(id);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <StyledComments>Fetching comments...</StyledComments>;

  if (!comments.length) {
    return <StyledComments>There are no comments yet.</StyledComments>;
  }

  return (
    <StyledComments>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          userId={user.id}
          removeComment={onRemoveComment}
          fetchComments={fetchComments}
        />
      ))}
    </StyledComments>
  );
}

export default Comments;
