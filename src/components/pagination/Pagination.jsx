import React from 'react';
import { PaginationContainer, PaginationItem } from './Pagination.style';

const Pagination = ({ commentsPerPage, totalComments  }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalComments/commentsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <>
      <PaginationContainer>
        {pageNumbers.map((page) => <PaginationItem key={page}><a href='!#'>{page}</a></PaginationItem>)}
      </PaginationContainer>
    </>
  );
};

export default Pagination;