import React from "react";
import { Route } from "react-router-dom";
import { Home, Profile, CreatePost, PostPage } from "./pages";
import { StyledApp } from "./styles";

function AuthedApp() {
  return (
    <StyledApp>
      <Route exact path='/' component={Home} />
      <Route path='/create-post' component={CreatePost} />
      <Route path='/post/:id' component={PostPage} />
      <Route path='/profile' component={Profile} />
    </StyledApp>
  );
}

export default AuthedApp;
