import React, { useState, useContext } from "react";
import {
  StyledInput,
  StyledForm,
  BlueButton,
  Title,
} from "../styles";
import { UserContext } from "../context/user-context";

function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
  const { setUser, userApi } = useContext(UserContext);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { data } = await userApi.login({ email, password });
    console.log(data);
    setUser(data.user);
    setLoading(false);
    history.push("/");
  };
  return (
    <div>
      <Title>Login to your account</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <StyledInput
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <BlueButton type='submit' disabled={loading}>
          {loading ? "Logging in..." : "Loading"}
        </BlueButton>
      </StyledForm>
    </div>
  );
}

export default Login;
