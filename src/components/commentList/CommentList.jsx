import React, { useContext, useEffect, useState } from 'react'
import { Comments } from '../../Context';
import SingleComment from '../comment/SingleComment';
import Pagination from './../pagination/Pagination';

const CommentList = () => {
  //const [comments, setComments] = useState([]);
  const {comments, setComments} = useContext(Comments);
  const [commentsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const lastCommentIndex = currentPage * commentsPerPage;
  const firstCommentIndex = lastCommentIndex - commentsPerPage;
  const currentComment = comments.slice(firstCommentIndex, lastCommentIndex)
  useEffect(() => {
    fetch('https://bigcountry-task.vercel.app/comments.json')
      .then((response) => response.json())
      .then((actualData) => setComments(actualData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ul>
        <span>Total: {comments.length}</span>
        {currentComment.map(comment => <SingleComment author={comment.author} createdAt={comment.created_at} body={comment.body} key={comment.id}/>)}
      </ul>
      <Pagination commentsPerPage={commentsPerPage} totalComments={comments.length}/>
    </>
    
  )
}

export default CommentList