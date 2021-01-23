import React, { useContext } from 'react';
import { LikesApi, PostApi, CommentsApi } from '../api';

const ApiContext = React.createContext(null);
export const useApiCtx = () => useContext(ApiContext);

export function ApiProvider({ children }) {
  const context = {
    postApi: new PostApi(),
    likesApi: new LikesApi(),
    commentsApi: new CommentsApi(),
  };
  return <ApiContext.Provider value={context}>{children}</ApiContext.Provider>;
}
