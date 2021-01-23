import React from 'react';
import { ApiProvider } from './ApiProvider';
import { UserProvider } from './UserProvider';

export function MainProvider({ children }) {
  return (
    <UserProvider>
      <ApiProvider>
          {children}
      </ApiProvider>
    </UserProvider>
  );
}
