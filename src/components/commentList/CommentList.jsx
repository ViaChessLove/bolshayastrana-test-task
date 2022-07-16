import React, { useContext, useEffect, useState } from 'react'
import { Comments } from '../../Context';
import SingleComment from '../comment/SingleComment';

const CommentList = () => {
  //const [comments, setComments] = useState([]);
  const {comments, setComments} = useContext(Comments);
  useEffect(() => {
    fetch('https://bigcountry-task.vercel.app/comments.json')
      .then((response) => response.json())
      .then((actualData) => setComments(actualData))
      .catch((err) => console.log(err));
    console.log('reload')
  }, []);
  return (
    <ul>
        {comments.length}
        {comments.map(comment => <SingleComment author={comment.author} createdAt={comment.created_at} body={comment.body} key={comment.id}/>)}
    </ul>
  )
}

export default CommentList