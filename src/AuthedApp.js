import React from 'react';
import { Route } from 'react-router-dom';
import {
  AuthedHome,
  Profile,
  CreatePost,
  PostPage,
  EditPost,
  EditProfile,
} from './pages';
import { StyledApp } from './styles';
import { AuthedNavBar } from './components/NavBar';

function AuthedApp() {
  return (
    <StyledApp>
      <AuthedNavBar />
      <Route exact path='/' component={AuthedHome} />
      <Route path='/create-post' component={CreatePost} />
      <Route exact path='/post/:id' component={PostPage} />
      <Route path='/post/:id/edit' component={EditPost} />
      <Route exact path='/profile' component={Profile} />
      <Route path='/profile/edit' component={EditProfile} />
    </StyledApp>
  );
}

export default AuthedApp;
