import React from 'react';
import { LikesApi, PostApi, CommentsApi } from '../api';

export const ApiContext = React.createContext(null);

export function ApiProvider({ children }) {
  const contexts = {
    postApi: new PostApi(),
    likesApi: new LikesApi(),
    commentsApi: new CommentsApi(),
  };
  return <ApiContext.Provider value={contexts}>{children}</ApiContext.Provider>;
}
