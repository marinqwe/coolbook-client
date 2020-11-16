import React from "react";
import { Route } from "react-router-dom";
import { Home, Register, Login, PostPage } from "./pages";
import { StyledApp } from "./styles";

function UnauthedApp() {
  return (
    <StyledApp>
      <Route exact path='/' component={Home} />
      <Route path='/post/:id' component={PostPage} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </StyledApp>
  );
}

export default UnauthedApp;
