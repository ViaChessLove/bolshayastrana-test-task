import React, { useContext, useEffect, useState } from 'react'
import { Comments } from '../../CommentContext';
import { Page } from '../../PageContext';
import SingleComment from '../comment/SingleComment';
import Pagination from './../pagination/Pagination';

const CommentList = () => {
  //const [comments, setComments] = useState([]);
  const {comments, setComments} = useContext(Comments);
  const [commentsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  //const {currentPage, setCurrentPage} = useContext(Page);
  const lastCommentIndex = currentPage * commentsPerPage;
  const firstCommentIndex = lastCommentIndex - commentsPerPage;
  const currentComments = comments.slice(firstCommentIndex, lastCommentIndex);
  useEffect(() => {
    fetch('https://bigcountry-task.vercel.app/comments.json')
      .then((response) => response.json())
      .then((actualData) => setComments(actualData))
      .catch((err) => console.log(err));
  }, []);

  const paginate = pageNumber => setCurrentPage(pageNumber)
  if (window.location.href.split('!#')[1] !== ''){
    if (currentPage !== Number(window.location.href.split('!#')[1].split('=')[1]))
      setCurrentPage(Number(window.location.href.split('!#')[1].split('=')[1]));
    console.log(currentPage);
  }
  return (
    <>
      <ul>
        <h4>Total: {comments.length}</h4>
        {currentComments.map(comment => <SingleComment author={comment.author} createdAt={comment.created_at} body={comment.body} key={comment.id}/>)}
      </ul>
      <Pagination paginate={paginate} commentsPerPage={commentsPerPage} totalComments={comments.length}/>
    </>
    
  )
}

export default CommentList