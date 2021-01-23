import React from 'react';
import { StyledNavBar, StyledNavLink, StyledIcon, StyledUser } from '../styles';
import { useUserCtx } from '../providers';

export const AuthedNavBar = () => {
  const { user } = useUserCtx();

  return (
    <StyledNavBar>
      <div>
        <StyledNavLink exact to='/' activeClassName='yep'>
          Home
        </StyledNavLink>
        <StyledNavLink to='/create-post' activeClassName='yep'>
          New post
        </StyledNavLink>
      </div>
      <StyledNavLink to='/profile' activeClassName='yep'>
        <StyledUser>
          <StyledIcon src={user.userImg} alt='userImg' />
          <span>{user.name}</span>
        </StyledUser>
      </StyledNavLink>
    </StyledNavBar>
  );
};

export const UnauthedNavBar = () => {
  return (
    <StyledNavBar>
      <StyledNavLink exact to='/' activeClassName='yep'>
        Home
      </StyledNavLink>
      <div>
        <StyledNavLink to='/login' activeClassName='yep'>
          Login
        </StyledNavLink>
        <span style={{ color: 'white' }}>/</span>
        <StyledNavLink to='/register' activeClassName='yep'>
          Register
        </StyledNavLink>
      </div>
    </StyledNavBar>
  );
};
