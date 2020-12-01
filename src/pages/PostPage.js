import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import {
  StyledPostTitle,
  StyledPostContent,
  OrangeButton,
  ButtonGroup,
  DarkButton,
  StyledError,
} from "../styles";
import ConfirmPostDelete from "../components/ConfirmPostDelete";

function PostPage({ match, history }) {
  const [post, setPost] = useState({
    title: "",
    content: "",
    id: null,
    userId: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deletingPost, setDeletingPost] = useState(false);
  const { postApi, user } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const {
        data: { title, content, id, userId },
      } = await postApi.get(match.params.id);
      setPost({ title, content, id, userId });
      setLoading(false);
    };
    fetchPost();
  }, [match.params.id, postApi]);

  const onPostDelete = () => {
    setError(null);
    setDeletingPost(true);
  };

  const onPostDeleteConfirm = async (id) => {
    try {
      const postDeleted = await postApi.delete(id);
      console.log(postDeleted);
      setDeletingPost(false);
    } catch (error) {
      console.log(error);
      setDeletingPost(false);
      setError("Delete post failed.");
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
    <div>
      {error && <StyledError>{error}</StyledError>}

      {user && user.id === post.userId && (
        <ButtonGroup>
          <OrangeButton onClick={() => history.push(`/edit-post/${post.id}`)}>
            Edit Post
          </OrangeButton>
          <DarkButton onClick={() => onPostDelete(post.id)}>
            Delete post
          </DarkButton>
        </ButtonGroup>
      )}
      <StyledPostTitle>{post.title}</StyledPostTitle>
      <StyledPostContent>{post.content}</StyledPostContent>
    </div>
  );
}

export default PostPage;
