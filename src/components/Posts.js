import React, { useContext } from "react";
import {
  StyledPostContent,
  StyledPostTitle,
  StyledPostPreview,
} from "../styles";
import UserVote from "./UserVote";
import { UserContext } from "../context/user-context";

function Posts({ posts, history, fetchPosts }) {
  const { likesApi, user } = useContext(UserContext);
  const onUserVote = async (userVote, postId) => {
    try {
      await likesApi.userVote({
        userVote,
        userId: user.id,
        postId,
      });
      fetchPosts();
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
      <StyledPostContent>
        <StyledPostTitle onClick={() => history.push(`/post/${post.id}`)}>
          {post.title}
        </StyledPostTitle>
        <div>{post.content}...</div>
      </StyledPostContent>
    </StyledPostPreview>
  ));
}

export default Posts;
