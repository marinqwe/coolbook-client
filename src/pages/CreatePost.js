import React, { useState, useReducer, useContext } from "react";
import {
  StyledInput,
  StyledForm,
  BlueButton,
  StyledError,
  Title,
  StyledContent,
} from "../styles";
import { UserContext } from "../context/user-context";

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
  const { userApi, postApi, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const { title, content } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //TODO: get post ID after creation
      await postApi.create({ post: state, id: user.id });
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
      {error && <StyledError>{error}</StyledError>}
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type='text'
          name='title'
          value={title}
          onChange={onChange}
          placeholder='Title'
        />
        <StyledContent
          type='textarea'
          name='content'
          value={content}
          onChange={onChange}
          placeholder='Content of your post'
        />
        <BlueButton type='submit'>Submit</BlueButton>
      </StyledForm>
    </div>
  );
}

export default CreatePost;
