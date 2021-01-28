import React, { useEffect, useState } from 'react';
import { StyledPagination } from '../styles';
import { usePaginationCtx } from '../providers';

function PostPagination() {
  const { page, setPage, totalPosts, postsPerPage } = usePaginationCtx();
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalPosts / postsPerPage) || 1);
  }, []);
  const handleOnClick = (value) => {
    setPage(page + value);
  };

  return (
    <StyledPagination>
      <button onClick={() => handleOnClick(-1)} disabled={page === 1}>
        ⬅ Prev
      </button>
      <p>
        Page {page} of {pageCount}
      </p>
      <button onClick={() => handleOnClick(1)} disabled={page === pageCount}>
        Next ➡
      </button>
    </StyledPagination>
  );
}

export default PostPagination;
