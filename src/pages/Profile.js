import React, { useContext } from "react";
import { CancelButton } from "../styles";
import { UserContext } from "../context/user-context";
import { StyledImage } from '../styles';

function Profile({ history }) {
  const { user, setUser, userApi } = useContext(UserContext);
  if (!user) {
    return <p>Loading user...</p>;
  }
  return (
    <div>
      <StyledImage src={user.userImg} alt="profilePic" />
      <h2>{user.name}</h2>
      <CancelButton
        onClick={async () => {
          await userApi.logout();
          setUser(null);
          history.push("/login");
        }}
      >
        Log out
      </CancelButton>
    </div>
  );
}

export default Profile;
