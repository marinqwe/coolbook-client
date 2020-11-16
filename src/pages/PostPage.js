import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import { StyledPostTitle, StyledPostContent } from "../styles";

function PostPage({ match }) {
  const [post, setPost] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const { postApi } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const { data } = await postApi.get(match.params.id);
      setPost({ title: data.title, content: data.content });
      setLoading(false);
    };
    fetchPost();
  }, []);

  if (loading) return <h2>Loading post...</h2>;
  return (
    <div>
      <StyledPostTitle>{post.title}</StyledPostTitle>
      <StyledPostContent>{post.content}</StyledPostContent>
    </div>
  );
}

export default PostPage;
