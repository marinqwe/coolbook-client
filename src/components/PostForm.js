import React from "react";
import {
  StyledInput,
  StyledForm,
  BlueButton,
  StyledContent,
} from "../styles";

function PostForm({ handleSubmit, title, content, onChange }) {
  return (
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
  );
}

export default PostForm;
