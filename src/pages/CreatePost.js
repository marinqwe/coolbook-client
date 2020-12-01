import React, { useState, useReducer, useContext } from "react";
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

  const result = { ...state };
  result[action.type] = action.value;
  return result;
}

function CreatePost() {
  const { postApi, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const { title, content } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //TODO: get post ID after creation
      await postApi.create({ post: state, userId: user.id });
      dispatch({ type: "reset" });
      setLoading(false);
      //REDIRECT TO POST AFTER CREATION
      //history.push(`/post/${postId}`);
    } catch (error) {
      console.log(error);
      setError("Creating post failed, please try again.");
      setLoading(false);
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
  };
  return (
    <div>
      <Title>Create new post</Title>
      {loading && <p>Creating post...</p>}
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

export default CreatePost;
