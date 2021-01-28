import { useReducer } from 'react';

const initialState = {
  page: 1,
  totalPosts: 0,
  postsPerPage: 0,
};

const reducer = (state, action) => {
  if (action.type === 'switchPage') {
    return {
      ...state,
      page: action.page,
    };
  }
};

export function usePagination() {
  const [pagingInfo, dispatch] = useReducer(reducer, initialState);

  return { pagingInfo, dispatch };
}
