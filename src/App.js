import React from 'react';
import { useUserCtx } from './providers';
import { FullPageLoader } from './components';
import AuthedApp from './AuthedApp';
import UnauthedApp from './UnauthedApp';

function App() {
  const { user, loadingUser } = useUserCtx();

  if (loadingUser) {
    return <FullPageLoader />;
  }
  if (user) {
    return <AuthedApp />;
  }
  return <UnauthedApp />;
}

export default App;
