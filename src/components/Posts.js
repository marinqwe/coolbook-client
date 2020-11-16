import React from "react";
import {
  StyledPostContent,
  StyledPostTitle,
  StyledPostPreview,
} from "../styles";
import UserVote from "./UserVote";

function Posts({ posts, history }) {
  return posts.map((post) => (
    <StyledPostPreview key={post.id}>
      <UserVote postId={post.id} likes={post.userlikes} />
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
