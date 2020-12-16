import React, { useState } from 'react';
import {
  StyledComment,
  StyledCommentHeader,
  StyledCommentBody,
  StyledDate,
  StyledRemove,
} from '../styles';
import { formatDate } from '../helpers/formatDate';

function Comment({ comment, userId, removeComment, fetchComments }) {
  const [loading, setLoading] = useState(false);

  const confirmRemoveComment = async (commentId) => {
    setLoading(true);
    await removeComment(commentId);
    await fetchComments();
    setLoading(false);
  };
  if (loading) return <p>REMOVING COMMENT...</p>;

  return (
    <StyledComment>
      <StyledCommentHeader>
        <div>
          <span>{comment.user.name}</span>
          <StyledDate>commented on {formatDate(comment.createdAt)}</StyledDate>
        </div>
        {comment.user.id === userId && (
          <StyledRemove
            onClick={() =>
              window.confirm('Delete your comment?') &&
              confirmRemoveComment(comment.id)
            }
          >
            REMOVE
          </StyledRemove>
        )}
      </StyledCommentHeader>
      <StyledCommentBody>{comment.content}</StyledCommentBody>
    </StyledComment>
  );
}

export default Comment;
