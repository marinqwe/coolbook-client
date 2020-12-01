import React, { useState, useReducer, useContext } from "react";
import {
  Title,
  BlueButton,
  StyledForm,
  StyledInput,
  StyledError,
} from "../styles";
import { UserContext } from "../context/user-context";

const initialFormState = {
  name: "",
  userImg: null,
};

function reducer(state, action) {
  if (action.type === "reset") {
    return initialFormState;
  }

  const result = { ...state };
  result[action.type] = action.value;
  return result;
}

function EditProfile({ history }) {
  const { userApi } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const { name, userImg } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("userImg", userImg);
    formData.append("name", name);
    try {
      await userApi.update(formData);
      dispatch({ type: "reset" });
      setLoading(false);
      history.push("/profile");
    } catch (error) {
      console.log(error);
      setError("Profile edit failed, please try again.");
      setLoading(false);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
  };

  const saveImg = (e) => {
    const { name, files } = e.target;
    dispatch({ type: name, value: files[0] });
  };

  return (
    <div>
      <Title>{loading ? "Loading profile data..." : "Edit your profile"}</Title>
      {error && <StyledError>{error}</StyledError>}
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          placeholder='Name'
        />
        <StyledInput type='file' name='userImg' onChange={saveImg} />
        <BlueButton type='submit'>Submit</BlueButton>
      </StyledForm>
    </div>
  );
}

export default EditProfile;
