import React, { useEffect, useState } from 'react'
import SingleComment from '../comment/SingleComment';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://bigcountry-task.vercel.app/comments.json')
      .then((response) => response.json())
      .then((actualData) => setComments(actualData))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ul>
        {comments.map(comment => <SingleComment author={comment.author} createdAt={comment.created_at} body={comment.body} key={comment.id}/>)}
    </ul>
  )
}

export default CommentList