import React from 'react'
import { Comment, CommentAuthorJob, CommentAuthorName, CommentAuthorNameJob, CommentAvatar, CommentAvatarWrapper, CommentBody, CommentContent, CommentCreatedAt, CommentUserInfo } from './SingleComment.style'

const SingleComment = ({id, body, author, createdAt}) => {
  return (
    <Comment key={id}>
      <CommentContent>
        <CommentUserInfo>
          <CommentAvatarWrapper><CommentAvatar src={author.avatar} alt={`user ${author.name}`}/></CommentAvatarWrapper>
          <CommentAuthorNameJob>
            <CommentAuthorName>{author.name}</CommentAuthorName>
            <CommentAuthorJob>{author.company}</CommentAuthorJob>
          </CommentAuthorNameJob>
        </CommentUserInfo>
        <CommentBody>{body}</CommentBody>
        <CommentCreatedAt>Message was created at {createdAt}</CommentCreatedAt>
      </CommentContent>
    </Comment>
  )
}

export default SingleComment
