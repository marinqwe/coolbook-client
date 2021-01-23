import React from 'react';
import { Route } from 'react-router-dom';
import { UnauthedHome, Register, Login, PostPage } from './pages';
import { StyledApp } from './styles';
import { UnauthedNavBar } from './components/NavBar';

function UnauthedApp() {
  return (
    <StyledApp>
      <UnauthedNavBar />
      <Route exact path='/' component={UnauthedHome} />
      <Route path='/post/:id' component={PostPage} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </StyledApp>
  );
}

export default UnauthedApp;
