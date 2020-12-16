import React, { useContext } from 'react';
import { UserContext } from './context';
import { FullPageLoader } from './components';
import AuthedApp from './AuthedApp';
import UnauthedApp from './UnauthedApp';

function App() {
  const { user, loadingUser } = useContext(UserContext);

  if (loadingUser) {
    return <FullPageLoader />;
  }
  if (user) {
    return <AuthedApp />;
  }
  return <UnauthedApp />;
}

export default App;
