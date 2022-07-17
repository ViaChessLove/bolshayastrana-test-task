import React, { useContext, useEffect, useState } from 'react';
import { Page } from '../../PageContext';
import { PaginationContainer, PaginationItem } from './Pagination.style';

const Pagination = ({ commentsPerPage, totalComments, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalComments/commentsPerPage); i++){
    pageNumbers.push(i);
  }
  return (
    <>
      <PaginationContainer>
        {
          pageNumbers.map((number) => <PaginationItem key={number}>
            <a href={`!#page=${number}`} onClick={() => paginate(number)}>
              {number}
            </a>
          </PaginationItem>
        )}
      </PaginationContainer>
    </>
  );
};

export default Pagination;