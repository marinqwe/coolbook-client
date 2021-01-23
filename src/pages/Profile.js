import React from 'react';
import { DarkButton, OrangeButton } from '../styles';
import { useUserCtx } from '../providers';
import { StyledImage } from '../styles';

function Profile({ history }) {
  const { user, setUser, userApi } = useUserCtx();
  if (!user) {
    return <p>Loading user...</p>;
  }
  return (
    <div>
      <StyledImage src={user.userImg} alt='profilePic' />
      <h2>{user.name}</h2>
      <OrangeButton onClick={() => history.push('/profile/edit')}>
        Edit profile
      </OrangeButton>
      <DarkButton
        onClick={async () => {
          await userApi.logout();
          setUser(null);
          history.push('/login');
        }}
      >
        Log out
      </DarkButton>
    </div>
  );
}

export default Profile;
