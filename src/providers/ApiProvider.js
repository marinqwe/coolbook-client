import React, { useContext } from 'react';
import { LikesApi, PostApi, CommentsApi } from '../api';

const ApiContext = React.createContext(null);
export const useApiCtx = () => useContext(ApiContext);

const postApiUrl = `/api/post`;
const likesApiUrl = `/api/like`;
const commentsApiUrl = `/api/comment`;

export function ApiProvider({ children }) {
  const values = {
    postApi: new PostApi(postApiUrl),
    likesApi: new LikesApi(likesApiUrl),
    commentsApi: new CommentsApi(commentsApiUrl),
  };
  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
}
