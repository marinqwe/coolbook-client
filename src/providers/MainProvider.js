import React from 'react';
import { ApiProvider } from './ApiProvider';
import { UserProvider } from './UserProvider';
import { PaginationProvider } from './PaginationProvider';

export function MainProvider({ children }) {
  return (
    <UserProvider>
      <ApiProvider>
        <PaginationProvider>{children}</PaginationProvider>
      </ApiProvider>
    </UserProvider>
  );
}
