import React, { useContext, useState } from 'react';

// const initialState = {
//   page: 1,
//   totalPosts: 0,
//   postsPerPage: 0,
// };

// const reducer = (state, action) => {
//   if (action.type === 'switchPage') {
//     return {
//       ...state,
//       page: action.page,
//     };
//   }
// };

const PaginationContext = React.createContext(null);
export const usePaginationCtx = () => useContext(PaginationContext);

export function PaginationProvider({ children }) {
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(0);
  //const [pagingInfo, dispatch] = useReducer(reducer, initialState);

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
