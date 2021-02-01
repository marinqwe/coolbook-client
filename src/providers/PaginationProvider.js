import React, { useContext, useState } from 'react';

const PaginationContext = React.createContext(null);
export const usePaginationCtx = () => useContext(PaginationContext);

export function PaginationProvider({ children }) {
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(0);

  return (
    <PaginationContext.Provider
      value={{
        page,
        setPage,
        totalPosts,
        setTotalPosts,
        postsPerPage,
        setPostsPerPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
