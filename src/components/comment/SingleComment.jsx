import React from 'react'
import { Comment, CommentAvatar, CommentBody, CommentContent, CommentCreatedAt } from './SingleComment.style'

const SingleComment = ({id, body, author, createdAt}) => {
  return (
    <Comment key={id}>
      <CommentContent>
        <div style={{display: 'flex', background: 'white'}}>
          <div style={{marginRight:'10px', background: 'white'}}><CommentAvatar src={author.avatar} alt={`user ${author.name}`}/></div>
          <div style={{background: 'white'}}>
            <h2 style={{fontSize:'24px', background: 'white'}}>{author.name}</h2>
            <p style={{fontSize:'18px', background: 'white', color:'gray'}}>{author.company}</p>
          </div>
        </div>
        <CommentBody>{body}</CommentBody>
        <CommentCreatedAt>Message was created at {createdAt}</CommentCreatedAt>
      </CommentContent>
    </Comment>
  )
}

export default SingleComment
