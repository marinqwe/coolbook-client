import React, { useState, useReducer, useContext } from "react";
import { StyledInput, StyledForm, BlueButton, StyledError, Title } from "../styles";
import { UserContext } from "../context/user-context";

const initialFormState = {
  name: "",
  email: "",
  password: "",
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

function Register({ history }) {
  const { userApi } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const { name, email, password, userImg } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("userImg", userImg);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    try {
      await userApi.register(formData);
      dispatch({ type: "reset" });
      setLoading(false);
      history.push("/login");
    } catch (error) {
      console.log(error);
      setError("Registration failed, please try again.");
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
      <Title>Register new account</Title>
      {error && <StyledError>{error}</StyledError>}
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          placeholder='Name'
        />
        <StyledInput
          type='text'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Email'
        />
        <StyledInput
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='Password'
        />
        <StyledInput type='file' name='userImg' value={""} onChange={saveImg} />
        <BlueButton type='submit'>Register</BlueButton>
      </StyledForm>
      {loading && <p>Creating account...</p>}
    </div>
  );
}

export default Register;
