import React from 'react';
import { Route } from 'react-router-dom';
import {
  AuthedHome,
  Profile,
  CreatePost,
  PostPage,
  EditPost,
  EditProfile,
  Chat,
} from './pages';
import { StyledApp } from './styles';
import { AuthedNavBar } from './components';

function AuthedApp() {
  return (
    <StyledApp>
      <AuthedNavBar />
        <Route path='/' component={AuthedHome} exact />
        <Route path='/create-post' component={CreatePost} />
        <Route path='/post/:id' component={PostPage} exact />
        <Route path='/post/:id/edit' component={EditPost} />
        <Route path='/profile' component={Profile} exact />
        <Route path='/profile/edit' component={EditProfile} />
        <Route path='/chat/:room' component={Chat} />
    </StyledApp>
  );
}

export default AuthedApp;
