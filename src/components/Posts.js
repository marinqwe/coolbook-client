import React, { useContext } from 'react';
import {
  StyledPostContent,
  StyledPostTitle,
  StyledPostPreview,
  StyledPostHeader,
  StyledDate,
} from '../styles';
import UserVote from './UserVote';
import { UserContext, ApiContext } from '../context';
import { formatDate } from '../helpers/formatDate';

function Posts({ posts, history, fetchPosts }) {
  const { user } = useContext(UserContext);
  const { likesApi } = useContext(ApiContext);
  const onUserVote = async (userVote, postId) => {
    try {
      await likesApi.userVote({
        userVote,
        userId: user.id,
        postId,
      });
      await fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return posts.map((post) => (
    <StyledPostPreview key={post.id}>
      <UserVote
        onUserVote={onUserVote}
        postId={post.id}
        likes={post.userlikes}
      />
      <StyledPostContent onClick={() => history.push(`/post/${post.id}`)}>
        <StyledPostHeader>
          <div>
            <StyledPostTitle>{post.title}</StyledPostTitle>
            <StyledDate>posted on {formatDate(post.createdAt)}</StyledDate>
          </div>
          <span>({post.comment.length} comments)</span>
        </StyledPostHeader>
        <div>{post.content.substr(0, 50)}...</div>
      </StyledPostContent>
    </StyledPostPreview>
  ));
}

export default Posts;
