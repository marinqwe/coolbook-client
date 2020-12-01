import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  Profile,
  CreatePost,
  PostPage,
  EditPost,
  EditProfile,
} from "./pages";
import { StyledApp } from "./styles";

function AuthedApp() {
  return (
    <StyledApp>
      <Route exact path='/' component={Home} />
      <Route path='/create-post' component={CreatePost} />
      <Route exact path='/post/:id' component={PostPage} />
      <Route path='/post/:id/edit' component={EditPost} />
      <Route exact path='/profile' component={Profile} />
      <Route path='/profile/edit' component={EditProfile} />
    </StyledApp>
  );
}

export default AuthedApp;
