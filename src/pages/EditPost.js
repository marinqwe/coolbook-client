import React, { useState, useReducer, useContext, useEffect } from "react";
import { StyledError, Title } from "../styles";
import { UserContext } from "../context/user-context";
import PostForm from "../components/PostForm";

const initialFormState = {
  title: "",
  content: "",
};

function reducer(state, action) {
  if (action.type === "reset") {
    return initialFormState;
  }
  if (!action.type) {
    return { ...state, ...action };
  }
  const result = { ...state };
  result[action.type] = action.value;
  return result;
}

function EditPost({ match, history }) {
  const { postApi } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const { title, content } = state;

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const {
        data: { title, content },
      } = await postApi.get(match.params.id);
      dispatch({ title, content });
      setLoading(false);
    };
    fetchPost();
  }, [match.params.id, postApi]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const {
        data: { id },
      } = await postApi.edit({
        post: state,
        id: match.params.id,
      });
      dispatch({ type: "reset" });
      setLoading(false);
      history.push(`/post/${id}`);
    } catch (error) {
      console.log(error);
      setError("Editing post failed, please try again.");
      setLoading(false);
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
  };
  return (
    <div>
      <Title>{loading ? "Loading post..." : "Edit post"}</Title>
      {error && <StyledError>{error}</StyledError>}
      <PostForm
        handleSubmit={handleSubmit}
        onChange={onChange}
        content={content}
        title={title}
      />
    </div>
  );
}

export default EditPost;
