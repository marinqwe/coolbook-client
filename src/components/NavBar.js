import React, { useState } from 'react';
import {
  StyledNavBar,
  StyledNavLink,
  StyledIcon,
  StyledUser,
  StyledNavLeft,
  StyledToggleMenu,
} from '../styles';
import { useUserCtx } from '../providers';

export const AuthedNavBar = () => {
  const { user } = useUserCtx();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StyledNavBar>
      <nav>
        <StyledToggleMenu onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </StyledToggleMenu>
        <StyledNavLeft menuOpen={menuOpen}>
          <StyledNavLink
            exact
            to='/'
            activeClassName='yep'
            onClick={() => setMenuOpen(false)}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to='/create-post'
            activeClassName='yep'
            onClick={() => setMenuOpen(false)}
          >
            New post
          </StyledNavLink>
        </StyledNavLeft>
      </nav>

      <StyledNavLink
        to='/profile'
        activeClassName='yep'
        onClick={() => setMenuOpen(false)}
      >
        <StyledUser>
          <span>{user.name}</span>
          <StyledIcon src={user.userImg} alt='userImg' />
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
