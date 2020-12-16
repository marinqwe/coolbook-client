import React, { useEffect, useContext, useState, useCallback } from 'react';
import { StyledComments } from '../styles';
import Comment from './Comment';
import { ApiContext, UserContext } from '../context';

function Comments({ postId }) {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const { commentsApi } = useContext(ApiContext);
  const { user } = useContext(UserContext);

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
      const commentRemoved = await commentsApi.delete(id);
      console.log(commentRemoved);
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
